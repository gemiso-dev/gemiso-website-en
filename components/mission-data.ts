/**
 * 미션 페이지(/mission) 데이터 — 단일 소스.
 * 'People, Time, Places'를 잇는 미디어라는 미션을 세 기둥으로 풀어낸다.
 */

export type MissionDiagram = "people" | "time" | "places";

export type MissionPillar = {
  /** 순번 (모노 캡션) */
  no: string;
  /** 영문 모노 라벨 */
  mono: string;
  /** 본문 영문 제목 (예: Media Connecting People) */
  en: string;
  /** 제목 2줄 (예: ["사람을", "연결하다"]) */
  title: [string, string];
  /** 도입 문장(큰 리드) */
  lead: string;
  /** 본문 문단 */
  body: string;
  /** 배경 다이어그램 종류 */
  diagram: MissionDiagram;
  /** 다이어그램 하단 캡션 */
  caption: string;
  /** 옅은 배경(surface) 섹션 여부 */
  surface?: boolean;
};

/** 히어로 하단 커넥터 노드(사람·시간·장소). */
export const MISSION_NODES: { ko: string; en: string }[] = [
  { ko: "People", en: "PEOPLE" },
  { ko: "Time", en: "TIME" },
  { ko: "Places", en: "PLACES" },
];

export const MISSION_PILLARS: MissionPillar[] = [
  {
    no: "01",
    mono: "MEDIA CONNECTING PEOPLE",
    en: "Media Connecting People",
    title: ["Connecting", "People"],
    lead:
      "Media technology connects people and builds community through shared ideas and experiences.",
    body:
      "Geminisoft develops reliable media platform technologies for television and digital platforms. Media connects people beyond time and place, allowing ideas and experiences to be shared.\nGeminisoft builds media technologies that bring people and content together beyond boundaries.",
    diagram: "people",
    caption: "PEOPLE · Connection & Interaction",
  },
  {
    no: "02",
    mono: "MEDIA CONNECTING TIME",
    en: "Media Connecting Time",
    title: ["Connecting", "Time"],
    lead: "Media technology bridges time, connecting records of the past with the experiences of today.",
    body:
      "Recorded content does not disappear with time. When rediscovered and reused, it gains new meaning. Old footage and materials carry memory, culture, and experience to future generations.\nGeminisoft builds media archive technologies that preserve content reliably and make past records accessible for the present and the future.",
    diagram: "time",
    caption: "TIME · From the Past to the Future",
    surface: true,
  },
  {
    no: "03",
    mono: "MEDIA CONNECTING PLACES",
    en: "Media Connecting Places",
    title: ["Connecting", "Places"],
    lead:
      "Media technology carries cultures, experiences, and ideas beyond physical distance, connecting regions more broadly.",
    body:
      "Culture and content do not remain in one place. Through media, they reach a wider world, where people share perspectives and experiences, gaining a deeper understanding of different cultures.\nGeminisoft builds media technologies that carry cultures and ideas across regions, platforms, and physical boundaries.",
    diagram: "places",
    caption: "PLACES · Beyond Boundaries",
  },
];
