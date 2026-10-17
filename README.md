# Coding Bunker website

## Events

The homepage and `/events` read the public Coding Bunker Meetup event page at build time. No Meetup credential is stored in the repository. Upcoming events, the latest past events and registration links therefore come from the official Meetup listings; publish a new build to refresh the static export.

If Meetup is temporarily unavailable while building, the event sections stay empty and link visitors to the official group page instead of showing stale invented data.

# Environment file

```
NOTION_TOKEN=
NOTION_EVENTS_DATABASE=
NOTION_CREW_DATABASE=
NOTION_SUBSCRIBERS_DATABASE=
BREVO_API_KEY=
BREVO_STANDARD_CONTACT_LIST=
```
