import Link from "next/link"

export const metadata = {
  title: "Pagina non trovata",
  description: "La pagina che stai cercando non è disponibile.",
}

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-mark" aria-hidden="true">
        404
      </div>
      <div className="not-found-content">
        <p className="eyebrow">Pagina non trovata</p>
        <h1 id="not-found-title">
          Sembra che questo link abbia perso la strada.
        </h1>
        <p className="not-found-description">
          La pagina potrebbe essere stata spostata o non essere più disponibile.
          Riparti da un punto sicuro per tornare a esplorare Coding Bunker.
        </p>
        <div className="hero-actions not-found-actions">
          <Link className="button button-primary" href="/">
            Torna alla home
          </Link>
          <Link className="button button-secondary" href="/events">
            Scopri gli eventi
          </Link>
        </div>
        <nav className="not-found-links" aria-label="Link utili">
          <Link href="/hacktoberfest">Hacktoberfest Milan</Link>
          <Link href="/partners">Partner</Link>
          <Link href="/contatti">Contatti</Link>
        </nav>
      </div>
    </section>
  )
}
