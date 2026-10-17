import Image from "next/image"
import Link from "next/link"
import TeamImage from "../assets/team/team.png"
import MeetupEventCard from "@/components/MeetupEventCard"
import { fetchMeetupEvents, meetupEventsUrl, splitMeetupEvents } from "@/lib/meetup"

export default async function Home() {
  const { upcoming, past } = splitMeetupEvents(await fetchMeetupEvents())
  const nextEvent = upcoming[0]

  return <>
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="eyebrow">Community tech indipendente · Milano</p>
        <h1 id="home-title">Dove le persone che costruiscono software si incontrano.</h1>
        <p className="hero-lede">Meetup gratuiti, esperienze reali e conversazioni tecniche per chi vuole fare software meglio, insieme.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={nextEvent?.eventUrl || meetupEventsUrl} target="_blank" rel="noreferrer">{nextEvent ? "Iscriviti al prossimo evento" : "Vedi gli eventi su Meetup"}</a>
          <a className="button button-secondary" href="https://t.me/codingbunker" target="_blank" rel="noreferrer">Entra nella community</a>
        </div>
        <p className="hero-note">Engineering, testing, AI, architettura, DevOps e ciò che impariamo davvero sul campo.</p>
      </div>
      <div className="hero-image-wrap"><Image src={TeamImage} alt="La community Coding Bunker durante un meetup" priority className="hero-image" /></div>
    </section>

    <section className="section" aria-labelledby="next-event-heading">
      <div className="section-heading"><div><p className="eyebrow">In agenda</p><h2 id="next-event-heading">Il prossimo meetup</h2></div><a className="text-link" href={meetupEventsUrl} target="_blank" rel="noreferrer">Tutti gli eventi <span aria-hidden="true">↗</span></a></div>
      {nextEvent ? <MeetupEventCard event={nextEvent} featured /> : <div className="empty-state"><p>Stiamo preparando il prossimo meetup.</p><a className="button button-secondary" href={meetupEventsUrl} target="_blank" rel="noreferrer">Segui Coding Bunker su Meetup</a></div>}
    </section>

    <section className="section community-section" aria-labelledby="community-heading">
      <div><p className="eyebrow">Non solo una serata</p><h2 id="community-heading">Idee concrete, persone curiose.</h2></div>
      <div className="community-copy"><p>Ogni incontro è un’occasione per ascoltare esperienze senza patina, fare domande e conoscere persone che lavorano sui problemi che ti interessano.</p><a className="text-link" href="https://t.me/codingbunker" target="_blank" rel="noreferrer">Entra nel gruppo Telegram <span aria-hidden="true">↗</span></a><Link className="text-link" href="/code-of-conduct">Leggi il nostro Code of Conduct <span aria-hidden="true">→</span></Link></div>
    </section>

    <section className="section" aria-labelledby="past-events-heading">
      <div className="section-heading"><div><p className="eyebrow">Archivio</p><h2 id="past-events-heading">Gli ultimi meetup</h2></div><Link className="text-link" href="/events">Vedi l’archivio <span aria-hidden="true">→</span></Link></div>
      {past.length ? <div className="event-grid">{past.slice(0, 3).map((event) => <MeetupEventCard event={event} key={event.id} />)}</div> : <p className="muted">Gli eventi passati saranno disponibili qui appena Meetup li pubblicherà.</p>}
    </section>

    <section className="section involvement" aria-labelledby="involvement-heading">
      <div><p className="eyebrow">Costruiamola insieme</p><h2 id="involvement-heading">Hai un’idea, un talk o vuoi collaborare?</h2></div>
      <div className="involvement-links"><a className="button button-secondary" href="https://sessionize.com/codingbunker/" target="_blank" rel="noreferrer">Proponi un talk</a><a className="button button-secondary" href="https://forms.gle/FPca5upst1VTGFP86" target="_blank" rel="noreferrer">Diventa partner</a></div>
    </section>
  </>
}
