import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Voto ricevuto",
  description: "Il voto per il prossimo tema di Coding Bunker è stato ricevuto.",
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return <article className="thanks-page">
    <p className="eyebrow">Voto ricevuto</p>
    <h1>Grazie per aver deciso insieme a noi.</h1>
    <p>La tua preferenza è stata registrata. Useremo i risultati per orientare i prossimi meetup e le call della community.</p>
    <div className="hero-actions"><Link className="button button-primary" href="/">Torna alla homepage</Link><a className="button button-secondary" href="https://www.meetup.com/it-IT/coding-bunker/" target="_blank" rel="noreferrer">Vedi gli eventi ↗</a></div>
  </article>
}
