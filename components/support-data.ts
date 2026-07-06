/**
 * 고객지원 데이터 — 고객지원 페이지(/support)의 단일 소스.
 * 디자인(Gemiso Support KR, 변형 A)의 콘텐츠를 그대로 옮겨온 것.
 *
 * 히어로 태그 / 연락처 / 오피스 세 묶음으로 나눠 관리한다.
 */

/** 히어로 하단 안내 칩. */
export const SUPPORT_HERO_TAGS: string[] = [
  "Response within 1 business day",
  "Remote & on-site technical support",
  "Solution adoption consulting",
];

/** 연락처 한 칸(전화/팩스/이메일/운영시간). */
export type ContactMethod = {
  /** 모노 라벨 (예: TEL, E-MAIL) */
  label: string;
  /** 표시값 */
  value: string;
  /** 보조 설명 */
  note: string;
  /** 클릭 가능한 경우의 링크 (tel: / mailto:) */
  href?: string;
};

export const CONTACT_METHODS: ContactMethod[] = [
  { label: "TEL", value: "02-857-1101", note: "Main line", href: "tel:+82285711101" },
  { label: "FAX", value: "02-6009-9031", note: "Fax" },
  {
    label: "E-MAIL",
    value: "sales@gemiso.com",
    note: "Sales & technical inquiries",
    href: "mailto:sales@gemiso.com",
  },
  { label: "HOURS", value: "09:00–18:00", note: "Weekdays · KST" },
];

/** 오피스(거점) 한 곳. */
export type Office = {
  /** 모노 태그 (예: KR · SEOUL) */
  tag: string;
  /** 거점명 */
  name: string;
  /** 주소 */
  addr: string;
  /** 구글 지도 검색 링크 */
  mapHref: string;
};

/** 구글 지도 검색 URL을 만든다. */
function mapHref(query: string): string {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );
}

export const OFFICES: Office[] = [
  {
    tag: "KR · SEOUL",
    name: "Seoul Headquarters",
    addr: "Suite 1802, KGIT Center, 402 World Cup buk-ro, Mapo-gu, Seoul, Korea",
    mapHref: mapHref("서울특별시 마포구 월드컵북로 402 케이지아이티센터"),
  },
  {
    tag: "KR · SEOUL",
    name: "MCC · Media Control Center",
    addr: "Suite 408, Ace Techno Tower 8, 11 Digital-ro 33-gil, Guro-gu, Seoul, Korea",
    mapHref: mapHref("서울특별시 구로구 디지털로33길 11 에이스테크노타워8차"),
  },
  {
    tag: "VN · HO CHI MINH",
    name: "Vietnam Representative Office",
    addr: "1444 Đường 3/2, Phường 2, Quận 11, Thành phố Hồ Chí Minh, Vietnam",
    mapHref: mapHref("1444 Duong 3/2 Phuong 2 Quan 11 Ho Chi Minh Vietnam"),
  },
];
