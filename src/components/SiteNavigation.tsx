"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function SiteNavigation() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "it"
  }, [isEnglish])
  const links = isEnglish
    ? [
        ["/en", "Home"],
        ["/events", "Events"],
        ["/en#community", "Community"],
        ["/partners", "Partners"],
        ["/press", "Press"],
      ]
    : [
        ["/events", "Eventi"],
        ["/impatto-milano", "Impatto"],
        ["/partners", "Partner"],
        ["/staff", "Community"],
        ["/press", "Press"],
      ]

  return (
    <nav aria-label={isEnglish ? "Main navigation" : "Navigazione principale"}>
      {links.map(([href, label]) => (
        <Link href={href} key={href}>
          {label}
        </Link>
      ))}
      <a
        href="https://www.meetup.com/it-IT/coding-bunker/"
        target="_blank"
        rel="noreferrer"
      >
        Meetup <span aria-hidden="true">↗</span>
      </a>
      <Link
        className="language-link"
        href={isEnglish ? "/" : "/en"}
        hrefLang={isEnglish ? "it" : "en"}
      >
        {isEnglish ? "IT" : "EN"}
      </Link>
    </nav>
  )
}
