import { useState } from 'react'
import { ArrowUpRight, FileText } from 'lucide-react'
import {
  PORTFOLIO_PIECES,
  PORTFOLIO_URL,
  type PieceLang,
} from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, PrimaryCta, SpotlightCard } from './primitives'

const TABS: { id: PieceLang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'ro', label: 'Romanian' },
]

export default function Portfolio() {
  const ref = useReveal<HTMLDivElement>(60)
  const [lang, setLang] = useState<PieceLang>('en')

  const pieces = PORTFOLIO_PIECES.filter((p) => p.lang === lang)

  return (
    <section id="portfolio" className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8">
      <div ref={ref} className="mx-auto max-w-content">
        <Eyebrow>The work</Eyebrow>
        <h2 className="reveal max-w-[22ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-accent">
          2,000,000+ words and still counting. Here are some of them.
        </h2>
        <p className="reveal mt-6 max-w-[62ch] text-[clamp(1rem,1.5vw,1.15rem)] text-muted">
          Casino reviews, bonus and no-deposit guides, crypto-casino pages, slot
          reviews and pre-launch site copy. Each piece below opens the actual
          PDF.
        </p>

        {/* Language filter tabs */}
        <div
          role="tablist"
          aria-label="Filter portfolio by language"
          className="reveal mt-9 inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1"
        >
          {TABS.map((tab) => {
            const active = lang === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setLang(tab.id)}
                className={`min-h-[40px] cursor-pointer rounded-full px-5 text-sm font-semibold transition-[color,background-color,box-shadow] duration-300 [transition-timing-function:var(--ease-out)] ${
                  active
                    ? 'bg-gradient-to-b from-[#e0bd7d] to-[#c7a05a] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]'
                    : 'text-muted hover:text-text'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Specimen grid (re-keyed so cards re-reveal on tab change) */}
        <div
          key={lang}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pieces.map((piece) => (
            <SpotlightCard
              key={piece.title}
              as="a"
              href={piece.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {piece.market}
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="text-muted transition-all duration-300 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-text">
                {piece.title}
              </h3>
              <p className="mt-auto flex items-center gap-1.5 pt-4 text-sm text-muted">
                <FileText size={14} aria-hidden className="text-accent/60" />
                {piece.type}
              </p>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryCta
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse some samples
            <ArrowUpRight
              size={18}
              aria-hidden
              className="transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </PrimaryCta>
        </div>
      </div>
    </section>
  )
}
