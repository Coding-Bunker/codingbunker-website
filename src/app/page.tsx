import Image from "next/image"
import TeamImage from "../assets/team/team.png"
import NotionApiClient from "@/apiClient/NotionApiClient"
import SingleEventCard from "@/components/SingleEventCard"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import Link from "next/link"

import InstagramImage from "../assets/social/instagram.svg"
import LinkedinImage from "../assets/social/linkedin.svg"
import MeetupImage from "../assets/social/meetup.svg"
import GithubImage from "../assets/social/github.svg"
import TelegramImage from "../assets/social/telegram.svg"
import DiscordImage from "../assets/social/discord.svg"
import CodemotionLogo from "../assets/partner/codemotion.png"
import GruspLogo from "../assets/partner/grusp.png"
import FBrodoliniLogo from "../assets/partner/fondazione-brodolini.png"

const Home = async () => {
  const lastEvents = await NotionApiClient().fetchLastEvents()
  const nextEvent = await NotionApiClient().fetchNextEvent()

  return (
    <>
      <article className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex flex-col gap-6 my-auto max-w-md md:max-w-lg md:w-2/3">
          <h1 className="text-3xl font-bold">Benvenutə in Coding Bunker</h1>
          <h2 className="text-xl leading-6">
            La tua porta d&apos;accesso ad una Community dinamica di
            appassionati e appassionate di programmazione e tecnologia!
          </h2>
          <p>
            Il nostro obiettivo è creare un ambiente inclusivo dove tutti, dai
            principianti agli esperti, possono trovare supporto, imparare e
            crescere insieme.
          </p>
          <p>
            Unisciti a noi per crescere, imparare e fare la differenza insieme!
          </p>
          <div className="flex flex-row gap-6">
              <a
                  className="group flex cursor-pointer flex-col gap-2 rounded-md border text-white p-2 transition-all duration-300 hover:bg-white hover:text-purple"
                  href="https://forms.gle/FPca5upst1VTGFP86"
                  rel="noreferrer"
                  target="_blank"
                >
                  
                  Diventa nostro partner
                </a>
                <a
                  className="group flex cursor-pointer flex-col gap-2 rounded-md border text-white p-2 transition-all duration-300 hover:bg-white hover:text-purple"
                  href="https://forms.gle/okz6VZ9Uv8JcGTiS8"
                  rel="noreferrer"
                  target="_blank"
                >
                  Proponi il tuo talk
                </a>
                <a
                  className="group flex cursor-pointer flex-col gap-2 rounded-md border text-white p-2 transition-all duration-300 hover:bg-white hover:text-purple"
                  href="https://forms.gle/okz6VZ9Uv8JcGTiS8"
                  rel="noreferrer"
                  target="_blank"
                >
                  Submit your talk 🇬🇧
                </a>
          </div>
          <div className="custom-breadcrumbs flex flex-row gap-4 text-right items-center justify-end">
            <a
              href="https://www.meetup.com/coding-bunker/"
              className="hover:scale-150 transition duration-300"
              rel="noreferrer"
              target="_blank"
            >
              <Image width={30} height={30} src={MeetupImage} alt="Meetup" />
            </a>
            <a
              href="https://github.com/Coding-Bunker"
              className="hover:scale-150 transition duration-300"
              rel="noreferrer"
              target="_blank"
            >
              <Image width={30} height={30} src={GithubImage} alt="Github" />
            </a>
            <a
              href="https://discord.com/invite/9x4FqmTxDu"
              className="hover:scale-150 transition duration-300"
              rel="noreferrer"
              target="_blank"
            >
              <Image width={30} height={30} src={DiscordImage} alt="Discord" />
            </a>
            <a
              href="https://t.me/codingbunker"
              className="hover:scale-150 transition duration-300"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                width={30}
                height={30}
                src={TelegramImage}
                alt="Telegram"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="avatar relative overflow-hidden rounded-lg border-4 border-white shadow-lg">
            <Image
              src={TeamImage}
              className="w-full h-auto transition-transform duration-300 ease-out hover:scale-125"
              alt="Team"
            />
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-8">
        {nextEvent && (
          <header className="flex flex-col justify-between gap-2 mt-10">
            <h3 className="text-lg font-bold">Registrati al prossimo evento</h3>
            <SingleEventCard
              className="border-4"
              event={nextEvent as PageObjectResponse}
            />
          </header>
        )}
        <header className="flex w-full flex-row justify-between gap-2 mt-10">
          <h3 className="text-lg font-bold">Ultimi eventi</h3>
          <Link
            href="/events"
            className="text-sm text-white underline decoration-dashed underline-offset-8"
            rel="noreferrer"
          >
            Tutti i nostri eventi
          </Link>
        </header>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto">
          {lastEvents.map((event) => (
            <SingleEventCard
              event={event as PageObjectResponse}
              key={event.id}
            />
          ))}
        </section>
        <header className="flex w-full flex-row justify-between gap-2 mt-10">
          <h3 className="text-lg font-bold">Dicono di noi</h3>
        </header>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm italic text-gray-700">
              &quot;Un&apos;esperienza fantastica! Coding Bunker ha una
              community accogliente e molti eventi interessanti. Altamente
              consigliato!&quot;
            </p>
            <p className="mt-2 text-right font-bold text-black">
              - Alessandro R.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm italic text-gray-700">
              &quot;Ho trovato molti contatti utili.&quot;
            </p>
            <p className="mt-2 text-right font-bold text-black">- Andrea C.</p>
          </div>
        </section>
        {/* 
        <div className="flex flex-row gap-6">
              <a
                  className="group flex cursor-pointer flex-col gap-2 rounded-md border text-white p-2 transition-all duration-300 hover:bg-white hover:text-purple"
                  href="https://www.meetup.com/it-IT/coding-bunker/"
                  rel="noreferrer"
                  target="_blank"
                >
                  
                  Leggi tutte le recensioni
                </a>
        
          </div>*/}

        <header className="flex w-full flex-row justify-between gap-2 mt-10">
          <h3 className="text-lg font-bold">Partner</h3>
        </header>
        <section className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center">
            <Image
              src={FBrodoliniLogo}
              width={150}
              height={150}
              alt="Fondazione Brodolini Logo"
              className="transform transition duration-300 hover:scale-110"
            />
          </div>
          <div className="flex items-center">
            <Image
              src={CodemotionLogo}
              width={150}
              height={150}
              alt="Codemotion Logo"
              className="transform transition duration-300 hover:scale-110"
            />
          </div>
          <div className="flex items-center">
            <Image
              src={GruspLogo}
              width={150}
              height={150}
              alt="GrUSP Logo"
              className="transform transition duration-300 hover:scale-110"
            />
          </div>
        </section>
      </article>
    </>
  )
}

export default Home
