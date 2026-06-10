import { Phone } from 'lucide-react'
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from './primitives'
import CopyEmail from './CopyEmail'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>(50)

  return (
    <section id="contact" className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8">
      <div ref={ref} className="mx-auto max-w-content">
        <div className="reveal relative overflow-hidden rounded-3xl border border-accent/15 bg-surface px-6 py-[clamp(3rem,6vw,5rem)] before:pointer-events-none before:absolute before:inset-x-0 before:-top-32 before:h-64 before:bg-[radial-gradient(50%_100%_at_50%_0%,rgba(212,175,106,0.12),transparent)] sm:px-12">
          <Eyebrow>Work with us</Eyebrow>
          <h2 className="reveal max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-text">
            Got a gambling channel that needs content that{' '}
            <em className="italic text-accent">performs</em>?
          </h2>
          <p className="reveal mt-6 max-w-[56ch] text-[clamp(1rem,1.5vw,1.15rem)] text-muted">
            Tell us your market and your targets. If it's iGaming, it's in our
            lane.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CopyEmail variant="primary" />
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-text transition-colors duration-200 hover:text-accent"
            >
              <Phone size={18} aria-hidden />
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <p className="reveal mt-3 text-sm text-muted">
            Prefer to type it yourself? Click the address to copy it.
          </p>
        </div>
      </div>
    </section>
  )
}
