import { Dice5, Handshake, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, SpotlightCard } from './primitives'

interface Pillar {
  icon: LucideIcon
  title: string
  body: string
}

const PILLARS: Pillar[] = [
  {
    icon: Dice5,
    title: 'Gambling only',
    body: "Casino reviews, slot pages, bonuses, KYC and payment guides. That's the whole list, and it's all we do.",
  },
  {
    icon: Handshake,
    title: 'Client focused',
    body: 'A short client list by design. Fewer clients means faster replies and a writer who already knows your site before you send the next brief.',
  },
  {
    icon: Trophy,
    title: 'Built to rank',
    body: 'Reviews we actually test, written to current YMYL and E-E-A-T standards, so they hold up with Google and read like a real person played the game.',
  },
]

export default function Why() {
  const ref = useReveal<HTMLDivElement>(60)

  return (
    <section
      id="what-we-do"
      className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8"
    >
      <div ref={ref} className="mx-auto max-w-content">
        <Eyebrow>Why AFWrites</Eyebrow>
        <h2 className="reveal max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-text">
          A small studio that only writes{' '}
          <em className="italic text-accent">iGaming</em>.
        </h2>
        <p className="reveal mt-6 max-w-[64ch] text-[clamp(1rem,1.5vw,1.15rem)] text-muted">
          AFWrites stays small on purpose. Your channel gets a writer who reads
          the brief and learns your brand, not a content mill juggling forty
          unrelated clients. We only take gambling and iGaming work, because
          it's the one industry we know well enough to write fast and get right.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <SpotlightCard
              key={title}
              as="article"
              className="reveal group p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.08] text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-300 [transition-timing-function:var(--ease-spring)] group-hover:-rotate-3 group-hover:scale-110">
                <Icon size={22} strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-text">
                {title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {body}
              </p>
            </SpotlightCard>
          ))}
        </div>

        <p className="reveal mt-10 max-w-[68ch] border-l-2 border-accent/40 pl-5 text-[clamp(1rem,1.5vw,1.15rem)] text-text">
          We've also run paid social across 10 markets, so we write knowing what
          makes a player click, not just what fills a word count.
        </p>
      </div>
    </section>
  )
}
