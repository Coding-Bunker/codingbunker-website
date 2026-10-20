import type { Metadata } from "next"
import Image from "next/image"
import Logo from "../../assets/logo.svg"

export const metadata: Metadata = {
  title: "Press kit | Coding Bunker",
  description: "Informazioni e fonti per raccontare Coding Bunker.",
}

export default function PressPage() {
  return (
    <article className="press-page">
      <header className="page-intro">
        <p className="eyebrow">Press kit</p>
        <h1>Raccontare Coding Bunker, con le fonti.</h1>
        <p>
          Materiali essenziali per media, enti, partner e persone che vogliono
          raccontare il valore della community a Milano.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href={Logo.src}
            download="coding-bunker-logo.svg"
          >
            Scarica il logo
          </a>
          <a
            className="button button-secondary"
            href="/logo-white.svg"
            download="coding-bunker-logo-white.svg"
          >
            Scarica il logo bianco
          </a>
        </div>
      </header>
      <section className="section press-block">
        <h2>Descrizione breve</h2>
        <p>
          Coding Bunker è una community tech indipendente di Milano che
          organizza meetup gratuiti, talk, discussioni e momenti pratici per
          condividere esperienza professionale, imparare insieme e rendere la
          conoscenza tecnica più accessibile.
        </p>
        <p className="press-meta">
          <strong>Descrizione breve:</strong> Community tech indipendente di
          Milano per chi costruisce software.
        </p>
      </section>
      <section className="section press-block">
        <h2>Fatti verificabili</h2>
        <ul>
          <li>
            I numeri aggiornati di membri, eventi e valutazioni sono pubblicati
            su{" "}
            <a
              className="text-link"
              href="https://www.meetup.com/it-IT/coding-bunker/"
              target="_blank"
              rel="noreferrer"
            >
              Meetup ↗
            </a>
            .
          </li>
          <li>
            Il canale{" "}
            <a
              className="text-link"
              href="https://www.youtube.com/@codingbunker"
              target="_blank"
              rel="noreferrer"
            >
              YouTube ↗
            </a>{" "}
            conserva live pubblicate nel 2020 su AI, testing, cybersecurity,
            game development e inclusione nel digitale.
          </li>
          <li>
            La pagina ufficiale di{" "}
            <a
              className="text-link"
              href="https://zig.day/europe/milano/2/"
              target="_blank"
              rel="noreferrer"
            >
              Zig Day Milano #2 ↗
            </a>{" "}
            ringrazia Coding Bunker per la location e documenta la presenza di
            Andrew Kelley e del core team Zig.
          </li>
          <li>
            <a
              className="text-link"
              href="https://www.techcommunityday.it/"
              target="_blank"
              rel="noreferrer"
            >
              Community Day ↗
            </a>{" "}
            è un evento no profit organizzato con GrUSP e Fondazione Giacomo
            Brodolini per unire le community tech italiane.
          </li>
          <li>
            Gli eventi sono gratuiti per chi partecipa e il calendario ufficiale
            è disponibile su Meetup.
          </li>
        </ul>
      </section>
      <section className="section press-block">
        <h2>Asset del brand</h2>
        <div className="press-brand-grid">
          <div className="press-logo">
            <Image src={Logo} alt="Logo Coding Bunker viola" width={180} />
          </div>
          <div className="press-logo press-logo-dark">
            <Image
              src="/logo-white.svg"
              alt="Logo Coding Bunker bianco"
              width={180}
            />
          </div>
        </div>
        <p>
          Usa il logo senza alterarne proporzioni o colori. Per immagini,
          interviste o ulteriori materiali:{" "}
          <a
            className="text-link"
            href="mailto:info@codingbunker.it?subject=Richiesta%20stampa"
          >
            info@codingbunker.it
          </a>
          .
        </p>
      </section>
      <section className="section press-block">
        <h2>Angoli editoriali</h2>
        <ul>
          <li>
            Dalle live del periodo pandemico agli incontri gratuiti in presenza
            a Milano.
          </li>
          <li>
            La conoscenza tecnologica come bene comune: meetup gratuiti e
            accessibili.
          </li>
          <li>
            Dal talk al fare: hackathon, open source hours e pratica condivisa.
          </li>
          <li>
            Community Day: una collaborazione tra community tech, non una
            competizione per l’attenzione.
          </li>
        </ul>
      </section>
    </article>
  )
}
