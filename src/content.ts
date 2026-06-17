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
export const LINKEDIN_URL =
  'https://www.linkedin.com/in/adrian-florea-667811223'

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
  /** Full hosted URL to this piece's own PDF. */
  pdf: string
}

// PDFs are self-hosted in /public/pdfs and served under the site base path.
const pdfUrl = (file: string) => `${import.meta.env.BASE_URL}pdfs/${file}`

/**
 * Every portfolio piece. The Portfolio section filters this list by `lang`
 * for the English / Romanian tabs. Each card opens its own PDF.
 */
const RAW_PIECES: PortfolioPiece[] = [
  // English
  { title: 'Gangsta Casino Review', market: 'Canada', type: 'Casino review', lang: 'en', pdf: 'gangsta-casino-review.pdf' },
  { title: 'SpinMills Casino Review', market: 'Canada', type: 'Casino review', lang: 'en', pdf: 'spinmills-casino-review.pdf' },
  { title: 'CosmoBet Casino Review', market: 'UK & Ireland', type: 'Casino review', lang: 'en', pdf: 'cosmobet-casino-review.pdf' },
  { title: 'VegaDream Casino Review', market: 'UK & Ireland', type: 'Casino review', lang: 'en', pdf: 'vegadream-casino-review.pdf' },
  { title: 'Moonspin Casino Mini Review', market: 'US', type: 'Casino review', lang: 'en', pdf: 'moonspin-casino-review.pdf' },
  { title: 'Mental Slot Review', market: 'Global', type: 'Slot review', lang: 'en', pdf: 'mental-slot-review.pdf' },
  { title: 'Legend of Athena Slot Review', market: 'Global', type: 'Slot review', lang: 'en', pdf: 'legend-of-athena-slot-review.pdf' },
  { title: 'Velvet Spin No-Deposit Bonus', market: 'US', type: 'Bonus guide', lang: 'en', pdf: 'velvet-spin-bonus.pdf' },
  { title: 'A Big Candy No-Deposit Bonus', market: 'US', type: 'Bonus guide', lang: 'en', pdf: 'a-big-candy-bonus.pdf' },
  // Romanian
  { title: 'Lista cazinouri online România 2026', market: 'Romania', type: 'Toplist guide', lang: 'ro', pdf: 'lista-cazinouri-online-romania.pdf' },
  { title: 'Cazinouri cu depunere minimă', market: 'Romania', type: 'Toplist guide', lang: 'ro', pdf: 'cazinouri-depunere-minima.pdf' },
  { title: 'Betano: 50 Rotiri Gratuite', market: 'Romania', type: 'Bonus guide', lang: 'ro', pdf: 'betano-50-rotiri-gratuite.pdf' },
  { title: 'Metode de plată la cazino', market: 'Romania', type: 'Payment guide', lang: 'ro', pdf: 'metode-de-plata.pdf' },
  { title: 'Cazinouri online străine pentru jucătorii români', market: 'Romania', type: 'Toplist guide', lang: 'ro', pdf: 'cazinouri-straine-jucatori-romani.pdf' },
]

export const PORTFOLIO_PIECES: PortfolioPiece[] = RAW_PIECES.map((p) => ({
  ...p,
  pdf: pdfUrl(p.pdf),
}))
