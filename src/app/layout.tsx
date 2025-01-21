import type { Metadata } from "next"
import Logo from "../assets/logo.svg"
import "./globals.css"
import Image from "next/image"
import TeamImage from "../assets/team/team.png"

export const metadata: Metadata = {
  title: "Coding bunker",
  icons: "/favicon.ico",
  openGraph: {
    title: "Coding bunker",
    description:
      "Unisciti a Coding Bunker, la community inclusiva per appassionati di programmazione e tecnologia. Scopri eventi, supporto per principianti ed esperti e proponi il tuo talk!",
    images: TeamImage.src,
    type: "website",
    locale: "it_IT",
    url: "https://www.codingbunker.it",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body>
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-9 px-10 py-8 md:gap-20 md:py-16">
          <header className="flex w-full flex-col gap-3 md:gap-2 md:flex-row md:justify-between pb-5 md:pb-0">
            <a href="/" className="text-xl">
              <Image src={Logo} alt="Coding Bunker Logo" height={32} />
            </a>
          </header>
          <main className="flex flex-col">{children}</main>
        </div>
      </body>
    </html>
  )
}
