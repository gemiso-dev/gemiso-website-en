import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/site-config";
import { SOLUTION_SLUGS } from "@/components/solutions-data";

// output: "export"에서 정적 sitemap.xml로 출력한다.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/mission/",
    "/history/",
    "/history/detail/",
    "/certification/",
    "/customers/",
    "/technology/",
    "/support/",
    "/partners/",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE_URL}${p}`,
  }));

  const solutionEntries: MetadataRoute.Sitemap = SOLUTION_SLUGS.map((s) => ({
    url: `${SITE_URL}/solutions/${s}/`,
  }));

  // Newsroom is hidden while gemiso.com runs as a standalone English site.
  // The route lives in app/_news (a Next.js private folder, so it is not
  // built) and news-data.ts is untouched — rename the folder back and restore
  // the nav/footer/sitemap entries to bring it back.
  return [...staticEntries, ...solutionEntries];
}
