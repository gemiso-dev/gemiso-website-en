"use client";

import { useEffect, useRef } from "react";

/**
 * React는 SSR 시 <video>의 muted 속성을 HTML에 반영하지 않아, 브라우저가
 * 첫 파싱 시점에 음소거로 인식하지 못해 자동재생이 차단될 수 있다.
 * 마운트 시 JS로 muted를 강제하고 play()를 직접 호출해 이를 보완한다.
 *
 * 그래도 브라우저(예: Safari의 사이트별 Auto-Play 설정)가 자동재생 자체를
 * 막아둔 경우, play()가 실패한다. 이때는 사용자의 첫 상호작용(클릭·스크롤·
 * 터치·키 입력) 시점에 다시 play()를 시도한다 — 사용자 제스처에 의한 재생은
 * Auto-Play 설정과 무관하게 항상 허용되기 때문에, 별도 설정 변경 없이도
 * 사실상 즉시 재생되는 것처럼 동작한다.
 */
export default function HeroVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;

    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    const events = ["pointerdown", "touchstart", "keydown", "scroll", "wheel"] as const;
    const onFirstInteraction = () => {
      tryPlay();
      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
    };
    events.forEach((e) => window.addEventListener(e, onFirstInteraction, { passive: true }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
