/**
 * 홈 랜딩 — 기간 한정 행사 공지 데이터.
 * 자동으로 숨지 않는다. 행사가 끝나면 이 파일과 HomeEventBanner 사용처를 지운다.
 */

export type HomeEvent = {
  eyebrow: string;
  title: string;
  desc: string;
  /** 표시용 일정·장소·참가비 */
  meta: { label: string; value: string }[];
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export const HOME_EVENT: HomeEvent = {
  eyebrow: "US Debut · Upcoming Event",
  title: "Meet GEMISO at VMI’s Annual Showcase",
  desc: "Come see the US debut of GEMISO, shaping what’s next in Pro AV — live at VMI’s Southern California Showcase.",
  meta: [
    { label: "Date", value: "Wed, Nov 4, 2026" },
    { label: "Venue", value: "Knott’s Berry Farm Hotel" },
    { label: "Admission", value: "Free to attend" },
  ],
  href: "https://vmivideo.com/southern-california-showcase/",
  cta: "Event Details",
  image: "/assets/events/vmi-showcase-2026.jpg",
  imageAlt:
    "Come see the US debut of GEMISO at VMI’s Annual Showcase — Nov. 4th, Knott’s Berry Farm Hotel",
};
