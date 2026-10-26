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
  coverImageUrl?: string | null
}

export type MeetupGroupStats = {
  members?: number
  pastEvents?: number
  rating?: number
  ratingCount?: number
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
  displayPhoto?: { __ref?: string } | null
  featuredEventPhoto?: { __ref?: string } | null
  highResUrl?: string
}

type PastEventsPage = {
  events: MeetupEvent[]
  totalCount?: number
  endCursor?: string
  hasNextPage: boolean
  beforeDateTime?: string
}

type MeetupGraphQLEvent = ApolloRecord & {
  venue?: { name?: string; city?: string } | null
  displayPhoto?: { highResUrl?: string | null } | null
  featuredEventPhoto?: { highResUrl?: string | null } | null
}

const EVENTS_URL = "https://www.meetup.com/it-IT/coding-bunker/events/"
const PAST_EVENTS_URL = `${EVENTS_URL}?type=past`
const MEETUP_GRAPHQL_URL = "https://www.meetup.com/gql2"
const MEETUP_USER_AGENT = "CodingBunkerWebsite/1.0 (+https://codingbunker.it)"

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

function isApolloRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function toMeetupEvent(
  event: ApolloRecord,
  state?: Record<string, ApolloRecord>,
): MeetupEvent | undefined {
  if (!event.id || !event.title || !event.dateTime || !event.eventUrl) {
    return undefined
  }

  const venueReference = event.venue?.__ref
  const venue = (venueReference ? state?.[venueReference] : event.venue) as
    | ApolloRecord
    | undefined
  const photoReference =
    event.displayPhoto?.__ref || event.featuredEventPhoto?.__ref
  const photo = photoReference ? state?.[photoReference] : undefined
  const graphQLEvent = event as MeetupGraphQLEvent
  const coverImageUrl =
    photo?.highResUrl ||
    graphQLEvent.displayPhoto?.highResUrl ||
    graphQLEvent.featuredEventPhoto?.highResUrl ||
    null

  return {
    id: event.id,
    title: event.title,
    description: event.description || "",
    dateTime: event.dateTime,
    endTime: event.endTime,
    eventUrl: event.eventUrl,
    status: event.status || "",
    venue: venue?.name || null,
    city: venue?.city || null,
    attendeeCount: event.going?.totalCount ?? null,
    coverImageUrl: typeof coverImageUrl === "string" ? coverImageUrl : null,
  }
}

function getApolloState(page: Record<string, unknown> | undefined) {
  return (
    page as
      | {
          props?: {
            pageProps?: { __APOLLO_STATE__?: Record<string, ApolloRecord> }
          }
        }
      | undefined
  )?.props?.pageProps?.__APOLLO_STATE__
}

/** Extracts event records and cursor metadata from Meetup's public page state. */
export function parseMeetupPage(
  page: Record<string, unknown> | undefined,
): PastEventsPage {
  const state = getApolloState(page)
  if (!state) return { events: [], hasNextPage: false }

  const events = Object.values(state)
    .filter(
      (value) =>
        value.__typename === "Event" &&
        value.id &&
        value.title &&
        value.dateTime &&
        value.eventUrl,
    )
    .map((event) => toMeetupEvent(event, state))
    .filter((event): event is MeetupEvent => Boolean(event))

  const group = Object.values(state).find(
    (value) => value.__typename === "Group",
  ) as Record<string, unknown> | undefined
  if (!group) return { events, hasNextPage: false }

  const connection = Object.entries(group).find(([key, value]) => {
    if (!key.includes('"status":["ACTIVE","PAST","CANCELLED"]')) {
      return false
    }
    return isApolloRecord(value) && isApolloRecord(value.pageInfo)
  })
  const [key, value] = connection || []
  const pageInfo =
    isApolloRecord(value) && isApolloRecord(value.pageInfo)
      ? value.pageInfo
      : undefined
  const beforeDateTime = key?.match(/"beforeDateTime":"([^"]+)"/)?.[1]

  return {
    events,
    totalCount:
      isApolloRecord(value) && typeof value.totalCount === "number"
        ? value.totalCount
        : undefined,
    endCursor:
      typeof pageInfo?.endCursor === "string" ? pageInfo.endCursor : undefined,
    hasNextPage: pageInfo?.hasNextPage === true,
    beforeDateTime,
  }
}

const pastEventsQuery = `
  query getPastGroupEvents(
    $urlname: String!
    $after: String
    $beforeDateTime: DateTime
  ) {
    groupByUrlname(urlname: $urlname) {
      events(
        filter: {
          status: [ACTIVE, PAST, CANCELLED]
          beforeDateTime: $beforeDateTime
        }
        sort: DESC
        first: 10
        after: $after
      ) {
        totalCount
        pageInfo { endCursor hasNextPage }
        edges {
          node {
            id title description dateTime endTime eventUrl status
            going { totalCount }
            venue { name city }
            displayPhoto { highResUrl }
            featuredEventPhoto { highResUrl }
          }
        }
      }
    }
  }
`

