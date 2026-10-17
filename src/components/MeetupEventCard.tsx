import { DateTime } from "luxon"
import type { MeetupEvent } from "@/lib/meetup"

function conciseDescription(description: string) {
  return description
    .replace(/[#*_`]/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 190)
}

export default function MeetupEventCard({
  event,
  featured = false,
}: {
  event: MeetupEvent
  featured?: boolean
}) {
  const date = DateTime.fromISO(event.dateTime).setLocale("it")

  return (
    <article className={`event-card ${featured ? "event-card-featured" : ""}`}>
      <div className="event-card-date" aria-label={date.toFormat("cccc dd LLLL yyyy, ore HH:mm")}>
        <span>{date.toFormat("dd LLL")}</span>
        <span>{date.toFormat("HH:mm")}</span>
      </div>
      <div className="event-card-content">
        <p className="eyebrow">{event.city || "Milano"} · Meetup</p>
        <h3>{event.title}</h3>
        {event.venue && <p className="event-location">{event.venue}</p>}
        {event.description && <p className="event-description">{conciseDescription(event.description)}{event.description.length > 190 ? "…" : ""}</p>}
        <a className="event-link" href={event.eventUrl} target="_blank" rel="noreferrer">
          {featured ? "Iscriviti gratuitamente" : "Apri su Meetup"} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}
