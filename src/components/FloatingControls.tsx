"use client"

import { useEffect, useState } from "react"

export default function FloatingControls() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 480)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return <>
    <button className={`back-to-top ${visible ? "is-visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Torna all'inizio">↑ <span>Torna su</span></button>
    <a className="telegram-fab" href="https://t.me/codingbunker" target="_blank" rel="noreferrer"><span aria-hidden="true">✦</span> Unisciti su Telegram</a>
  </>
}
