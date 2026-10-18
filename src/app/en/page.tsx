import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import TeamImage from "../../assets/team/team.png"
import HeroCodeMotifs from "@/components/HeroCodeMotifs"

export const metadata: Metadata = {
  title: "Coding Bunker | Tech community in Milan",
  description: "An independent tech community in Milan for people who build software, share experience and learn together.",
  alternates: { canonical: "/en", languages: { it: "/" } },
  openGraph: { title: "Coding Bunker | Tech community in Milan", description: "Meetups, talks and practical conversations for people who build software.", locale: "en_GB", url: "https://www.codingbunker.it/en" },
}

export default function EnglishHome() {
  return <article className="english-page">
    <section className="hero" aria-labelledby="english-home-title">
      <div className="hero-copy"><p className="eyebrow">Independent tech community · Milan</p><h1 id="english-home-title">Where people who build software meet.</h1><p className="hero-lede">Free meetups, real-world experience and technical conversations for people who want to build better software, together.</p><div className="hero-actions"><a className="button button-primary" href="https://www.meetup.com/it-IT/coding-bunker/" target="_blank" rel="noreferrer">See upcoming events ↗</a><a className="button button-secondary" href="https://sessionize.com/codingbunker/" target="_blank" rel="noreferrer">Submit a talk ↗</a></div></div><div className="hero-image-wrap"><Image src={TeamImage} alt="The Coding Bunker community during a meetup" priority className="hero-image" /><HeroCodeMotifs /></div>
    </section>
    <section className="section english-grid" id="community"><div><p className="eyebrow">What we do</p><h2>Practical knowledge is better when it circulates.</h2></div><div><p>We organise accessible events where professionals share decisions, trade-offs and lessons learned from real work. Everyone is welcome, whether you are starting out or have years of experience.</p><p>Our events are free, community-led and designed to leave room for questions and honest conversations.</p><Link className="button button-secondary" href="/code-of-conduct/en">Read our Code of Conduct</Link></div></section>
    <section className="section english-cta"><p className="eyebrow">Get involved</p><h2>Have a story, a space or an idea?</h2><p>Join the community, propose a session through Sessionize or explore how to partner with Coding Bunker.</p><div className="hero-actions"><a className="button button-primary" href="https://sessionize.com/codingbunker/" target="_blank" rel="noreferrer">Call for papers ↗</a><Link className="button button-secondary" href="/partners">Become a partner</Link><a className="button button-secondary" href="/">Italiano</a></div></section>
  </article>
}
