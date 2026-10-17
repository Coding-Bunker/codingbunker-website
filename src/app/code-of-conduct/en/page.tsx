import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Code of Conduct | Coding Bunker", description: "Coding Bunker community Code of Conduct." }

export default function EnglishCodeOfConductPage() {
  return <article className="policy">
    <header className="policy-header"><p className="eyebrow">Community policy · Version 1.0</p><h1>Code of Conduct</h1><p className="policy-summary">Coding Bunker is an open, collaborative and safe space to learn, share knowledge and discuss software.</p><p className="muted">Last updated: 18 October 2026 · <Link className="text-link" href="/code-of-conduct">Versione italiana</Link></p></header>
    <section><h2>Our commitment</h2><p>This Code applies to Coding Bunker meetups, workshops, Telegram channels and all official online and offline interactions between attendees, speakers, partners and organisers. We welcome people of every experience level and background.</p></section>
    <section><h2>Expected behaviour</h2><ul><li>Respectful, constructive technical discussion and active listening.</li><li>Generous sharing of knowledge and experience.</li><li>Clear, respectful feedback, including when people disagree.</li><li>Welcoming newcomers and respecting different experience levels.</li></ul></section>
    <section><h2>Unacceptable behaviour</h2><ul><li>Harassment, intimidation, discrimination, personal attacks or threats.</li><li>Sexist, racist or demeaning comments and unwanted physical contact.</li><li>Spam, scams, unapproved promotion or sharing personal information without consent.</li><li>Intentional, repeated disruption of events or conversations.</li></ul></section>
    <section><h2>Reporting a concern</h2><p>At an event, speak to an identifiable organiser. Afterwards, email <a className="text-link" href="mailto:info@codingbunker.it">info@codingbunker.it</a>. We handle reports as confidentially as possible, but cannot promise absolute anonymity if action is needed to keep people safe.</p><p className="policy-note">If someone is in immediate danger, contact venue staff or emergency services first.</p></section>
    <section><h2>Enforcement</h2><p>Organisers take reports seriously and may issue a verbal warning, ask for conduct to stop, remove someone from an event or official channel, or exclude them from future events. Any action will be proportionate to the conduct and the safety of the people involved.</p></section>
  </article>
}
