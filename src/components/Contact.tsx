import { Linkedin, Mail, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  LINKEDIN_URL,
} from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, SpotlightCard } from './primitives'

interface Method {
  icon: LucideIcon
  label: string
  value: string
  href: string
  external?: boolean
}

const METHODS: Method[] = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Adrian Florea',
    href: LINKEDIN_URL,
    external: true,
  },
]

export default function Contact() {
  const ref = useReveal<HTMLDivElement>(60)

  return (
    <section id="contact" className="px-5 py-[clamp(4rem,6vw,5rem)] sm:px-8">
      <div ref={ref} className="mx-auto max-w-content">
        <div className="reveal relative overflow-hidden rounded-3xl border border-accent/15 bg-surface px-6 py-[clamp(3rem,6vw,5rem)] text-center before:pointer-events-none before:absolute before:inset-x-0 before:-top-32 before:h-64 before:bg-[radial-gradient(50%_100%_at_50%_0%,rgba(212,175,106,0.12),transparent)] sm:px-12">
          <div className="relative mx-auto max-w-[52ch]">
            <div className="flex justify-center">
              <Eyebrow>Work with me</Eyebrow>
            </div>
            <h2 className="reveal font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-accent">
              Got a gambling site that needs to rank? Place your bet, I'll
              call.
            </h2>
            <p className="reveal mx-auto mt-6 max-w-[44ch] text-[clamp(1rem,1.5vw,1.15rem)] text-muted">
              Tell me your market and what you need. If it's iGaming, it's in my
              lane.
            </p>
          </div>

          {/* Contact methods */}
          <div className="reveal relative mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {METHODS.map(({ icon: Icon, label, value, href, external }) => (
              <SpotlightCard
                key={label}
                as="a"
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group flex flex-col items-center gap-3 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.08] text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-300 [transition-timing-function:var(--ease-spring)] group-hover:scale-110">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {label}
                </span>
                <span className="break-words text-sm font-semibold text-text transition-colors duration-300 group-hover:text-accent">
                  {value}
                </span>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
