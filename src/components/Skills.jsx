import { motion } from 'framer-motion'
import { Code2, Server, Database, CloudCog, BrainCircuit } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { StaggerGroup, staggerItem } from './Reveal'
import { SKILLS } from '../data/content'

const ICONS = { Code2, Server, Database, CloudCog, BrainCircuit }

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeader
          title="Skills"
          description="The tools I reach for most, grouped by where they sit in a project."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SKILLS.map((group) => {
            const Icon = ICONS[group.icon]
            return (
              <motion.div
                key={group.category}
                variants={staggerItem}
                className="glow-border group relative overflow-hidden rounded-lg border border-border-soft bg-surface p-6 transition-colors hover:border-border"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft transition-transform duration-300 group-hover:scale-105">
                    <Icon size={17} className="text-accent" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[11px] text-text-faint">~/{group.slug}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-medium text-text">
                  {group.category}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
