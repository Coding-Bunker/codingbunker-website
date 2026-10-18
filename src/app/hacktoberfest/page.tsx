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

const projects = [
  ["Best use of Gemma 4 · Winner", "Fluffy Photo", "Legge ogni foto appena arriva dalla fotocamera ed estrae ciò che sta succedendo nell’immagine mentre la gara è ancora in corso.", "Gianni Bombelli"],
  ["Best Developer Tool · Winner", "Vouch explorer", "Un’app web che aiuta a valutare i contributori open source.", "Fabian Hogger"],
  ["Most Creative Hack · Winner", "Unfold", "Rende più comprensibili oggetti complessi che usiamo ogni giorno, mostrando l’ingegneria nascosta al loro interno.", "Gabriele Digilio"],
  ["Progetto partecipante", "FuoriSaver", "Un assistente locale e basato sull’AI per gestire l’inventario alimentare, pensato anche per studenti e persone che vivono lontano da casa.", "Team FuoriSaver"],
  ["Best Open-Source AI Project · Winner · Best AI for Good · Winner", "Gluco", "Un assistente intelligente che aiuta chi soffre di diabete a prevedere e bloccare i picchi glicemici prima che si verifichino.", "Andrea Rossi, Enzo Sbarra, Francesco Sangalli, Riccardo Sironi"],
  ["Progetto partecipante", "Hikari", "Un workflow automatizzato di code review con GitHub Actions e Playwright per individuare errori nel frontend.", "Edward K. Aiddo, Marcelo Kaihara, Leonardo Cavalleri"],
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
      <div className="hacktoberfest-hero-image"><Image src="/hacktoberfest-2026.jpeg" alt="Foto di gruppo dell'Hacktoberfest Hack Day Milano 2026" width={1600} height={1200} priority /></div>
    </header>

    <section className="hacktoberfest-stats" aria-label="Hacktoberfest Milan 2026 in numeri"><div><strong>39</strong><span>partecipanti</span></div><div><strong>3</strong><span>categorie principali</span></div><div><strong>100%</strong><span>open source e sperimentazione</span></div></section>

    <section className="section hacktoberfest-section"><div className="section-heading"><div><p className="eyebrow">La sfida</p><h2>Categorie e tipologie di progetti</h2></div></div><p className="hacktoberfest-intro">Per l&apos;Hacktoberfest Hack Day abbiamo pensato a tre categorie per premiare i progetti realizzati dai partecipanti.</p><div className="hacktoberfest-category-grid">{categories.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="section hacktoberfest-section hacktoberfest-surface"><div className="section-heading"><div><p className="eyebrow">Spazio alla creatività</p><h2>I progetti che si potevano realizzare</h2></div></div><p className="hacktoberfest-intro">Durante l’Hacktoberfest Hack Day, i partecipanti potevano sviluppare diverse tipologie di progetto, anche combinando più approcci. Gli esempi qui sotto documentano le possibilità esplorate durante l’evento e non rappresentavano categorie rigide: l’obiettivo era lasciare spazio alla creatività.</p><div className="hacktoberfest-types">{projectTypes.map(([title, description, example]) => <article key={title}><h3>{title}</h3><p>{description}</p><p className="hacktoberfest-example"><strong>Esempio:</strong> {example}</p></article>)}</div><p className="hacktoberfest-note">Era possibile realizzare un’applicazione web, una CLI, un’estensione VS Code o qualsiasi altro strumento, purché l’AI open-source o open-weight fosse una parte significativa del progetto.</p></section>

    <section className="section hacktoberfest-section"><div className="section-heading"><div><p className="eyebrow">Regole aperte, contributi reali</p><h2>Requisiti dei progetti</h2></div></div><ul className="hacktoberfest-requirements">{requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul><p className="hacktoberfest-goal">L&apos;obiettivo è sperimentare, imparare qualcosa di nuovo e soprattutto creare qualcosa di utile da condividere con la community.</p></section>

    <section className="section hacktoberfest-section hacktoberfest-winners"><div className="section-heading"><div><p className="eyebrow">I risultati</p><h2>I progetti e i premi</h2></div><a className="text-link" href="https://www.mlh.com/events/hacktoberfest-hack-day-milano-x-coding-bunker/submissions" target="_blank" rel="noreferrer">Tutte le submission ↗</a></div><div className="hacktoberfest-winner-grid">{projects.map(([category, title, description, authors]) => <article key={title}><p className="hacktoberfest-winner-category">{category.includes("Winner") ? "🏆 " : ""}{category}</p><h3>{title}</h3><p>{description}</p><p className="hacktoberfest-authors">{authors}</p></article>)}</div></section>

    <section className="hacktoberfest-gallery-cta"><div><p className="eyebrow">Una giornata da ricordare</p><h2>Guarda le foto dell&apos;Hacktoberfest Milan 2026.</h2></div><a className="button button-primary" href="https://www.meetup.com/coding-bunker/photos/36222500/" target="_blank" rel="noreferrer">Apri l&apos;album su Meetup ↗</a></section>
  </article>
}