async function fetchPastEventsPage(
  after: string,
  beforeDateTime: string,
): Promise<PastEventsPage | undefined> {
  const response = await fetch(MEETUP_GRAPHQL_URL, {
    method: "POST",
    next: { revalidate: 3600 },
    headers: {
      "Content-Type": "application/json",
      "User-Agent": MEETUP_USER_AGENT,
    },
    body: JSON.stringify({
      operationName: "getPastGroupEvents",
      variables: { urlname: "coding-bunker", after, beforeDateTime },
      query: pastEventsQuery,
    }),
  })
  if (!response.ok) return undefined

  const payload = (await response.json()) as {
    data?: {
      groupByUrlname?: {
        events?: {
          totalCount?: number
          pageInfo?: { endCursor?: string; hasNextPage?: boolean }
          edges?: Array<{ node?: MeetupGraphQLEvent }>
        }
      }
    }
  }
  const events = payload.data?.groupByUrlname?.events
  if (!events) return undefined

  return {
    events: (events.edges || [])
      .map(({ node }) => (node ? toMeetupEvent(node) : undefined))
      .filter((event): event is MeetupEvent => Boolean(event)),
    totalCount: events.totalCount,
    endCursor: events.pageInfo?.endCursor,
    hasNextPage: events.pageInfo?.hasNextPage === true,
  }
}

export function deduplicateAndSortMeetupEvents(events: MeetupEvent[]) {
  return [...new Map(events.map((event) => [event.id, event])).values()].sort(
    (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
  )
}

/**
 * Meetup does not provide a public, keyless event API for this group. Its public
 * event page includes the same event data in Next/Apollo state, which we read at
 * build time. The site therefore remains static and requires no secret client key.
 */
export async function fetchMeetupEvents(): Promise<MeetupEvent[]> {
  try {
    const pages = await Promise.all(
      [EVENTS_URL, PAST_EVENTS_URL].map(async (url) => {
        const response = await fetch(url, {
          next: { revalidate: 3600 },
          headers: { "User-Agent": MEETUP_USER_AGENT },
        })
        return response.ok ? getNextData(await response.text()) : undefined
      }),
    )
    const [currentPage, initialPastPage] = pages.map(parseMeetupPage)
    const pastEvents = [...initialPastPage.events]
    const totalCount = initialPastPage.totalCount
    let cursor = initialPastPage.endCursor
    let hasNextPage = initialPastPage.hasNextPage
    const beforeDateTime = initialPastPage.beforeDateTime

    while (
      hasNextPage &&
      cursor &&
      beforeDateTime &&
      (totalCount === undefined ||
        new Set(pastEvents.map((event) => event.id)).size < totalCount)
    ) {
      const nextPage = await fetchPastEventsPage(cursor, beforeDateTime)
      if (!nextPage) break
      pastEvents.push(...nextPage.events)
      if (!nextPage.endCursor || nextPage.endCursor === cursor) break
      cursor = nextPage.endCursor
      hasNextPage = nextPage.hasNextPage
    }

    return deduplicateAndSortMeetupEvents([
      ...currentPage.events,
      ...pastEvents,
    ])
  } catch {
    return []
  }
}

/** Count supplied by the public Meetup group payload, not a local estimate. */
export async function fetchMeetupPastEventCount(): Promise<number | undefined> {
  try {
    const response = await fetch(EVENTS_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": MEETUP_USER_AGENT,
      },
    })
    if (!response.ok) return undefined

    const page = getNextData(await response.text()) as {
      props?: { pageProps?: { __APOLLO_STATE__?: Record<string, unknown> } }
    }
    const state = page?.props?.pageProps?.__APOLLO_STATE__
    if (!state) return undefined

    const group = Object.values(state).find(
      (value) =>
        typeof value === "object" &&
        value !== null &&
        (value as ApolloRecord).__typename === "Group",
    ) as Record<string, unknown> | undefined
    if (!group) return undefined

    const pastEvents = Object.entries(group).find(([key]) =>
      key.includes('"status":["PAST"]'),
    )?.[1] as { totalCount?: number } | undefined
    return typeof pastEvents?.totalCount === "number"
      ? pastEvents.totalCount
      : undefined
  } catch {
    return undefined
  }
}

/** Public group metrics used with source attribution on the impact page. */
export async function fetchMeetupGroupStats(): Promise<MeetupGroupStats> {
  try {
    const response = await fetch(EVENTS_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": MEETUP_USER_AGENT,
      },
    })
    if (!response.ok) return {}

    const page = getNextData(await response.text()) as {
      props?: { pageProps?: { __APOLLO_STATE__?: Record<string, unknown> } }
    }
    const state = page?.props?.pageProps?.__APOLLO_STATE__
    const group =
      state &&
      (Object.values(state).find(
        (value) =>
          typeof value === "object" &&
          value !== null &&
          (value as ApolloRecord).__typename === "Group",
      ) as Record<string, unknown> | undefined)
    if (!group) return {}

    const stats = group.stats as
      | {
          memberCounts?: { all?: number }
          eventRatings?: { average?: number; total?: number }
        }
      | undefined
    const pastEvents = Object.entries(group).find(([key]) =>
      key.includes('"status":["PAST"]'),
    )?.[1] as { totalCount?: number } | undefined
    return {
      members: stats?.memberCounts?.all,
      pastEvents: pastEvents?.totalCount,
      rating: stats?.eventRatings?.average,
      ratingCount: stats?.eventRatings?.total,
    }
  } catch {
    return {}
  }
}

export function splitMeetupEvents(events: MeetupEvent[], now = new Date()) {
  const current = now.getTime()
  return {
    upcoming: events
      .filter(
        (event) =>
          new Date(event.dateTime).getTime() >= current &&
          event.status !== "CANCELLED",
      )
      .sort(
        (a, b) =>
          new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
      ),
    past: events
      .filter(
        (event) =>
          new Date(event.dateTime).getTime() < current ||
          event.status === "PAST",
      )
      .sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
      ),
  }
}

export const meetupEventsUrl = EVENTS_URL
