import Image from "next/image";
import Link from "next/link";
import { COMPANY, FOOTER_COLUMNS, asset } from "@/components/site-config";

/** 공통 푸터 — 브랜드 + 링크 컬럼 + 회사정보 + 법적 고지. */
export default function SiteFooter() {
  return (
    <footer className="gem-footer">
      <div className="gem-footer__inner">
        <div className="gem-footer__top">
          <div className="gem-footer__brand">
            <Image
              src={asset("/assets/gemiso-logo-invert.svg")}
              alt="GEMISO"
              width={154}
              height={36}
            />
            <p className="gem-footer__tagline">
              The digital media management platform for broadcasting — built by
              GEMISO and backed by our own technical support.
            </p>
          </div>

          <div className="gem-footer__cols">
            {FOOTER_COLUMNS.map((col, i) => (
              <div key={i}>
                <div className="gem-footer__heading">{col.heading}</div>
                <div className="gem-footer__links">
                  {col.links.map((link, j) => (
                    <Link key={j} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <div className="gem-footer__heading">Contact</div>
              <div className="gem-footer__links">
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                <a href={`mailto:${COMPANY.techEmail}`}>{COMPANY.techEmail}</a>
                {COMPANY.tel ? (
                  <a href={COMPANY.telHref}>{COMPANY.tel}</a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="gem-footer__bottom">
          <span>© 2026 {COMPANY.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
