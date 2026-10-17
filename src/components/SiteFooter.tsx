"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SiteFooter() {
  const isEnglish = usePathname().startsWith("/en")
  return <footer className="site-footer"><div className="shell footer-content"><div><p className="footer-brand">Coding Bunker</p><p>{isEnglish ? "An independent community for people who build software." : "Una community indipendente per chi costruisce software."}</p></div><div className="footer-links">{isEnglish ? <><a href="https://t.me/codingbunker" target="_blank" rel="noreferrer">Telegram</a><a href="https://www.meetup.com/coding-bunker/photos/" target="_blank" rel="noreferrer">Community photos</a><Link href="/partners">Partners</Link><Link href="/press">Press kit</Link><Link href="/code-of-conduct/en">Code of Conduct</Link><Link href="/">Italiano</Link></> : <><a href="https://t.me/codingbunker" target="_blank" rel="noreferrer">Telegram</a><a href="https://www.meetup.com/it-IT/coding-bunker/" target="_blank" rel="noreferrer">Meetup</a><a href="https://www.meetup.com/coding-bunker/photos/" target="_blank" rel="noreferrer">Foto della community</a><Link href="/impatto-milano">Impatto a Milano</Link><Link href="/press">Press kit</Link><Link href="/code-of-conduct">Code of Conduct</Link><Link href="/en">English</Link><a href="mailto:info@codingbunker.it">Contatti</a></>}</div></div></footer>
}
