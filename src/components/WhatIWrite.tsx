import { Check } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from './primitives'

const ITEMS = [
  'Casino reviews',
  'Slot and game pages',
  'Bonus and no-deposit guides',
  'KYC and payment guides',
  'Pre-launch and site copy',
  'Crypto casinos',
]

export default function WhatIWrite() {
  const ref = useReveal<HTMLDivElement>(60)

  return (
    <section id="what-i-write" className="px-5 py-[clamp(4rem,6vw,5rem)] sm:px-8">
      <div ref={ref} className="mx-auto max-w-content">
        <Eyebrow>What I write</Eyebrow>
        <h2 className="reveal max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-text">
          Gambling content, and{' '}
          <em className="italic text-accent">nothing else</em>.
        </h2>
        <p className="reveal mt-6 max-w-[64ch] text-[clamp(1rem,1.5vw,1.15rem)] text-muted">
          I stay specialised on purpose. You get a writer who already knows KYC
          flows, bonus terms and wagering math, not a generalist learning your
          vertical on your budget.
        </p>

        <ul className="reveal mt-10 grid gap-x-10 gap-y-px sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="group flex items-center gap-3 border-b border-line py-4 text-[clamp(1rem,1.6vw,1.2rem)] font-medium text-text"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-accent transition-colors duration-300 [transition-timing-function:var(--ease-out)] group-hover:border-accent/50 group-hover:bg-accent/15">
                <Check size={13} strokeWidth={2.5} aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
