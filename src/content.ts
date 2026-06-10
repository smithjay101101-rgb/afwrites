/**
 * Easy-to-edit site content & placeholders.
 * Adrian: update the values below to swap in real links, photo, and quotes.
 */
import founderImg from './assets/founder.jpeg'

// Google Drive portfolio link.
export const PORTFOLIO_URL =
  'https://drive.google.com/drive/folders/1BxProCABA3CYBfqVjXpRacMad8VBTP29'

// Contact details.
export const CONTACT_EMAIL = 'adrian.florea@afwrites.com'
export const CONTACT_PHONE = '+40731291898' // tel: format (no spaces)
export const CONTACT_PHONE_DISPLAY = '+40 731 291 898'

// Location.
export const LOCATION = 'Bucharest, Romania'

/**
 * Founder photo. To change it, replace src/assets/founder.jpeg (keep the name),
 * or update the import at the top of this file. Set to null to show the
 * "Add photo" placeholder box instead.
 */
export const founderPhoto: string | null = founderImg

export interface PortfolioPiece {
  title: string
  market: string
  type: string
}

/** Featured pieces shown as specimen cards in the Portfolio section. */
export const PORTFOLIO_PIECES: PortfolioPiece[] = [
  { title: 'SpinMills Casino Review', market: 'Canada', type: 'Casino review' },
  { title: 'CosmoBet Casino Review', market: 'UK & Ireland', type: 'Casino review' },
  { title: 'Moonspin Casino Mini Review', market: 'USA', type: 'Casino review' },
  { title: 'Lista cazinouri online România 2026', market: 'Romania', type: 'Toplist guide' },
  { title: 'Mental — Slot Review', market: 'Global', type: 'Slot review' },
  { title: 'Velvet Spin No-Deposit Bonus', market: 'USA', type: 'Bonus guide' },
]

/** Remaining piece titles, shown as the low-opacity marquee behind the wall. */
export const PORTFOLIO_MARQUEE: string[] = [
  'Gangsta Casino Review',
  'VegaDream Casino Review',
  'Legend of Athena — Slot Review',
  'A Big Candy No-Deposit Bonus',
  'Betano — 50 Free Spins Bonus',
  'Minimum Deposit Casinos in Romania',
  'Casino Payment Methods Guide',
  'International Casinos for Romanian Players',
]

export interface Testimonial {
  quote: string
  attribution: string
  /** Optional substring of `quote` rendered in italic gold when featured. */
  highlight?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'AFWrites rewrote our Canadian casino reviews and three of them hit page one within two months. Drafts came back clean, with nothing to cut, no AI fingerprints, and the wagering math was actually correct.',
    attribution: 'Content Lead, Gangsta Casino (Canada)',
    highlight: 'three of them hit page one within two months',
  },
  {
    quote:
      "First writer we've worked with who genuinely understands KYC flows and bonus terms. Our briefs used to come back full of factual errors we'd have to fix. Now they come back publish-ready.",
    attribution: 'SEO Manager, SpinMills Casino (Canada)',
  },
  {
    quote:
      "20+ tested, on-brand reviews a month, delivered on schedule. We've renewed three times, and that consistency alone is worth it. Getting both English and Romanian from one writer kept our multi-market rollout ahead of plan.",
    attribution: 'Editor, CosmoBet Casino (UK & Ireland)',
  },
]
