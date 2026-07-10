"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useInView } from "@/components/useInView";

/**
 * Mission 'Connecting Places' diagram (animated).
 * A concentric polygon orb (center hub + inner pentagon ring + outer decagon ring)
 * joined by a triangular mesh. From the center outward, each step sends beams from
 * 2–3 active nodes to activate the next nodes. Once all are on, it pauses, then
 * everything turns off and repeats from the center.
 * (Rendered inside an SVG — MissionDiagram wraps it in <svg>)
 */

function buildOrbNet() {
  const cx = 160;
  const cy = 92;
  const innerR = 34;
  const outerR = 72;
  const innerN = 5;
  const outerN = 10;
  const TOP = -Math.PI / 2;
  const nodes: { x: number; y: number; r: number; a: number }[] = [
    { x: cx, y: cy, r: 0, a: 0 }, // 0: center
  ];
  const inner: number[] = [];
  for (let j = 0; j < innerN; j++) {
    const a = TOP + (2 * Math.PI * j) / innerN;
    inner.push(nodes.length);
    nodes.push({ x: cx + innerR * Math.cos(a), y: cy + innerR * Math.sin(a), r: innerR, a });
  }
  const outer: number[] = [];
  for (let j = 0; j < outerN; j++) {
    const a = TOP + (2 * Math.PI * j) / outerN;
    outer.push(nodes.length);
    nodes.push({ x: cx + outerR * Math.cos(a), y: cy + outerR * Math.sin(a), r: outerR, a });
  }
  const edges: [number, number][] = [];
  for (let j = 0; j < innerN; j++) {
    edges.push([inner[j], inner[(j + 1) % innerN]]); // inner ring
    edges.push([0, inner[j]]); // center spokes
  }
  for (let j = 0; j < outerN; j++) {
    edges.push([outer[j], outer[(j + 1) % outerN]]); // outer ring
  }
  for (let j = 0; j < innerN; j++) {
    edges.push([inner[j], outer[(2 * j) % outerN]]); // inner → outer (triangulation)
    edges.push([inner[j], outer[(2 * j + 1) % outerN]]);
    edges.push([inner[j], outer[(2 * j - 1 + outerN) % outerN]]);
  }
  return { nodes, edges };
}

const { nodes, edges } = buildOrbNet();

// Appearance order by radius then angle, and each node's rank
const ORDER = nodes
  .map((_, i) => i)
  .sort((a, b) => nodes[a].r - nodes[b].r || nodes[a].a - nodes[b].a);
const RANK: number[] = [];
ORDER.forEach((idx, pos) => (RANK[idx] = pos));

// Adjacency list
const ADJ: number[][] = nodes.map(() => []);
edges.forEach(([a, b]) => {
  ADJ[a].push(b);
  ADJ[b].push(a);
});

// Parent = the neighbor that lights up earlier (further in) and is closest to the center → beam extends from here
const PARENT: number[] = nodes.map((_, i) => {
  let best = -1;
  let bestRank = Infinity;
  for (const j of ADJ[i]) {
    if (RANK[j] < RANK[i] && RANK[j] < bestRank) {
      bestRank = RANK[j];
      best = j;
    }
  }
  return best;
});

const CENTER = ORDER[0];
const BEAM_MS = 1000;

type Beam = { from: number; to: number; key: number };

export default function MissionPlacesOrb() {
  const [active, setActive] = useState<number[]>([]);
  const [beams, setBeams] = useState<Beam[]>([]);
  const timers = useRef<number[]>([]);
  const keyRef = useRef(0);
  const [viewRef, inView] = useInView<SVGGElement>();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(nodes.map((_, i) => i));
      return;
    }
    // Do not start until scrolled into view
    if (!inView) return;

    const after = (ms: number, fn: () => void) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    let activeSet = new Set<number>();

    const step = () => {
      if (activeSet.size >= nodes.length) {
        after(2600, reset); // All appeared — pause briefly, then reset
        return;
      }
      // Frontier candidates: not yet on, and whose parent (inner neighbor) is on
      const frontier: number[] = [];
      for (let n = 0; n < nodes.length; n++) {
        if (!activeSet.has(n) && PARENT[n] >= 0 && activeSet.has(PARENT[n])) {
          frontier.push(n);
        }
      }
      if (frontier.length === 0) {
        after(2600, reset);
        return;
      }
      // Pick 2–3 at random
      const want = Math.min(frontier.length, 2 + Math.floor(Math.random() * 2));
      const pool = frontier.slice();
      const chosen: number[] = [];
      for (let i = 0; i < want; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        chosen.push(pool.splice(idx, 1)[0]);
      }
      const bs = chosen.map((n) => {
        keyRef.current += 1;
        return { from: PARENT[n], to: n, key: keyRef.current };
      });
      setBeams(bs);
      after(BEAM_MS, () => {
        chosen.forEach((n) => activeSet.add(n)); // Beam arrives → node active
        setActive([...activeSet]);
        setBeams([]);
        after(420, step);
      });
    };

    const reset = () => {
      activeSet = new Set();
      setActive([]);
      setBeams([]);
      after(1700, start); // After everything fades out, start again
    };

    const start = () => {
      activeSet = new Set([CENTER]);
      setActive([CENTER]);
      setBeams([]);
      after(700, step); // Center lights first, then extends outward shortly after
    };

    after(600, start);

    const ids = timers.current;
    return () => {
      ids.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, [inView]);

  const on = (i: number) => active.includes(i);

  return (
    <g ref={viewRef}>
      {/* Triangular mesh (lines) — connected once both endpoints are on */}
      <g>
        {edges.map(([a, b], e) => {
          // Edges the beam passes through (parent) light instantly; others fade in softly
          const soft = !(PARENT[a] === b || PARENT[b] === a);
          return (
            <line
              key={e}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              className={`mission-orb__edge${soft ? " mission-orb__edge--soft" : ""}${
                on(a) && on(b) ? " is-on" : ""
              }`}
            />
          );
        })}
      </g>
      {/* Extending beams (drawn parent → node) */}
      {beams.map((b) => {
        const f = nodes[b.from];
        const t = nodes[b.to];
        const len = Math.hypot(t.x - f.x, t.y - f.y);
        return (
          <line
            key={b.key}
            x1={f.x}
            y1={f.y}
            x2={t.x}
            y2={t.y}
            className="mission-orb__beam"
            style={{ "--len": len } as CSSProperties}
          />
        );
      })}
      {/* Square nodes (all the same size) */}
      {nodes.map((n, i) => {
        const s = 8;
        return (
          <rect
            key={i}
            x={n.x - s / 2}
            y={n.y - s / 2}
            width={s}
            height={s}
            className={`mission-people__node${on(i) ? " is-on" : ""}`}
          />
        );
      })}
    </g>
  );
}
