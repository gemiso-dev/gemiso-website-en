import type { CSSProperties } from "react";
import ZoomableImage from "@/components/ZoomableImage";
import { asset } from "@/components/site-config";
import type { Solution } from "@/components/solutions-data";

type Flow = NonNullable<NonNullable<Solution["details"]>[number]["flow"]>;

/**
 * 송출 흐름도 — 원본 화면 한 장에서 대상 플랫폼 화면들로 점선 화살표가 뻗어 나간다.
 * 화살표 선은 SVG(비율 무시 + non-scaling-stroke), 화살촉은 대상 행 중앙에 맞춘 CSS 삼각형.
 * 캡션은 화면 아래에 absolute로 붙여, 각 화면의 세로 중심 = 행 중심이 되게 한다.
 */
export default function SolutionFlow({ flow }: { flow: Flow }) {
  const n = flow.targets.length;
  // 대상 카드 행의 세로 중심(%) — 행 높이가 같다고 보고 균등 분할
  const ys = flow.targets.map((_, i) => ((i + 0.5) / n) * 100);

  return (
    <div className="sol-flow">
      <figure className="sol-flow__node sol-flow__node--source">
        <div className="sol-flow__shot">
          <ZoomableImage src={asset(flow.source.image)} alt={`${flow.source.label} screenshot`} />
        </div>
        <figcaption className="sol-flow__label">{flow.source.label}</figcaption>
      </figure>

      <div className="sol-flow__links" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          {ys.map((y) => (
            <path
              key={y}
              d={`M0 50 C 45 50, 45 ${y}, 92 ${y}`}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <span className="sol-flow__origin" />
        {ys.map((y) => (
          <span key={y} className="sol-flow__head" style={{ top: `${y}%` }} />
        ))}
      </div>

      <div className="sol-flow__targets">
        {flow.targets.map((t) => (
          <div key={t.label} className="sol-flow__row">
            <figure
              className="sol-flow__node"
              style={{ "--flow-color": t.color } as CSSProperties}
            >
              <div className="sol-flow__shot">
                <ZoomableImage src={asset(t.image)} alt={`${t.label} streaming screenshot`} />
              </div>
              <figcaption className="sol-flow__label">
                <span className="sol-flow__dot" />
                {t.label}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
