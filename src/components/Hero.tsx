import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { GhostCta, PrimaryCta } from './primitives'

interface Stat {
  /** Animated number, or null for text-only figures like "EN / RO". */
  count: number | null
  suffix?: string
  figure?: string
  label: string
}

const STATS: Stat[] = [
  { count: 850, suffix: '+', label: 'pieces shipped' },
  { count: 20, suffix: '+', label: 'markets' },
  { count: 10, suffix: '+', label: 'countries' },
  { count: 5, suffix: '+', label: 'years' },
]

function StatFigure({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.count ?? 0)

  return (
    <span
      ref={ref}
      className="tabular block font-display text-[clamp(1.9rem,3.5vw,2.6rem)] font-semibold text-text"
    >
      {stat.count === null ? (
        stat.figure
      ) : (
        <>
          {value}
          {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
        </>
      )}
    </span>
  )
}

export default function Hero() {
  const ref = useReveal<HTMLDivElement>(90)

  return (
    <section
      id="top"
      className="relative px-5 pb-[clamp(4rem,6vw,5rem)] pt-[clamp(7rem,14vw,11rem)] sm:px-8"
    >
      <div ref={ref} className="mx-auto max-w-content">
        <p className="reveal mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <span aria-hidden className="h-px w-6 bg-accent/60" />
          iGaming writer · EN / RO
        </p>

        <h1 className="reveal max-w-[18ch] font-display text-[clamp(2.6rem,7vw,5.25rem)] font-semibold text-text">
          Casino content that{' '}
          <em className="italic text-accent">ranks</em> in iGaming's toughest
          markets.
        </h1>

        <p className="reveal mt-7 max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.25rem)] text-muted">
          I'm Adrian. I write casino reviews, slot pages and bonus guides for
          operators and affiliates across the UK, Ireland, Canada and the US,
          plus Romania. I've been a casino player myself, so I know how operators
          and players think. I also spent close to a year buying media on
          Facebook, so I know what ranks and what makes a player click.
        </p>

        <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <PrimaryCta href="#portfolio">
            View my portfolio
            <ArrowUpRight
              size={18}
              aria-hidden
              className="transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </PrimaryCta>
          <GhostCta href="#about">About me</GhostCta>
        </div>

        <dl className="reveal mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-4 sm:divide-x sm:divide-line sm:gap-x-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="sm:px-8 sm:first:pl-0">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <StatFigure stat={stat} />
                <span className="mt-1 block text-sm text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
