import { ArrowUp } from 'lucide-react'
import { LOCATION } from '../content'
import CopyEmail from './CopyEmail'

export default function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="hairline-gold mx-auto max-w-content" aria-hidden />
      <div className="mx-auto flex max-w-content flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="font-display text-lg font-semibold text-text">
            AFWrites
          </span>
          <span className="hidden text-muted/40 sm:inline" aria-hidden>
            ·
          </span>
          <span className="text-sm text-muted">{LOCATION}</span>
          <span className="hidden text-muted/40 sm:inline" aria-hidden>
            ·
          </span>
          <CopyEmail variant="inline" />
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-center sm:gap-4">
          <span>18+ Please gamble responsibly.</span>
          <span className="hidden text-muted/40 sm:inline" aria-hidden>
            ·
          </span>
          <span>© 2026 AFWrites.</span>
          <a
            href="#top"
            className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
          >
            Back to top
            <ArrowUp
              size={14}
              aria-hidden
              className="transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
