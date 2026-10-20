import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Code of Conduct | Coding Bunker",
  description: "Il Code of Conduct della community Coding Bunker.",
}

export default function CodeOfConductPage() {
  return (
    <article className="policy">
      <header className="policy-header">
        <p className="eyebrow">Community policy · Versione 1.0</p>
        <h1>Code of Conduct</h1>
        <p className="policy-summary">
          Coding Bunker vuole essere uno spazio aperto, collaborativo e sicuro
          per imparare, condividere conoscenza e confrontarsi sul software.
        </p>
        <p className="muted">
          Ultimo aggiornamento: 18 ottobre 2026 ·{" "}
          <Link className="text-link" href="/code-of-conduct/en">
            English version
          </Link>
        </p>
      </header>
      <section>
        <h2>Il nostro impegno</h2>
        <p>
          Ci impegniamo a costruire una community accogliente per persone di
          ogni livello di esperienza e background. Questo Code of Conduct si
          applica ai meetup, workshop, canali Telegram e a tutte le interazioni
          online e offline riconducibili a Coding Bunker, incluse quelle tra
          partecipanti, speaker, partner e organizzatori.
        </p>
      </section>
      <section>
        <h2>Comportamenti che incoraggiamo</h2>
        <ul>
          <li>
            Rispetto reciproco, ascolto attivo e discussioni tecniche
            costruttive.
          </li>
          <li>Condivisione generosa di esperienze e conoscenze.</li>
          <li>Feedback chiari e rispettosi, anche nel disaccordo.</li>
          <li>
            Accoglienza di chi partecipa per la prima volta e rispetto per
            livelli di esperienza diversi.
          </li>
        </ul>
      </section>
      <section>
        <h2>Comportamenti non accettati</h2>
        <ul>
          <li>
            Molestie, intimidazioni, discriminazioni o commenti sessisti,
            razzisti e denigratori.
          </li>
          <li>
            Offese personali, attacchi mirati, minacce o contatti fisici
            indesiderati.
          </li>
          <li>Spam, truffe e promozioni non autorizzate.</li>
          <li>Condivisione di informazioni personali senza consenso.</li>
          <li>
            Interruzioni intenzionali e ripetute degli eventi o delle
            conversazioni.
          </li>
        </ul>
      </section>
      <section>
        <h2>Come segnalare un problema</h2>
        <p>
          Durante un evento, puoi parlare direttamente con un organizzatore
          riconoscibile. Per una segnalazione successiva, scrivi a{" "}
          <a className="text-link" href="mailto:info@codingbunker.it">
            info@codingbunker.it
          </a>
          . Tratteremo le segnalazioni con riservatezza per quanto possibile;
          non possiamo però promettere l’anonimato assoluto quando è necessario
          intervenire per proteggere le persone coinvolte.
        </p>
        <p className="policy-note">
          Se ritieni che qualcuno sia in pericolo immediato, rivolgiti prima al
          personale della sede o ai servizi di emergenza.
        </p>
      </section>
      <section>
        <h2>Come interveniamo</h2>
        <p>
          Gli organizzatori prendono seriamente le segnalazioni e valutano
          interventi proporzionati alla gravità e alla sicurezza delle persone
          coinvolte: richiamo verbale, richiesta di interrompere il
          comportamento, allontanamento da un evento, rimozione dai canali
          ufficiali o esclusione da eventi futuri nei casi più gravi.
        </p>
        <p>
          Le decisioni vengono prese dagli organizzatori designati in modo
          coerente e con attenzione al contesto. Questa policy si ispira alle
          buone pratiche delle community open source, adattate agli incontri
          tecnici in presenza.
        </p>
      </section>
    </article>
  )
}
