import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
} from 'react'

/** Gold eyebrow label with a short rule, above section headlines. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="reveal mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      <span aria-hidden className="h-px w-6 bg-accent/60" />
      {children}
    </p>
  )
}

interface CtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

/**
 * Primary CTA: minted-gold gradient with inner highlight and ambient gold
 * shadow. One per section. `group` enables icon micro-interactions inside.
 */
export function PrimaryCta({ children, className = '', ...props }: CtaProps) {
  return (
    <a
      {...props}
      className={`group inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e0bd7d] to-[#c7a05a] px-7 py-3 text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-8px_rgba(212,175,106,0.45)] transition-[transform,box-shadow] duration-300 [transition-timing-function:var(--ease-out)] hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_36px_-8px_rgba(212,175,106,0.6)] active:translate-y-0 active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  )
}

/** Secondary CTA: outline / ghost. Text warms to gold on hover. */
export function GhostCta({ children, className = '', ...props }: CtaProps) {
  return (
    <a
      {...props}
      className={`group inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full border border-line bg-transparent px-7 py-3 text-sm font-semibold text-text transition-[transform,border-color,background-color,color] duration-300 [transition-timing-function:var(--ease-out)] hover:border-accent/50 hover:bg-white/[0.03] hover:text-accent active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  )
}

type SpotlightCardProps<T extends 'article' | 'li' | 'div' | 'a'> = {
  as?: T
  children: ReactNode
  className?: string
} & (T extends 'a'
  ? AnchorHTMLAttributes<HTMLAnchorElement>
  : HTMLAttributes<HTMLElement>)

/**
 * Surface card that lifts, blooms a gold border, and tracks the cursor with
 * a radial spotlight (via --mx/--my consumed by .card-hover::after).
 */
export function SpotlightCard<T extends 'article' | 'li' | 'div' | 'a' = 'div'>({
  as,
  children,
  className = '',
  ...props
}: SpotlightCardProps<T>) {
  const Tag = (as ?? 'div') as 'div'

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      {...(props as HTMLAttributes<HTMLDivElement>)}
      onMouseMove={onMouseMove}
      className={`card-hover rounded-2xl border border-line bg-surface ${className}`}
    >
      {children}
    </Tag>
  )
}
