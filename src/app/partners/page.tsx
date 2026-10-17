import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import FondazioneBrodoliniLogo from "../../assets/partner/fondazione-brodolini.png"

export const metadata: Metadata = { title: "Partner", description: "Scopri come aziende, fondazioni e spazi possono sostenere gli eventi gratuiti di Coding Bunker a Milano." }

export default function PartnersPage() {
  return <><section className="page-intro"><p className="eyebrow">Partner</p><h1>Spazi e persone che rendono possibile la community.</h1><p>Collaboriamo con organizzazioni che credono nella condivisione concreta di competenze e nel valore delle connessioni professionali aperte.</p><div className="hero-actions"><a className="button button-primary" href="https://forms.gle/Vk8nkcoDWT4doe788" target="_blank" rel="noreferrer">Richiedi una partnership ↗</a><a className="button button-secondary" href="mailto:info@codingbunker.it?subject=Partnership%20Coding%20Bunker">Parla con lo staff</a></div></section><section className="section current-partner"><div className="partner-card"><Image src={FondazioneBrodoliniLogo} alt="Fondazione Giacomo Brodolini" width={330} /></div><div><p className="eyebrow">Partner attuale</p><h2>Fondazione Giacomo Brodolini</h2><p>Un partner che contribuisce a creare contesti in cui formazione, lavoro e innovazione possono incontrarsi.</p><a className="button button-secondary" href="https://forms.gle/Vk8nkcoDWT4doe788" target="_blank" rel="noreferrer">Diventa partner ↗</a></div></section><section className="section"><p className="muted">Cerchi chi ha sostenuto Coding Bunker in passato? <Link className="text-link" href="/partners/past">Vedi i partner storici</Link>.</p></section></>
}
