"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "announcementDismissed"

export default function AnnouncementBar() {
  // default to visible (not dismissed). Only set dismissed=true when explicit saved value is "true".
  const [dismissed, setDismissed] = useState<boolean>(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === "true") setDismissed(true)
    } catch (e) {
      // ignore — keep visible
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, dismissed ? "true" : "false")
    } catch (e) {
      // ignore
    }
  }, [dismissed])

  if (dismissed) return null

  return (
    <div className="w-full bg-white text-black">
      <div className="mx-auto max-w-4xl px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold">🚀 Nuovo sito in arrivo — Presto online!</span>
        </div>
        <button
          aria-label="Chiudi annuncio"
          onClick={() => setDismissed(true)}
          className="ml-4 rounded px-2 py-1 text-black hover:bg-gray-100"
        >
          ×
        </button>
      </div>
    </div>
  )
}
