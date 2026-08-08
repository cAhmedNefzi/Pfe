import { NextResponse } from "next/server";

const fallback = (tool: string, input: string) => ({
  tool,
  title: "AI workspace draft",
  content: `Here is a structured starting point for: ${input || "your project"}.\n\nNext steps:\n1. Clarify the problem and target users.\n2. Define measurable objectives.\n3. Choose a realistic technical scope.\n4. Validate the plan with your supervisor.`,
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const tool = String(body.tool || "project");
  const input = String(body.input || "");

  if (!process.env.AI_GATEWAY_API_KEY) {
    return NextResponse.json({ ...fallback(tool, input), mode: "demo" });
  }

  // AI provider integration is intentionally isolated here so the UI can ship
  // without exposing secrets. Connect the preferred Vercel AI Gateway model next.
  return NextResponse.json({ ...fallback(tool, input), mode: "configured" });
}
