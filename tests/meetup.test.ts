import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import {
  deduplicateAndSortMeetupEvents,
  fetchMeetupEvents,
  parseMeetupPage,
} from "../src/lib/meetup"

const fixture = (name: string) =>
  JSON.parse(readFileSync(`tests/fixtures/meetup/${name}`, "utf8")) as Record<
    string,
    unknown
  >

test("parses cursor metadata and event images from the initial past-events page", () => {
  const page = parseMeetupPage(fixture("initial-past-page.json"))

  assert.equal(page.totalCount, 3)
  assert.equal(page.endCursor, "cursor-1")
  assert.equal(page.hasNextPage, true)
  assert.equal(page.beforeDateTime, "2026-10-26T18:05:38.295Z")
  assert.equal(
    page.events[0]?.coverImageUrl,
    "https://images.example/newest.jpg",
  )
})

test("fetches every cursor page, deduplicates IDs, and returns newest first", async () => {
  const originalFetch = global.fetch
  const initial = fixture("initial-past-page.json")
  const next = fixture("next-past-page.json")
  let request = 0
  global.fetch = async (input) => {
    request += 1
    const url = String(input)
    if (url.includes("gql2")) {
      return new Response(JSON.stringify(next), { status: 200 })
    }
    return new Response(
      `<script id="__NEXT_DATA__" type="application/json">${JSON.stringify(initial)}</script>`,
      { status: 200 },
    )
  }

  try {
    const events = await fetchMeetupEvents()
    assert.equal(request, 3)
    assert.deepEqual(
      events.map((event) => event.id),
      ["3", "2", "1"],
    )
    assert.equal(events[2]?.coverImageUrl, "https://images.example/oldest.jpg")
  } finally {
    global.fetch = originalFetch
  }
})

test("keeps parsed events when a payload changes or omits the connection", () => {
  const page = parseMeetupPage({
    props: {
      pageProps: {
        __APOLLO_STATE__: {
          "Event:1": {
            __typename: "Event",
            id: "1",
            title: "Still usable",
            dateTime: "2026-01-01T18:30:00+01:00",
            eventUrl: "https://www.meetup.com/coding-bunker/events/1/",
          },
        },
      },
    },
  })

  assert.deepEqual(
    page.events.map((event) => event.id),
    ["1"],
  )
  assert.equal(page.hasNextPage, false)
  assert.deepEqual(
    deduplicateAndSortMeetupEvents([...page.events, ...page.events]).map(
      (event) => event.id,
    ),
    ["1"],
  )
})
