import type { MissionDiagram as DiagramKind } from "@/components/mission-data";
import MissionPeopleFlow from "@/components/MissionPeopleFlow";
import MissionPlacesOrb from "@/components/MissionPlacesOrb";
import MissionTimeline from "@/components/MissionTimeline";

/**
 * Decorative per-pillar mission diagram (pure SVG).
 * People = network, Time = timeline, Places = geographic connection. Color follows --gem-accent in globals.css.
 */

export default function MissionDiagram({ kind }: { kind: DiagramKind }) {
  return (
    <svg
      className="mission-diagram__svg"
      viewBox="0 0 320 180"
      role="presentation"
      aria-hidden="true"
    >
      {kind === "people" && <MissionPeopleFlow />}
      {kind === "time" && <MissionTimeline />}
      {kind === "places" && <MissionPlacesOrb />}
    </svg>
  );
}
