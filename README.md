# Coding Bunker website

## Events

The homepage and `/events` read the public Coding Bunker Meetup event page at build time. No Meetup credential is stored in the repository. Upcoming events, the latest past events and registration links therefore come from the official Meetup listings; publish a new build to refresh the static export.

If Meetup is temporarily unavailable while building, the event sections stay empty and link visitors to the official group page instead of showing stale invented data.

## Topic voting

The homepage topic vote uses Netlify Forms. Submissions are stored in the Netlify project under **Forms → topic-vote**. To receive every vote by email, configure a form submission notification in the Netlify dashboard and set the recipient to the community inbox. The form redirects voters to `/grazie/` after a successful submission.

# Environment file

```
NOTION_TOKEN=
NOTION_EVENTS_DATABASE=
NOTION_CREW_DATABASE=
NOTION_SUBSCRIBERS_DATABASE=
BREVO_API_KEY=
BREVO_STANDARD_CONTACT_LIST=
```
