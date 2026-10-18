import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contatti e partecipa",
  description: "Scopri come partecipare agli eventi, proporre un talk, offrire una location o collaborare con Coding Bunker.",
}

const paths = [
  ["Partecipa a un meetup", "Segui il calendario e trova il prossimo incontro gratuito a Milano.", "https://www.meetup.com/it-IT/coding-bunker/", "Vedi gli eventi ↗"],
  ["Proponi un talk", "Condividi un’esperienza concreta attraverso la call for papers di Coding Bunker.", "https://sessionize.com/codingbunker/", "Invia una proposta ↗"],
  ["Offri una location", "Hai uno spazio adatto a una serata community? Raccontacelo nel form partnership.", "https://forms.gle/FPca5upst1VTGFP86", "Proponi una location ↗"],
  ["Scrivi allo staff", "Per stampa, collaborazioni o domande non incluse negli altri percorsi.", "mailto:info@codingbunker.it", "Contatta lo staff ↗"],
]

export default function ContactPage() {
  return <article className="contact-page">
    <header className="page-intro contact-intro"><p className="eyebrow">Partecipa</p><h1>Un buon meetup comincia prima della serata.</h1><p>Che tu voglia partecipare, condividere qualcosa che hai imparato o aiutare a creare lo spazio giusto, qui trovi il percorso più semplice.</p></header>
    <section className="contact-grid" aria-label="Come partecipare">{paths.map(([title, description, href, label], index) => <article className="contact-card" key={title}><p className="contact-card-index">{String(index + 1).padStart(2, "0")}</p><h2>{title}</h2><p>{description}</p><a className="button button-secondary" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</a></article>)}</section>
    <section className="contact-note"><div><p className="eyebrow">Una community aperta</p><h2>Non serve avere il profilo perfetto.</h2></div><div><p>Gli eventi Coding Bunker sono gratuiti e progettati per lasciare spazio a domande, esperienze diverse e conversazioni utili.</p><Link className="text-link" href="/code-of-conduct">Leggi il Code of Conduct <span aria-hidden="true">→</span></Link></div></section>
  </article>
}
