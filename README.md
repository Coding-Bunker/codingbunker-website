# Coding Bunker Website

[![Quality checks](https://github.com/Coding-Bunker/codingbunker-website/actions/workflows/quality.yml/badge.svg)](https://github.com/Coding-Bunker/codingbunker-website/actions/workflows/quality.yml)

**The official website of [Coding Bunker](https://www.codingbunker.it), an independent tech community based in Milan, Italy.**

We bring software professionals together through free meetups, practical talks, workshops, and conversations about real-world engineering challenges. Our focus is on sharing knowledge, learning from each other, and making the local tech ecosystem stronger.

[Website](https://www.codingbunker.it) · [Events](https://www.codingbunker.it/events) · [Meetup](https://www.meetup.com/coding-bunker/) · [Telegram](https://t.me/codingbunker) · [Contribute](CONTRIBUTING.md)

## About this project

This repository contains the source code for the Coding Bunker website. It helps people:

- Discover upcoming and past community events.
- Learn about Coding Bunker, its team, partners, and impact in Milan.
- Find ways to participate, contribute, and connect with the community.
- Read our [Code of Conduct](https://www.codingbunker.it/code-of-conduct).

The website is publicly developed, and contributions of all sizes are welcome.

## Tech stack

- **Framework:** Next.js 15 (App Router), React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 and CSS
- **Package manager:** pnpm 9.1.0
- **Output:** Static export in `dist/`
- **Event data:** Public [Coding Bunker Meetup](https://www.meetup.com/coding-bunker/events/) listings

## Getting started

### Prerequisites

- Node.js **22.13.1**, as specified in [`.nvmrc`](.nvmrc)
- pnpm, managed via Corepack

### Run locally

```bash
git clone https://github.com/Coding-Bunker/codingbunker-website.git
cd codingbunker-website

# If you use nvm:
nvm install
nvm use

corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables or API keys are required for the current website's local development or build.

### Available commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server. |
| `pnpm build` | Build and export the static site to `dist/`. |
| `pnpm lint` | Run ESLint checks. |
| `pnpm quality` | Check TypeScript types without emitting files. |
| `pnpm format:check` | Check formatting with Prettier. |
| `pnpm test:meetup` | Run the Meetup integration's automated tests. |

Before opening a pull request, run:

```bash
pnpm lint
pnpm quality
pnpm format:check
pnpm test:meetup
pnpm build
```

## How the website works

### Events from Meetup

The homepage and `/events` fetch public Coding Bunker Meetup event data at **build time**. The site does not need a Meetup API key.

- Upcoming and past events are derived from the public Meetup listings.
- The generated website is static, so newly published events require a new build/deployment to appear.
- If Meetup cannot be reached during a build, event sections can be empty and direct visitors to Meetup instead.
- The integration depends on publicly exposed Meetup page data, which can change upstream. Related code and tests live in [`src/lib/meetup.ts`](src/lib/meetup.ts) and [`tests/meetup.test.ts`](tests/meetup.test.ts).

### Topic voting

The topic-voting form uses [FormSubmit](https://formsubmit.co/) to email selected topics to Coding Bunker and redirect visitors to the thank-you page. It does not require an API key in this repository. See [`src/components/TopicVote.tsx`](src/components/TopicVote.tsx).

## Project structure

```text
src/
  app/           # Pages, layouts, and route metadata (App Router)
  components/    # Reusable UI components
  lib/           # Meetup event integration
  assets/        # Imported images and graphics
  apiClient/     # Existing integration client modules
public/          # Public assets and icons
tests/           # Meetup integration tests and fixtures
.github/         # CI workflow and code ownership configuration
```

## Contributing

We welcome bug reports, improvements to accessibility and performance, documentation fixes, translations, and new features that benefit the community.

1. Check [existing issues](https://github.com/Coding-Bunker/codingbunker-website/issues) before starting work.
2. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the fork and branch workflow.
3. Make your change and run the checks above.
4. Open a [pull request](https://github.com/Coding-Bunker/codingbunker-website/pulls) explaining what changed and why. For visual changes, screenshots are helpful.

Not sure where to start? Open an issue to discuss your idea.

## Community and Code of Conduct

Coding Bunker is built around respectful, practical knowledge sharing. Everyone contributing to the website or interacting with our community is expected to follow our [Code of Conduct](https://www.codingbunker.it/code-of-conduct) ([English version](https://www.codingbunker.it/code-of-conduct/en)).

Join us on [Meetup](https://www.meetup.com/coding-bunker/) or [Telegram](https://t.me/codingbunker). For community inquiries, contact [info@codingbunker.it](mailto:info@codingbunker.it).

## License

**A software license has not yet been specified for this repository.** Public access to source code does not automatically grant permission to reuse or redistribute it. Please contact the maintainers about reuse until a `LICENSE` file is added.
