import type { Metadata } from "next"
import { redirect } from "next/navigation"

/** The public crew page replaced the former Notion-backed team listing. */
export const metadata: Metadata = {
  title: "Team",
  description: "Le persone che organizzano Coding Bunker.",
}

export default function TeamPage() {
  redirect("/staff")
}
