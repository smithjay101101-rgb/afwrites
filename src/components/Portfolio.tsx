import { ArrowUpRight, FileText } from 'lucide-react'
import {
  PORTFOLIO_MARQUEE,
  PORTFOLIO_PIECES,
  PORTFOLIO_URL,
} from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, PrimaryCta, SpotlightCard } from './primitives'

/** Marquee row of remaining piece titles — physically shows the volume. */
function TitleMarquee() {
  // Duplicate the list so translateX(-50%) loops seamlessly.
  const titles = [...PORTFOLIO_MARQUEE, ...PORTFOLIO_MARQUEE]

  return (
    <div aria-hidden className="marquee-mask overflow-hidden py-2">
      <div className="marquee items-center gap-10">
        {titles.map((title, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 whitespace-nowrap font-display text-lg text-muted/30"
          >
            {title}
            <span className="text-accent/30">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const ref = useReveal<HTMLDivElement>(60)

  return (
    <section id="portfolio" className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8">
      <div ref={ref} className="mx-auto max-w-content">
        <Eyebrow>The work</Eyebrow>
        <h2 className="reveal max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-text">
          Hundreds of pieces.{' '}
          <em className="italic text-accent">Here's a taste.</em>
        </h2>
        <p className="reveal mt-6 max-w-[60ch] text-[clamp(1rem,1.5vw,1.15rem)] text-muted">
          Casino reviews, bonus and no-deposit guides, crypto-casino pages,
          slot reviews and pre-launch site copy across four markets. Every card
          below opens the full portfolio in Google Drive.
        </p>

        {/* Specimen wall */}
        <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PIECES.map((piece) => (
            <SpotlightCard
              key={piece.title}
              as="a"
              href={PORTFOLIO_URL}
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

        {/* The rest of the 850+, drifting by */}
        <div className="reveal mt-8">
          <TitleMarquee />
        </div>

        <div className="reveal mt-8 flex justify-center">
          <PrimaryCta
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse all 850+ pieces
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
