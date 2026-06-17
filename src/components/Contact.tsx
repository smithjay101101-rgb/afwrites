import { useState, type FormEvent } from 'react'
import { Mail, Phone } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from './primitives'

const FIELD_CLASS =
  'min-h-[44px] w-full rounded-xl border border-line bg-ink/40 px-4 py-3 text-text placeholder:text-muted/60 transition-colors duration-200 focus:border-accent/50 focus:outline-none focus-visible:outline-none'

const LABEL_CLASS = 'mb-2 block text-sm font-medium text-text'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>(50)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  /**
   * No backend on this static host, so submission opens the visitor's mail
   * client pre-filled. The visible email/phone below are the fallback path.
   */
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `iGaming work${form.company ? ` · ${form.company}` : ''}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany or market: ${form.company}\n\n${form.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8">
      <div ref={ref} className="mx-auto max-w-content">
        <div className="reveal relative overflow-hidden rounded-3xl border border-accent/15 bg-surface px-6 py-[clamp(3rem,6vw,5rem)] before:pointer-events-none before:absolute before:inset-x-0 before:-top-32 before:h-64 before:bg-[radial-gradient(50%_100%_at_50%_0%,rgba(212,175,106,0.12),transparent)] sm:px-12">
          <div className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14">
            {/* Left: pitch */}
            <div>
              <Eyebrow>Work with me</Eyebrow>
              <h2 className="reveal max-w-[18ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-accent">
                Got a gambling site that needs to rank? Place your bet, I'll
                call.
              </h2>
              <p className="reveal mt-6 max-w-[44ch] text-[clamp(1rem,1.5vw,1.15rem)] text-muted">
                Tell me your market and what you need. If it's iGaming, it's in
                my lane.
              </p>

              {/* Direct contact, always visible */}
              <div className="reveal mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-2.5 text-sm font-semibold text-text transition-colors duration-200 hover:text-accent"
                >
                  <Mail size={18} aria-hidden className="text-accent/70" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="group inline-flex items-center gap-2.5 text-sm font-semibold text-text transition-colors duration-200 hover:text-accent"
                >
                  <Phone size={18} aria-hidden className="text-accent/70" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Right: form */}
            <form className="reveal flex flex-col gap-5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className={LABEL_CLASS}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="email" className={LABEL_CLASS}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="company" className={LABEL_CLASS}>
                  Company or market
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={onChange}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="message" className={LABEL_CLASS}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className={`${FIELD_CLASS} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="group inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e0bd7d] to-[#c7a05a] px-7 py-3 text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-8px_rgba(212,175,106,0.45)] transition-[transform,box-shadow] duration-300 [transition-timing-function:var(--ease-out)] hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_36px_-8px_rgba(212,175,106,0.6)] active:translate-y-0 active:scale-[0.98]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
