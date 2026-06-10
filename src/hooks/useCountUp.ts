import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number from 0 to `target` with an expo-out curve when the element
 * scrolls into view. Returns a ref to attach and the current value.
 * Respects prefers-reduced-motion (jumps straight to the target).
 */
export function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started.current) return
        started.current = true
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(2, -10 * t) // expo-out
          setValue(Math.round(target * (t === 1 ? 1 : eased)))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration])

  return { ref, value }
}
