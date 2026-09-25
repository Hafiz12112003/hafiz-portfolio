import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { JOURNEY } from '../data/content'

export default function Journey() {
  return (
    <section id="journey" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeader
          title="Journey"
          description="How the projects above came together, roughly in order."
        />

        <div className="relative mt-16 max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border-soft" aria-hidden />

          <ol className="space-y-12">
            {JOURNEY.map((step, i) => (
              <Reveal as="li" key={i} delay={i * 0.04} className="relative pl-9">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-canvas" />
                <span className="font-mono text-xs text-accent">{step.period}</span>
                <h3 className="mt-1.5 font-display text-lg font-medium text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
