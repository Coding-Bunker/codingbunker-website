import type { Metadata } from "next"
import MeetupEventCard from "@/components/MeetupEventCard"
import {
  fetchMeetupEvents,
  meetupEventsUrl,
  splitMeetupEvents,
} from "@/lib/meetup"

export const metadata: Metadata = {
  title: "Eventi | Coding Bunker",
  description:
    "Prossimi meetup e archivio degli eventi Coding Bunker a Milano.",
}

export default async function EventsPage() {
  const { upcoming, past } = splitMeetupEvents(await fetchMeetupEvents())
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">Eventi Coding Bunker</p>
        <h1>Incontri per chi costruisce software.</h1>
        <p>
          Le date e le iscrizioni arrivano direttamente dalla pagina ufficiale
          di Coding Bunker su Meetup.
        </p>
      </section>
      <section className="section" aria-labelledby="upcoming-events">
        <div className="section-heading">
          <h2 id="upcoming-events">Prossimi eventi</h2>
          <a
            className="text-link"
            href={meetupEventsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Apri Meetup <span aria-hidden="true">↗</span>
          </a>
        </div>
        {upcoming.length ? (
          <div className="event-grid">
            {upcoming.map((event) => (
              <MeetupEventCard event={event} key={event.id} />
            ))}
          </div>
        ) : (
          <p className="muted">
            Non ci sono ancora eventi in calendario. Segui il gruppo Meetup per
            essere avvisatə.
          </p>
        )}
      </section>
      <section className="section" aria-labelledby="past-events">
        <div className="section-heading">
          <h2 id="past-events">Eventi passati</h2>
        </div>
        {past.length ? (
          <div className="event-grid">
            {past.map((event) => (
              <MeetupEventCard event={event} key={event.id} />
            ))}
          </div>
        ) : (
          <p className="muted">
            L’archivio sarà disponibile qui appena Meetup lo rende pubblico.
          </p>
        )}
      </section>
    </>
  )
}
