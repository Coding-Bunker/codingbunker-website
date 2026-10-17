import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = { title: "Staff | Coding Bunker", description: "Le persone che rendono possibile Coding Bunker." }

const staff = [
  { name: "Ludovico Besana", imageSrc: "/staff/ludovico-besana.png", linkedin: "https://www.linkedin.com/in/ludovicobesana/" },
  { name: "Pietro Marchini", imageSrc: "/staff/pietro-marchini.png", linkedin: "https://www.linkedin.com/in/pietro-marchini-6a2545109/" },
  { name: "Ruggero Visintin", imageSrc: "/staff/ruggero-visintin.png", linkedin: "https://www.linkedin.com/in/ruggero-enrico-visintin/" },
]

export default function StaffPage() {
  return <article className="staff-page"><header className="staff-intro"><p className="eyebrow">Le persone dietro gli eventi</p><h1>Una piccola squadra, una community grande.</h1><p>Coding Bunker è costruita da persone che scelgono di mettere tempo, esperienza e cura al servizio di una conoscenza tecnica più accessibile.</p><Link className="button button-primary" href="/aiuta-la-community">Vorrei aiutare la community</Link></header><section className="staff-grid" aria-label="Staff Coding Bunker">{staff.map((member) => <article className="staff-card" key={member.name}><div className="staff-portrait"><Image src={member.imageSrc} alt={member.name} fill sizes="(max-width: 760px) 140px, 220px" className="object-cover" /></div><h2>{member.name}</h2><a className="text-link" href={member.linkedin} target="_blank" rel="noreferrer">Profilo LinkedIn ↗</a></article>)}</section><section className="staff-archive"><p className="eyebrow">Archivio</p><h2>Vecchi membri dello staff</h2><p>Stiamo ricostruendo l’archivio delle persone che hanno contribuito alla storia di Coding Bunker. Torna presto per consultarlo.</p></section><section className="staff-closing"><div><p className="eyebrow">Un lavoro condiviso</p><h2>La community non è un servizio. È qualcosa che costruiamo insieme.</h2></div><Link className="button button-secondary" href="/aiuta-la-community">Scopri come partecipare</Link></section></article>
}
