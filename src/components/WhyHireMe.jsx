import SectionHeader from './SectionHeader'
import { StaggerGroup, staggerItem } from './Reveal'
import { motion } from 'framer-motion'
import { STRENGTHS } from '../data/content'

export default function WhyHireMe() {
  return (
    <section id="strengths" className="bg-canvas-raised py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeader
          title="What I bring"
          description="No client testimonials yet — this is a fresher portfolio — so here's what the projects above actually demonstrate."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {STRENGTHS.map((s) => (
            <motion.div key={s.title} variants={staggerItem} className="flex gap-5">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <div>
                <h3 className="font-display text-base font-medium text-text">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
