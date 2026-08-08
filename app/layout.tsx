import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PFE Copilot — Your AI project partner",
  description: "Plan, research, build and defend your PFE or PFA with AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
