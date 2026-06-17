/**
 * Easy-to-edit site content & links.
 * Adrian: update the values below to swap in real links and photo.
 */
import profileImg from './assets/profile.jpeg'

// Full Google Drive portfolio folder ("Browse some samples" button).
export const PORTFOLIO_URL =
  'https://drive.google.com/drive/folders/1BxProCABA3CYBfqVjXpRacMad8VBTP29'

// Contact details.
export const CONTACT_EMAIL = 'adrian.florea@afwrites.com'
export const CONTACT_PHONE = '+40731291898' // tel: format (no spaces)
export const CONTACT_PHONE_DISPLAY = '+40 731 291 898'

// Location.
export const LOCATION = 'Bucharest, Romania'

/**
 * Profile photo. To change it, replace src/assets/profile.jpeg (keep the name),
 * or update the import at the top of this file. Set to null to show the
 * placeholder box instead.
 */
export const profilePhoto: string | null = profileImg

export type PieceLang = 'en' | 'ro'

export interface PortfolioPiece {
  title: string
  market: string
  type: string
  lang: PieceLang
  /**
   * Individual Drive PDF link for THIS piece. Opens in a new tab.
   * TODO (Adrian): paste each article's own Drive link here. Until then these
   * fall back to the full folder so nothing 404s.
   */
  pdfUrl: string
}

/**
 * Every portfolio piece. The Portfolio section filters this list by `lang`
 * for the English / Romanian tabs.
 */
export const PORTFOLIO_PIECES: PortfolioPiece[] = [
  // English
  { title: 'Gangsta Casino Review', market: 'Canada', type: 'Casino review', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'SpinMills Casino Review', market: 'Canada', type: 'Casino review', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'CosmoBet Casino Review', market: 'UK & Ireland', type: 'Casino review', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'VegaDream Casino Review', market: 'UK & Ireland', type: 'Casino review', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'Moonspin Casino Mini Review', market: 'US', type: 'Casino review', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'Mental Slot Review', market: 'Global', type: 'Slot review', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'Legend of Athena Slot Review', market: 'Global', type: 'Slot review', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'Velvet Spin No-Deposit Bonus', market: 'US', type: 'Bonus guide', lang: 'en', pdfUrl: PORTFOLIO_URL },
  { title: 'A Big Candy No-Deposit Bonus', market: 'US', type: 'Bonus guide', lang: 'en', pdfUrl: PORTFOLIO_URL },
  // Romanian
  { title: 'Lista cazinouri online România 2026', market: 'Romania', type: 'Toplist guide', lang: 'ro', pdfUrl: PORTFOLIO_URL },
  { title: 'Cazinouri cu depunere minimă', market: 'Romania', type: 'Toplist guide', lang: 'ro', pdfUrl: PORTFOLIO_URL },
  { title: 'Betano: 50 Rotiri Gratuite', market: 'Romania', type: 'Bonus guide', lang: 'ro', pdfUrl: PORTFOLIO_URL },
  { title: 'Metode de plată la cazino', market: 'Romania', type: 'Payment guide', lang: 'ro', pdfUrl: PORTFOLIO_URL },
  { title: 'Cazinouri online străine pentru jucătorii români', market: 'Romania', type: 'Toplist guide', lang: 'ro', pdfUrl: PORTFOLIO_URL },
]
