import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { CONTACT_EMAIL } from '../content'

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through to legacy path */
  }
  // Fallback for non-secure contexts / older browsers.
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

interface Props {
  /** 'primary' = gold CTA button; 'inline' = quiet text-style button. */
  variant?: 'primary' | 'inline'
}

/**
 * Copies the contact email to the clipboard instead of triggering a mailto:
 * (which opens a desktop mail app most people don't use). The address stays
 * visible so it can also be selected and copied by hand.
 */
export default function CopyEmail({ variant = 'primary' }: Props) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onClick = async () => {
    const ok = await copyToClipboard(CONTACT_EMAIL)
    if (!ok) return
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2200)
  }

  /** Copy icon fades out, Check springs in with overshoot. */
  const iconSwap = (size: number) => (
    <span
      aria-hidden
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      <Copy
        size={size}
        className={`absolute inset-0 transition-all duration-200 ${
          copied ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
      <Check
        size={size}
        className={`absolute inset-0 transition-all duration-300 [transition-timing-function:var(--ease-spring)] ${
          copied ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      />
    </span>
  )

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`Copy email address ${CONTACT_EMAIL}`}
        className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
      >
        {CONTACT_EMAIL}
        {iconSwap(14)}
        <span aria-live="polite" className="sr-only">
          {copied ? 'Email copied to clipboard' : ''}
        </span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Copy email address ${CONTACT_EMAIL} to clipboard`}
      className={`inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b px-7 py-3 text-sm font-semibold text-ink transition-[transform,box-shadow,filter] duration-300 [transition-timing-function:var(--ease-out)] active:translate-y-0 active:scale-[0.98] ${
        copied
          ? 'from-[#ecca8e] to-[#d4af6a] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_14px_36px_-8px_rgba(212,175,106,0.65)]'
          : 'from-[#e0bd7d] to-[#c7a05a] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-8px_rgba(212,175,106,0.45)] hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_36px_-8px_rgba(212,175,106,0.6)]'
      }`}
    >
      {iconSwap(18)}
      {copied ? 'Copied to clipboard' : CONTACT_EMAIL}
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email copied to clipboard' : ''}
      </span>
    </button>
  )
}
