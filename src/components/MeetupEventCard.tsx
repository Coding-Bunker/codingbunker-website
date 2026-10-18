import { DateTime } from "luxon"
import Image from "next/image"
import type { MeetupEvent } from "@/lib/meetup"

function conciseDescription(description: string) {
  return description.replace(/[#*_`]/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\s+/g, " ").trim().slice(0, 170)
}

export default function MeetupEventCard({ event, featured = false, imageSrc }: { event: MeetupEvent; featured?: boolean; imageSrc?: string }) {
  const date = DateTime.fromISO(event.dateTime).setLocale("it")
  const coverImage = imageSrc || event.coverImageUrl
  return <article className={`event-card event-card--visual ${featured ? "event-card-featured" : ""}`}>
    <div className={`event-card-media ${coverImage ? "has-image" : "is-placeholder"}`}>
      {coverImage ? <Image src={coverImage} alt={`Copertina dell'evento ${event.title}`} fill sizes="(max-width: 760px) 100vw, 33vw" className="event-card-photo" /> : null}
      <div className="event-card-date" aria-label={date.toFormat("cccc dd LLLL yyyy, ore HH:mm")}><span>{date.toFormat("dd LLL")}</span><span>{date.toFormat("HH:mm")}</span></div>
    </div>
    <div className="event-card-content"><p className="eyebrow">{event.city || "Milano"} · Meetup</p><h3>{event.title}</h3>{event.venue && <p className="event-location">{event.venue}</p>}{event.description && <p className="event-description">{conciseDescription(event.description)}{event.description.length > 170 ? "…" : ""}</p>}<a className="event-link" href={event.eventUrl} target="_blank" rel="noreferrer">{featured ? "Iscriviti gratuitamente" : "Apri su Meetup"} <span aria-hidden="true">↗</span></a></div>
  </article>
}
