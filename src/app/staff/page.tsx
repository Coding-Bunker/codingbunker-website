import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Staff | Coding bunker',
  description: 'Coding Bunker Staff',
}

type StaffMember = {
  name: string
  imageSrc: string
  linkedin: string
  alt?: string
}

const STAFF: StaffMember[] = [
  {
    name: 'Ludovico Besana',
    imageSrc: '/staff/ludovico-besana.png',
    linkedin: 'https://www.linkedin.com/in/ludovicobesana/',
    alt: 'Ludovico Besana',
  },
  {
    name: 'Pietro Marchini',
    imageSrc: '/staff/pietro-marchini.png',
    linkedin: 'https://www.linkedin.com/in/pietro-marchini-6a2545109/',
    alt: 'Pietro Marchini',
  },
  {
    name: 'Ruggero Visintin',
    imageSrc: '/staff/ruggero-visintin.png',
    linkedin: 'https://www.linkedin.com/in/ruggero-enrico-visintin/',
    alt: 'Ruggero Visintin',
  },
]

export default function Page() {
  return (
    <article className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Staff</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {STAFF.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col items-center gap-4 rounded-md border bg-slate-800/20 p-4 text-white"
          >
            <div className="w-40 h-40 relative rounded-full overflow-hidden border">
              <Image
                src={member.imageSrc}
                alt={member.alt || member.name}
                fill
                sizes="(max-width: 768px) 160px, 200px"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-xl font-semibold text-center">{member.name}</p>
            <a
              href={member.linkedin}
              className="text-sm underline decoration-dashed"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </article>
  )
}
