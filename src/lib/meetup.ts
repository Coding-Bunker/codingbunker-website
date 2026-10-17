export type MeetupEvent = {
  id: string
  title: string
  description: string
  dateTime: string
  endTime?: string | null
  eventUrl: string
  status: string
  venue?: string | null
  city?: string | null
  attendeeCount?: number | null
}

type ApolloRecord = {
  __typename?: string
  id?: string
  title?: string
  description?: string
  dateTime?: string
  endTime?: string | null
  eventUrl?: string
  status?: string
  venue?: { __ref?: string } | null
  going?: { totalCount?: number }
  name?: string
  city?: string
}

const EVENTS_URL = "https://www.meetup.com/it-IT/coding-bunker/events/"

function getNextData(html: string): Record<string, unknown> | undefined {
  const match = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/,
  )

  if (!match) return undefined

  try {
    return JSON.parse(match[1])
  } catch {
    return undefined
  }
}

/**
 * Meetup does not provide a public, keyless event API for this group. Its public
 * event page includes the same event data in Next/Apollo state, which we read at
 * build time. The site therefore remains static and requires no secret client key.
 */
export async function fetchMeetupEvents(): Promise<MeetupEvent[]> {
  try {
    const response = await fetch(EVENTS_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "CodingBunkerWebsite/1.0 (+https://codingbunker.it)" },
    })

    if (!response.ok) return []

    const page = getNextData(await response.text()) as {
      props?: { pageProps?: { __APOLLO_STATE__?: Record<string, ApolloRecord> } }
    }
    const state = page?.props?.pageProps?.__APOLLO_STATE__
    if (!state) return []

    return Object.entries(state)
      .filter(([, value]) => value.__typename === "Event" && value.id && value.title && value.dateTime && value.eventUrl)
      .map(([key, event]) => {
        const venueReference = event.venue?.__ref
        const venue = venueReference ? state[venueReference] : undefined
        return {
          id: event.id || key,
          title: event.title || "Evento Coding Bunker",
          description: event.description || "",
          dateTime: event.dateTime || "",
          endTime: event.endTime,
          eventUrl: event.eventUrl || EVENTS_URL,
          status: event.status || "",
          venue: venue?.name || null,
          city: venue?.city || null,
          attendeeCount: event.going?.totalCount ?? null,
        }
      })
      .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime())
  } catch {
    return []
  }
}

export function splitMeetupEvents(events: MeetupEvent[], now = new Date()) {
  const current = now.getTime()
  return {
    upcoming: events.filter((event) => new Date(event.dateTime).getTime() >= current && event.status !== "CANCELLED"),
    past: events
      .filter((event) => new Date(event.dateTime).getTime() < current || event.status === "PAST")
      .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()),
  }
}

export const meetupEventsUrl = EVENTS_URL
