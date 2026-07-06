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
      "Through the technology Geminisoft develops, we express our commitment to connecting people and building communities.",
    body:
      "Geminisoft develops powerful media platform technologies for mass media industries such as TV and YouTube. These media can help individuals connect and interact regardless of time and place. We hold a somewhat naive dream of using media technology to bring people together as one — across the barriers of time and distance — while respecting their diversity.",
    diagram: "people",
    caption: "PEOPLE · Connection & Interaction",
  },
  {
    no: "02",
    mono: "MEDIA CONNECTING TIME",
    en: "Media Connecting Time",
    title: ["Connecting", "Time"],
    lead: "Media exists beyond time, connecting the past with the present.",
    body:
      "Through books written a thousand years ago, we look into the past, create new content, and pass it on to future generations. When media content such as video is archived, we can bring different eras and different moments of history a little closer together. Geminisoft develops technology to archive video — the data that is hardest to archive. Through media archived with our technology, people will be able to experience the events and cultures of the past, and we believe this archived content will connect people across time, from the past into the future.",
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
      "It reflects our belief that through media, people in different places can expand and share cultures, ideas, and experiences.",
    body:
      "We take on the challenge of developing media technologies that help the culture and content of one place reach beyond geographic limits and extend to another. Media is a medium for discovering and conveying new cultural experiences and values. Through media, we will connect people across regions by offering better insight into one another's worlds. With the media technology we create, we will build global connections that transcend physical boundaries, where diverse cultures and perspectives can be shared and appreciated.",
    diagram: "places",
    caption: "PLACES · Beyond Boundaries",
  },
];
