import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Logo from "../assets/logo.svg"
import TeamImage from "../assets/team/team.png"
import FloatingControls from "@/components/FloatingControls"
import "./globals.css"
import "./overrides.css"

export const metadata: Metadata = { title: "Coding Bunker | Community tech a Milano", description: "Meetup gratuiti a Milano per chi costruisce software: esperienze reali, confronto tecnico e community.", icons: "/favicon.ico", openGraph: { title: "Coding Bunker", description: "La community di chi costruisce software.", images: TeamImage.src, type: "website", locale: "it_IT", url: "https://www.codingbunker.it" } }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>
    <header className="site-header"><div className="shell nav"><Link href="/" className="brand" aria-label="Coding Bunker, home"><Image src={Logo} alt="Coding Bunker" height={34} priority /></Link><nav aria-label="Navigazione principale"><Link href="/events">Eventi</Link><Link href="/impatto-milano">Impatto</Link><Link href="/partners">Partner</Link><Link href="/staff">Community</Link><a href="https://www.meetup.com/it-IT/coding-bunker/" target="_blank" rel="noreferrer">Meetup <span aria-hidden="true">↗</span></a></nav></div></header>
    <main className="shell main-content">{children}</main>
    <footer className="site-footer"><div className="shell footer-content"><div><p className="footer-brand">Coding Bunker</p><p>Una community indipendente per chi costruisce software.</p></div><div className="footer-links"><a href="https://t.me/codingbunker" target="_blank" rel="noreferrer">Telegram</a><a href="https://www.meetup.com/it-IT/coding-bunker/" target="_blank" rel="noreferrer">Meetup</a><Link href="/impatto-milano">Impatto a Milano</Link><Link href="/press">Press kit</Link><Link href="/code-of-conduct">Code of Conduct</Link><a href="mailto:info@codingbunker.it">Contatti</a></div></div></footer>
    <FloatingControls />
  </body></html>
}
