/**
 * 홈 랜딩 — 기간 한정 행사 공지 데이터.
 * 자동으로 숨지 않는다. 행사가 끝나면 이 파일과 HomeEventBanner 사용처를 지운다.
 */

export type HomeEvent = {
  eyebrow: string;
  title: string;
  desc: string;
  /** 표시용 일정·장소 */
  meta: { label: string; value: string }[];
  href: string;
  cta: string;
  /** 배너 이미지(선택). 없으면 CSS로 만든 스폰서 카드를 보여준다. */
  image?: string;
  imageAlt: string;
};

export const HOME_EVENT: HomeEvent = {
  eyebrow: "Upcoming Event",
  title: "GEMISO is a Gold Sponsor of the 2027 Silicon Valley Video Summit",
  desc: "Join us at the fifth annual Silicon Valley Video Summit, where the people shaping enterprise video meet. Visit the GEMISO tabletop to see what’s next in AI-driven video production.",
  meta: [
    { label: "Date", value: "Tue, Jan 26, 2027" },
    { label: "Venue", value: "Computer History Museum" },
  ],
  href: "https://events.sportsvideo.org/2027-silicon-valley-video-summit/",
  cta: "Event Details",
  image: "/assets/events/svvs-2027-banner.jpg",
  imageAlt:
    "GEMISO at the Silicon Valley Video Summit — January 26, 2027, Computer History Museum, 1401 N. Shoreline Blvd., Mountain View, CA 94043. Come see us at the Show!",
};
