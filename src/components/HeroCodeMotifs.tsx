"use client"

import { useEffect, useRef } from "react"

const motifs = [
  { symbol: "</>", className: "motif-angle" },
  { symbol: "{ }", className: "motif-braces" },
  { symbol: "=>", className: "motif-arrow" },
  { symbol: "( )", className: "motif-parentheses" },
  { symbol: ";", className: "motif-semicolon" },
]

export default function HeroCodeMotifs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return

    let frame = 0
    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        container.style.setProperty("--pointer-x", `${Math.max(-1, Math.min(1, x))}`)
        container.style.setProperty("--pointer-y", `${Math.max(-1, Math.min(1, y))}`)
      })
    }
    const resetPointer = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        container.style.setProperty("--pointer-x", "0")
        container.style.setProperty("--pointer-y", "0")
      })
    }

    container.addEventListener("pointermove", handlePointerMove)
    container.addEventListener("pointerleave", resetPointer)
    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener("pointermove", handlePointerMove)
      container.removeEventListener("pointerleave", resetPointer)
    }
  }, [])

  return <div className="hero-code-motifs" ref={containerRef} aria-hidden="true">{motifs.map((motif) => <span className={`hero-code-motif ${motif.className}`} key={motif.className}>{motif.symbol}</span>)}</div>
}
