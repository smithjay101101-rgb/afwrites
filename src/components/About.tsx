import { ImagePlus } from 'lucide-react'
import { profilePhoto } from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from './primitives'

const STATS = [
  '850+ pieces',
  '20+ markets',
  '10+ countries',
  'EN / RO native',
  '5+ yrs',
]

const SKILLS = [
  'On-page SEO',
  'Casino reviews',
  'Removing AI patterns',
  'Keyword research',
  'Facebook Ads Copy',
  'WordPress',
  'Editing and proofing',
  'Market research',
  'Canva',
  'Affiliate marketing',
]

export default function About() {
  const ref = useReveal<HTMLDivElement>(50)

  return (
    <section id="about" className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8">
      <div
        ref={ref}
        className="mx-auto grid max-w-content items-start gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14"
      >
        {/* Photo / placeholder */}
        <div className="reveal">
          {profilePhoto ? (
            <div className="group relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-2xl border border-accent/20 transition-colors duration-500 group-hover:border-accent/40"
              />
              <img
                src={profilePhoto}
                alt="Adrian Florea, freelance iGaming writer"
                className="aspect-[4/5] w-full rounded-2xl border border-accent/40 object-cover grayscale-[35%] transition-[filter] duration-700 [transition-timing-function:var(--ease-out)] group-hover:grayscale-0"
              />
            </div>
          ) : (
            <div
              role="img"
              aria-label="Photo of Adrian Florea coming soon"
              className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-accent/40 bg-surface text-muted"
            >
              <ImagePlus size={28} className="text-accent/70" aria-hidden />
              <span className="text-sm font-medium">Add photo</span>
            </div>
          )}
        </div>

        {/* Text */}
        <div>
          <Eyebrow>About me</Eyebrow>
          <h2 className="reveal font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold text-text">
            Adrian Florea
          </h2>
          <p className="reveal mt-2 text-accent">
            Freelance iGaming writer · EN / RO
          </p>

          <div className="reveal mt-6 space-y-4 text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed text-muted">
            <p>
              I've written more than 850 casino reviews, slot pages and deposit
              guides across the UK, Ireland, Canada, the US and Romania, ranking
              top three in tough GEOs like Ireland and Canada. I also managed a
              team of three writers, owning the quality of everything that went
              out: cutting AI patterns and making sure each piece read like a
              person actually wrote it.
            </p>
            <p>
              At one point I wanted to see the other side, so I moved into media
              buying for a while. For close to a year I ran Facebook and Meta ads
              for casino operators in 10+ markets, built prelanders and PWAs,
              negotiated CPA deals and tested creative every day. That taught me
              what makes a player click. Most writers only know what fills a
              brief.
            </p>
            <p>
              Before I wrote a word about this industry, I was all in on it as a
              player and a bettor, putting my own money down. Deposits,
              withdrawals, bonus terms, KYC, VIP perks: I've been through all of
              it firsthand. So when I write, none of it is a guess. I've sat on
              both sides of the table, the player's and the operator's, and I
              write from the side that wins.
            </p>
          </div>

          {/* Stat strip */}
          <ul className="reveal mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-line py-4">
            {STATS.map((stat, i) => (
              <li key={stat} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-muted/40" aria-hidden>
                    ·
                  </span>
                )}
                <span className="tabular text-sm font-semibold text-text">
                  {stat}
                </span>
              </li>
            ))}
          </ul>

          {/* Skill chips */}
          <ul className="reveal mt-6 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted transition-colors duration-300 [transition-timing-function:var(--ease-out)] hover:border-accent/40 hover:text-text"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
