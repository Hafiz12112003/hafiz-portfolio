import GithubMark from './icons/GithubMark'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { PROFILE } from '../data/content'

const USERNAME = 'Hafiz12112003'

export default function GithubStats() {
  return (
    <section id="github" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeader
          title="GitHub activity"
          description="Live stats pulled from my GitHub profile."
        />

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-5">
          <div className="overflow-hidden rounded-lg border border-border-soft bg-surface p-1 lg:col-span-3">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&bg_color=12151B&title_color=C99552&icon_color=C99552&text_color=8A93A3&ring_color=C99552`}
              alt={`${PROFILE.name}'s GitHub stats`}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-border-soft bg-surface p-1 lg:col-span-2">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&hide_border=true&bg_color=12151B&title_color=C99552&text_color=8A93A3&langs_count=6`}
              alt="Most used languages"
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-6">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
          >
            <GithubMark size={16} />
            {PROFILE.githubHandle}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
