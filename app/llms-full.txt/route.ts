import { buildLlmsFullTxt } from "@/components/llms";

// Emitted as a static llms-full.txt by `output: "export"`.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
