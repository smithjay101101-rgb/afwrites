import { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, SpotlightCard } from './primitives'

/** Renders the quote with its highlight substring in italic gold. */
function FeaturedQuote({
  text,
  highlight,
}: {
  text: string
  highlight?: string
}) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>
  const [before, after] = text.split(highlight)
  return (
    <>
      {before}
      <em className="italic text-accent">{highlight}</em>
      {after}
    </>
  )
}

function Monogram({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 font-display text-sm font-semibold text-accent"
    >
      {name.charAt(0)}
    </span>
  )
}

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>(60)
  const [featured, ...rest] = TESTIMONIALS
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [activeDot, setActiveDot] = useState(0)

  // Track scroll-snap position for the mobile dots.
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null
      if (!card) return
      const step = card.offsetWidth + 16
      setActiveDot(Math.round(el.scrollLeft / step))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="testimonials"
      className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8"
    >
      <div ref={ref} className="mx-auto max-w-content">
        <Eyebrow>What clients say</Eyebrow>
        <h2 className="reveal max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-text">
          Words from the people who{' '}
          <em className="italic text-accent">hired us</em>.
        </h2>

        {/* Featured pull quote — the strongest claim, set large */}
        <figure className="reveal mt-12 border-l-2 border-accent/50 pl-6 sm:pl-9">
          <Quote size={28} className="text-accent/70" aria-hidden />
          <blockquote className="mt-4 max-w-[34ch] font-display text-[clamp(1.4rem,3vw,2.2rem)] font-semibold leading-snug text-text">
            "<FeaturedQuote text={featured.quote} highlight={featured.highlight} />"
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-sm text-muted">
            <Monogram name={featured.attribution} />
            {featured.attribution}
          </figcaption>
        </figure>

        {/*
          Supporting quotes.
          Mobile: horizontal scroll-snap carousel with edge fade + dots.
          Desktop (md+): 2-column grid.
        */}
        <ul
          ref={scrollerRef}
          className="reveal marquee-mask mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:[mask-image:none] md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
          aria-label="Client testimonials"
        >
          {rest.map((t, i) => (
            <SpotlightCard
              key={i}
              as="li"
              className="flex w-[82vw] max-w-[420px] shrink-0 snap-start flex-col p-7 md:w-auto md:max-w-none md:shrink"
            >
              <Quote size={22} className="text-accent/70" aria-hidden />
              <blockquote className="mt-4 flex-1 text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed text-text">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4 text-sm text-muted">
                <Monogram name={t.attribution} />
                {t.attribution}
              </figcaption>
            </SpotlightCard>
          ))}
        </ul>

        {/* Snap-position dots (mobile only) */}
        <div
          className="mt-2 flex justify-center gap-2 md:hidden"
          aria-hidden
        >
          {rest.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 [transition-timing-function:var(--ease-out)] ${
                activeDot === i ? 'w-5 bg-accent' : 'w-1.5 bg-muted/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
