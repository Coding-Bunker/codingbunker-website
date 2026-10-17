import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import CodemotionLogo from "../../../assets/partner/codemotion.png"
import CondenseLogo from "../../../assets/partner/condense.png"
import GruspLogo from "../../../assets/partner/grusp.png"
import MollieLogo from "../../../assets/partner/mollie.svg"

export const metadata: Metadata = { title: "Partner storici", description: "Le organizzazioni che hanno sostenuto Coding Bunker nel tempo." }

const partners = [{ logo: CodemotionLogo, name: "Codemotion" }, { logo: CondenseLogo, name: "Condense" }, { logo: GruspLogo, name: "GrUSP" }, { logo: MollieLogo, name: "Mollie" }]
export default function PastPartnersPage() { return <><section className="page-intro"><p className="eyebrow">Partner storici</p><h1>Grazie a chi ha camminato con noi.</h1><p>Queste organizzazioni hanno sostenuto iniziative e momenti della storia di Coding Bunker.</p></section><section className="section legacy-partners">{partners.map((partner) => <div className="partner-card partner-card-dark" key={partner.name}><Image src={partner.logo} alt={partner.name} width={190} /></div>)}</section><Link className="text-link section" href="/partners">← Torna ai partner attuali</Link></> }
