import { useEffect, useRef } from 'react'
import slots from '../assets/slots-cinematic.jpg'
import { useReveal } from '../hooks/useReveal'

/**
 * Full-bleed editorial image band with a slow scroll parallax: the image is
 * rendered taller than its frame and drifts vertically as the band crosses
 * the viewport. Disabled under prefers-reduced-motion.
 */
export default function SlotsBand() {
  const ref = useReveal<HTMLDivElement>(0)
  const imgRef = useRef<HTMLImageElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const img = imgRef.current
    const frame = frameRef.current
    if (!img || !frame) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = frame.getBoundingClientRect()
      const vh = window.innerHeight
      // -1 (band below viewport) .. 1 (band above viewport)
      const progress = Math.max(
        -1,
        Math.min(1, (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2)),
      )
      img.style.transform = `translateY(${progress * -28}px)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section aria-label="Casino slot reels" className="px-5 sm:px-8">
      <div
        ref={ref}
        className="reveal relative mx-auto max-w-content overflow-hidden rounded-3xl border border-line"
      >
        <div ref={frameRef} className="h-[clamp(260px,40vw,460px)]">
          <img
            ref={imgRef}
            src={slots}
            alt="Close-up of casino slot machine reels showing three golden sevens"
            loading="lazy"
            className="w-full object-cover will-change-transform"
            style={{ marginTop: '-28px', height: 'calc(100% + 56px)' }}
          />
        </div>
        {/* Fade the image edges into the page for a seamless editorial feel */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30"
        />
      </div>
    </section>
  )
}
