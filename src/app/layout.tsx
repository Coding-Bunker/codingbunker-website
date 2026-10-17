import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Logo from "../assets/logo.svg"
import TeamImage from "../assets/team/team.png"
import FloatingControls from "@/components/FloatingControls"
import SiteNavigation from "@/components/SiteNavigation"
import SiteFooter from "@/components/SiteFooter"
import "./globals.css"
import "./overrides.css"

export const metadata: Metadata = { metadataBase: new URL("https://www.codingbunker.it"), title: { default: "Coding Bunker | Community tech a Milano", template: "%s | Coding Bunker" }, description: "Meetup gratuiti a Milano per chi costruisce software: esperienze reali, confronto tecnico e community.", keywords: ["Coding Bunker", "meetup tech Milano", "community developer", "eventi tecnologia Milano", "call for papers"], authors: [{ name: "Coding Bunker" }], creator: "Coding Bunker", icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" }, manifest: "/site.webmanifest", alternates: { canonical: "/", languages: { it: "/", en: "/en" } }, openGraph: { title: "Coding Bunker | Community tech a Milano", description: "La community di chi costruisce software.", images: [{ url: TeamImage.src, width: 1200, height: 630, alt: "La community Coding Bunker durante un meetup" }], type: "website", locale: "it_IT", alternateLocale: "en_GB", url: "https://www.codingbunker.it" }, twitter: { card: "summary_large_image", title: "Coding Bunker | Community tech a Milano", description: "La community di chi costruisce software.", images: [TeamImage.src] } }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Coding Bunker", url: "https://www.codingbunker.it", logo: "https://www.codingbunker.it/logo.svg", description: "Community tech indipendente a Milano per chi costruisce software.", sameAs: ["https://www.meetup.com/it-IT/coding-bunker/", "https://t.me/codingbunker", "https://www.youtube.com/@codingbunker"] }) }} />
    <header className="site-header"><div className="shell nav"><Link href="/" className="brand" aria-label="Coding Bunker, home"><Image src={Logo} alt="Coding Bunker" height={34} priority /></Link><SiteNavigation /></div></header>
    <main className="shell main-content">{children}</main>
    <SiteFooter />
    <FloatingControls />
  </body></html>
}
