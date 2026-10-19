import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Get involved",
  description: "Find out how to join an event, submit a talk, offer a venue or contact Coding Bunker.",
  alternates: { canonical: "/contact", languages: { it: "/contatti" } },
}

export default function ContactPage() {
  return <article className="contact-page">
    <header className="page-intro contact-intro"><p className="eyebrow">Get involved</p><h1>A good meetup starts before the evening.</h1><p>Whether you want to join, share something you learned or help create the right space, choose the path that fits you best.</p></header>
    <section className="contact-grid" aria-label="Ways to get involved">
      <article className="contact-card"><p className="contact-card-index">01</p><h2>Join a meetup</h2><p>Follow the calendar and find the next free Coding Bunker event in Milan.</p><a className="button button-secondary" href="https://www.meetup.com/it-IT/coding-bunker/" target="_blank" rel="noreferrer">See events ↗</a></article>
      <article className="contact-card"><p className="contact-card-index">02</p><h2>Submit a talk</h2><p>Share a practical experience by proposing a talk for a Coding Bunker meetup.</p><a className="button button-secondary" href="https://sessionize.com/codingbunker/" target="_blank" rel="noreferrer">Submit a proposal ↗</a></article>
      <article className="contact-card"><p className="contact-card-index">03</p><h2>Offer a venue</h2><p>Have a space for a community evening? Tell us about it through the partnership form.</p><a className="button button-secondary" href="https://forms.gle/FPca5upst1VTGFP86" target="_blank" rel="noreferrer">Offer a venue ↗</a></article>
      <article className="contact-card"><p className="contact-card-index">04</p><h2>Contact the team</h2><p>For press, collaborations or questions not covered by the other paths.</p><a className="button button-secondary" href="mailto:info@codingbunker.it">Email the team ↗</a></article>
    </section>
    <section className="contact-note"><div><p className="eyebrow">An open community</p><h2>You do not need a perfect profile.</h2></div><div><p>Coding Bunker events are free and leave room for questions, different experiences and useful conversations.</p><Link className="text-link" href="/code-of-conduct/en">Read the Code of Conduct <span aria-hidden="true">→</span></Link></div></section>
  </article>
}
