import { redirect } from "next/navigation"

/** The public crew page replaced the former Notion-backed team listing. */
export default function TeamPage() {
  redirect("/staff")
}
