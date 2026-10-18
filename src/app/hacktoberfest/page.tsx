import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Hacktoberfest Milan 2026",
  description: "Hacktoberfest Hack Day Milano x Coding Bunker: 39 partecipanti, progetti open source e AI open-weight.",
  openGraph: {
    title: "Hacktoberfest Milan 2026 | Coding Bunker",
    description: "Il recap del Hacktoberfest Hack Day Milano x Coding Bunker.",
    images: [{ url: "/hacktoberfest-milan-2026.png", width: 968, height: 768, alt: "Progetti vincitori dell'Hacktoberfest Hack Day Milano 2026" }],
  },
}

const categories = [
  ["Best Developer Tool", "Il miglior strumento pensato per semplificare o migliorare il lavoro degli sviluppatori."],
  ["Best AI for Good", "La migliore applicazione che utilizza l'intelligenza artificiale per risolvere problemi reali e generare un impatto positivo."],
  ["Most Creative Hack", "Il progetto più originale e creativo, capace di distinguersi per l'idea o per il modo in cui è stato realizzato."],
]

const projectTypes = [
  ["AI Agent Skills", "Skill riutilizzabili che permettono agli agenti AI di eseguire attività specifiche.", "Una skill che permette a un agente AI di generare automaticamente test con Playwright."],
  ["Applicazioni con LLM o SLM open-weight", "Applicazioni che integrano modelli linguistici aperti per risolvere problemi concreti.", "Un'applicazione che utilizza Gemma o altri modelli aperti per analizzare documenti ed estrarre informazioni utili."],
  ["Model Harness", "Framework o strumenti per gestire il funzionamento degli agenti AI, inclusi tool calling, memoria e contesto.", "Un framework che permette di orchestrare più agenti AI e gestire le loro interazioni con strumenti esterni."],
]

const requirements = [
  "Repository GitHub pubblico.",
  "Licenza open-source, ad esempio MIT o Apache 2.0.",
  "Utilizzo significativo di AI open-source o modelli open-weight.",
  "Implementazione originale o modifiche sostanziali nel caso dei Model Harness.",
  "Rispetto dello standard Agent Skills nel caso delle skill.",
]

const winners = [
  ["Best Developer Tool", "Vouch explorer", "Un’app web che aiuta a valutare contributori open source.", "Fabian Hogger"],
  ["Best AI for Good", "Gluco", "Un assistente intelligente che aiuta chi soffre di diabete a prevedere e bloccare i picchi glicemici prima che si verifichino.", "Andrea Rossi, Enzo Sbarra, Francesco Sangalli, Riccardo Sironi"],
  ["Most Creative Hack", "Unfold", "Un progetto che rende comprensibili oggetti complessi e nascosti dell’ingegneria attraverso l’esplorazione.", "Gabriele Digilio"],
  ["Best use of Gemma 4", "Fluffy Photo", "Analizza una fotografia mentre la gara è ancora in corso: estrae ciò che accade nell’immagine direttamente dalla fotocamera.", "Gianni Bombelli"],
]

export default function HacktoberfestPage() {
  return <article className="hacktoberfest-page">
    <header className="hacktoberfest-hero">
      <div>
        <p className="eyebrow">Hacktoberfest Hack Day · Milano · 17 ottobre 2026</p>
        <h1>Hacktoberfest Milan 2026</h1>
        <p className="hacktoberfest-lede">Una giornata per costruire, sperimentare e condividere progetti open source con AI open-weight, insieme alla community.</p>
        <div className="hero-actions"><a className="button button-primary" href="https://www.mlh.com/events/hacktoberfest-hack-day-milano-x-coding-bunker/submissions" target="_blank" rel="noreferrer">Vedi i progetti e le submission ↗</a><a className="button button-secondary" href="https://www.meetup.com/coding-bunker/photos/36222500/" target="_blank" rel="noreferrer">Guarda le foto dell&apos;evento ↗</a></div>
      </div>
      <div className="hacktoberfest-hero-image"><Image src="/hacktoberfest-milan-2026.png" alt="Progetti vincitori dell'Hacktoberfest Hack Day Milano 2026" width={968} height={768} priority /></div>
    </header>

    <section className="hacktoberfest-stats" aria-label="Hacktoberfest Milan 2026 in numeri"><div><strong>39</strong><span>partecipanti</span></div><div><strong>3</strong><span>categorie principali</span></div><div><strong>100%</strong><span>open source e sperimentazione</span></div></section>

    <section className="section hacktoberfest-section"><div className="section-heading"><div><p className="eyebrow">La sfida</p><h2>Categorie e tipologie di progetti</h2></div></div><p className="hacktoberfest-intro">Per l&apos;Hacktoberfest Hack Day abbiamo pensato a tre categorie per premiare i progetti realizzati dai partecipanti.</p><div className="hacktoberfest-category-grid">{categories.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="section hacktoberfest-section hacktoberfest-surface"><div className="section-heading"><div><p className="eyebrow">Spazio alla creatività</p><h2>Che tipo di progetti si possono realizzare?</h2></div></div><p className="hacktoberfest-intro">I partecipanti possono sviluppare diverse tipologie di progetti, anche combinando più approcci. Questi sono solo esempi, non categorie rigide: l’obiettivo è lasciare spazio alla creatività.</p><div className="hacktoberfest-types">{projectTypes.map(([title, description, example]) => <article key={title}><h3>{title}</h3><p>{description}</p><p className="hacktoberfest-example"><strong>Esempio:</strong> {example}</p></article>)}</div><p className="hacktoberfest-note">Si può realizzare un’applicazione web, una CLI, un’estensione VS Code o qualsiasi altro strumento, purché l’AI open-source o open-weight sia una parte significativa del progetto.</p></section>

    <section className="section hacktoberfest-section"><div className="section-heading"><div><p className="eyebrow">Regole aperte, contributi reali</p><h2>Requisiti dei progetti</h2></div></div><ul className="hacktoberfest-requirements">{requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul><p className="hacktoberfest-goal">L&apos;obiettivo è sperimentare, imparare qualcosa di nuovo e soprattutto creare qualcosa di utile da condividere con la community.</p></section>

    <section className="section hacktoberfest-section hacktoberfest-winners"><div className="section-heading"><div><p className="eyebrow">I risultati</p><h2>I progetti vincitori</h2></div><a className="text-link" href="https://www.mlh.com/events/hacktoberfest-hack-day-milano-x-coding-bunker/submissions" target="_blank" rel="noreferrer">Tutte le submission ↗</a></div><div className="hacktoberfest-winner-grid">{winners.map(([category, title, description, authors]) => <article key={title}><p className="hacktoberfest-winner-category">🏆 {category}</p><h3>{title}</h3><p>{description}</p><p className="hacktoberfest-authors">{authors}</p></article>)}</div></section>

    <section className="hacktoberfest-gallery-cta"><div><p className="eyebrow">Una giornata da ricordare</p><h2>Guarda le foto dell&apos;Hacktoberfest Milan 2026.</h2></div><a className="button button-primary" href="https://www.meetup.com/coding-bunker/photos/36222500/" target="_blank" rel="noreferrer">Apri l&apos;album su Meetup ↗</a></section>
  </article>
}
