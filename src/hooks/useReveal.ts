import { useEffect, useRef } from 'react'

/**
 * Reveals an element (and staggers its `.reveal` children) on scroll
 * via IntersectionObserver. Respects prefers-reduced-motion: when reduced
 * motion is requested, nothing is observed and the CSS keeps content visible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(stagger = 40) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const children = Array.from(
      el.querySelectorAll<HTMLElement>('.reveal'),
    )
    children.forEach((child, i) => {
      child.style.setProperty('--reveal-delay', `${i * stagger}ms`)
    })

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    if (children.length > 0) {
      children.forEach((child) => observer.observe(child))
    } else {
      el.classList.add('reveal')
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [stagger])

  return ref
}
