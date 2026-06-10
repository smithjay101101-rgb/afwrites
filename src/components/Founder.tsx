import { ImagePlus } from 'lucide-react'
import { founderPhoto } from '../content'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from './primitives'

const STATS = ['850+ pieces', '20+ markets', '10+ countries', 'EN / RO native', '5+ yrs']

const SKILLS = [
  'On-page SEO',
  'Casino reviews',
  'Removing AI patterns',
  'Keyword research',
  'Facebook Ads',
  'CPA deals',
  'WordPress',
  'Editing and proofing',
]

export default function Founder() {
  const ref = useReveal<HTMLDivElement>(50)

  return (
    <section id="founder" className="px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8">
      <div
        ref={ref}
        className="mx-auto grid max-w-content items-start gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14"
      >
        {/* Image / placeholder */}
        <div className="reveal">
          {founderPhoto ? (
            <div className="group relative">
              {/* Offset gold hairline frame for an art-directed feel */}
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-2xl border border-accent/20 transition-colors duration-500 group-hover:border-accent/40"
              />
              <img
                src={founderPhoto}
                alt="Adrian Florea, founder and lead writer at AFWrites"
                className="aspect-[4/5] w-full rounded-2xl border border-accent/40 object-cover grayscale-[35%] transition-[filter] duration-700 [transition-timing-function:var(--ease-out)] group-hover:grayscale-0"
              />
            </div>
          ) : (
            <div
              role="img"
              aria-label="Photo of Adrian Florea, founder of AFWrites, coming soon"
              className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-accent/40 bg-surface text-muted"
            >
              <ImagePlus size={28} className="text-accent/70" aria-hidden />
              <span className="text-sm font-medium">Add photo</span>
            </div>
          )}
        </div>

        {/* Text */}
        <div>
          <Eyebrow>Meet the founder</Eyebrow>
          <h2 className="reveal font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold text-text">
            Adrian <em className="italic text-accent">Florea</em>
          </h2>
          <p className="reveal mt-2 text-accent">
            Founder and lead writer, AFWrites
          </p>

          <div className="reveal mt-6 space-y-4 text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed text-muted">
            <p>
              I've written more than 850 casino reviews, slot pages and deposit
              guides across Ireland, the USA, Canada and Romania. Over 500 came
              in three years at one agency, where I ended up leading a team of
              three and cleaning the AI tells out of everyone else's drafts.
            </p>
            <p>
              I'm not only a writer. I've run Facebook Ads across 10 markets as a
              media buyer, building prelanders and PWAs, negotiating CPA deals
              and testing creative every day. I know both ends of the funnel:
              what ranks, and what makes a player click.
            </p>
            <p>
              I also play at these casinos myself, so I know how players think
              and what operators are really after. AFWrites is the studio I'm
              building around that. Small, focused, gambling only.
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
