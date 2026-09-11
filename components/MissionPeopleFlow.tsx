"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useInView } from "@/components/useInView";

/**
 * Mission 'Connecting People' diagram (animated).
 * A flow travels along the edges and activates the destination node. Once all
 * nodes are activated in random order, it pauses briefly, then resets and repeats.
 * (Rendered inside an SVG — MissionDiagram wraps it in <svg>)
 */

const NODES = [
  { x: 70, y: 61 }, // 0
  { x: 250, y: 61 }, // 1
  { x: 70, y: 126 }, // 2
  { x: 160, y: 126 }, // 3
  { x: 250, y: 126 }, // 4
  { x: 160, y: 61 }, // 5
];

/** Adjacency edges (line segments). The graph is connected, so any active→inactive walk reaches all. */
const EDGES: [number, number][] = [
  [0, 5],
  [5, 1],
  [2, 3],
  [3, 4],
  [0, 2],
  [5, 3],
  [1, 4],
];

const NODE_S = 11; // Node size (same for active/inactive — only the fill color changes)

type Flow = { from: number; to: number; key: number };

export default function MissionPeopleFlow() {
  // Initial values are deterministic (SSR match) — the animation starts in an effect after mount.
  const [active, setActive] = useState<number[]>([]);
  const [litEdges, setLitEdges] = useState<number[]>([]);
  const [flow, setFlow] = useState<Flow | null>(null);
  const timers = useRef<number[]>([]);
  const keyRef = useRef(0);
  const [viewRef, inView] = useInView<SVGGElement>();

  useEffect(() => {
    // Reduced motion: no animation, fix everything in the active state
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive([0, 1, 2, 3, 4, 5]);
      setLitEdges(EDGES.map((_, i) => i));
      return;
    }
    // Do not start until scrolled into view
    if (!inView) return;

    const after = (ms: number, fn: () => void) => {
      timers.current.push(window.setTimeout(fn, ms));
    };
    const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

    let activeSet = new Set<number>();
    let litSet = new Set<number>();

    const step = () => {
      if (litSet.size >= EDGES.length) {
        after(1900, reset); // All edges lit — show briefly, then fade everything out
        return;
      }
      // Among edges not yet lit, those with one endpoint active (flow starts from an active node)
      const cands = EDGES.map((e, i) => ({ e, i })).filter(
        ({ e: [a, b], i }) =>
          !litSet.has(i) && (activeSet.has(a) || activeSet.has(b)),
      );
      if (cands.length === 0) {
        after(900, start);
        return;
      }
      const { e, i } = pick(cands);
      const from = activeSet.has(e[0]) ? e[0] : e[1];
      const to = from === e[0] ? e[1] : e[0];
      keyRef.current += 1;
      setFlow({ from, to, key: keyRef.current });
      // After drawing the flow (1.1s), activate the destination node + light the edge, then next step
      after(1100, () => {
        activeSet.add(to);
        litSet.add(i);
        setActive([...activeSet]);
        setLitEdges([...litSet]);
        setFlow(null);
        after(750, step);
      });
    };

    // Fade everything out → once fully off, start again
    const reset = () => {
      activeSet = new Set();
      litSet = new Set();
      setActive([]);
      setLitEdges([]);
      setFlow(null);
      after(1000, start); // After fade-out (0.8s) completes, begin fade-in
    };

    const start = () => {
      activeSet = new Set([Math.floor(Math.random() * NODES.length)]);
      litSet = new Set();
      setActive([...activeSet]);
      setLitEdges([]);
      setFlow(null);
      after(800, step);
    };

    after(600, start);

    const ids = timers.current;
    return () => {
      ids.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, [inView]);

  return (
    <g ref={viewRef}>
      {/* Edges — lighting on/off transitions smoothly via the accent color */}
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          className={`mission-people__edge${litEdges.includes(i) ? " is-on" : ""}`}
        />
      ))}
      {/* Flowing edge beam (drawn from → to) */}
      {flow &&
        (() => {
          const f = NODES[flow.from];
          const t = NODES[flow.to];
          const len = Math.hypot(t.x - f.x, t.y - f.y);
          return (
            <line
              key={flow.key}
              x1={f.x}
              y1={f.y}
              x2={t.x}
              y2={t.y}
              className="mission-people__beam"
              style={{ "--len": len } as CSSProperties}
            />
          );
        })()}
      {/* Nodes — when active, the fill color transitions smoothly (same element kept) */}
      {NODES.map((n, i) => (
        <rect
          key={i}
          x={n.x - NODE_S / 2}
          y={n.y - NODE_S / 2}
          width={NODE_S}
          height={NODE_S}
          rx={2.5}
          ry={2.5}
          className={`mission-people__node${active.includes(i) ? " is-on" : ""}`}
        />
      ))}
    </g>
  );
}
