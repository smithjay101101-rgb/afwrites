import { LOCATION } from '../content'
import CopyEmail from './CopyEmail'

export default function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="hairline-gold mx-auto max-w-content" aria-hidden />
      <div className="mx-auto flex max-w-content flex-col gap-3 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="font-display text-lg font-semibold text-text">
            Adrian Florea
          </span>
          <span className="hidden text-muted/40 sm:inline" aria-hidden>
            ·
          </span>
          <span className="text-sm text-muted">iGaming writer, EN / RO</span>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-center sm:gap-3">
          <CopyEmail variant="inline" />
          <span className="hidden text-muted/40 sm:inline" aria-hidden>
            ·
          </span>
          <span>{LOCATION}</span>
          <span className="hidden text-muted/40 sm:inline" aria-hidden>
            ·
          </span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  )
}
