"use client";

import { useInView } from "@/components/useInView";

// Empty (outline-only) node
function Node({ x, y, s = 11 }: { x: number; y: number; s?: number }) {
  return (
    <rect
      x={x - s / 2}
      y={y - s / 2}
      width={s}
      height={s}
      className="mission-diagram__node"
    />
  );
}

/**
 * Time — a selection cursor on the timeline moves Past → Present → Future (CSS animation).
 * The wrapping <g> gets is-inview when scrolled into view so it plays (paused before then).
 */
export default function MissionTimeline() {
  const [viewRef, inView] = useInView<SVGGElement>();
  return (
    <g ref={viewRef} className={inView ? "is-inview" : undefined}>
      <g className="mission-diagram__link">
        <line x1={32} y1={100} x2={285} y2={100} />
        <line x1={77} y1={74} x2={77} y2={100} className="mission-diagram__tick" />
        <line x1={160} y1={74} x2={160} y2={100} className="mission-diagram__tick" />
        <line x1={243} y1={74} x2={243} y2={100} className="mission-diagram__tick" />
      </g>
      <text x={77} y={62} className="mission-diagram__label mission-diagram__label--t0">
        Past
      </text>
      <text x={160} y={62} className="mission-diagram__label mission-diagram__label--t1">
        Present
      </text>
      <text x={243} y={62} className="mission-diagram__label mission-diagram__label--t2">
        Future
      </text>
      <Node x={77} y={100} />
      <Node x={160} y={100} />
      <Node x={243} y={100} />
      {/* Selection cursor — moves Past → Present → Future (base position: Present x=160) */}
      <rect
        x={160 - 7}
        y={100 - 7}
        width={14}
        height={14}
        className="mission-diagram__cursor"
      />
    </g>
  );
}
