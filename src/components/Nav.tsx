import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#what-i-write', label: 'What I write' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = LINKS.map((l) => l.href.slice(1))

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-ink/70 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 font-display text-xl font-semibold tracking-tightish text-text"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 font-display text-sm italic text-accent">
            AF
          </span>
          Adrian Florea
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 after:[transition-timing-function:var(--ease-out)] hover:text-text ${
                    isActive
                      ? 'text-text after:scale-x-100'
                      : 'text-muted after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-[44px] items-center rounded-full bg-gradient-to-b from-[#e0bd7d] to-[#c7a05a] px-5 py-2.5 text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-8px_rgba(212,175,106,0.45)] transition-[transform,box-shadow] duration-300 [transition-timing-function:var(--ease-out)] hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_36px_-8px_rgba(212,175,106,0.6)] active:translate-y-0 active:scale-[0.98] md:inline-flex"
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors duration-200 active:bg-white/[0.06] md:hidden"
          >
            <Menu
              size={20}
              aria-hidden
              className={`absolute transition-all duration-300 [transition-timing-function:var(--ease-out)] ${
                open ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              size={20}
              aria-hidden
              className={`absolute transition-all duration-300 [transition-timing-function:var(--ease-out)] ${
                open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel: animated height + staggered link entrance */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out)] md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-content flex-col gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : '0ms' }}
                className={`transition-[opacity,transform] duration-300 [transition-timing-function:var(--ease-out)] ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
              >
                <a
                  href={link.href}
                  tabIndex={open ? undefined : -1}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-base font-medium text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              style={{
                transitionDelay: open ? `${80 + LINKS.length * 40}ms` : '0ms',
              }}
              className={`pt-2 transition-[opacity,transform] duration-300 [transition-timing-function:var(--ease-out)] ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              <a
                href="#contact"
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-b from-[#e0bd7d] to-[#c7a05a] px-5 text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] active:scale-[0.98]"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
