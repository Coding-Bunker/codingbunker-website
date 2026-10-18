const motifs = [
  { symbol: "</>", className: "motif-angle" },
  { symbol: "{ }", className: "motif-braces" },
  { symbol: "=>", className: "motif-arrow" },
  { symbol: "( )", className: "motif-parentheses" },
  { symbol: ";", className: "motif-semicolon" },
]

export default function HeroCodeMotifs() {
  return <div className="hero-code-motifs" aria-hidden="true">{motifs.map((motif) => <span className={`hero-code-motif ${motif.className}`} key={motif.className}>{motif.symbol}</span>)}</div>
}
