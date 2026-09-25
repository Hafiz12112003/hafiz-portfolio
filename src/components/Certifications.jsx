import { motion } from 'framer-motion'
import { CloudCog, Terminal, Layers, FileSpreadsheet } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { StaggerGroup, staggerItem } from './Reveal'
import { CERTIFICATIONS } from '../data/content'

const ICONS = { CloudCog, Terminal, Layers, FileSpreadsheet }

export default function Certifications() {
  return (
    <section id="certifications" className="bg-canvas-raised py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeader title="Certifications" />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => {
            const Icon = ICONS[cert.icon]
            return (
              <motion.div
                key={cert.name}
                variants={staggerItem}
                className="glow-border relative overflow-hidden rounded-lg border border-border-soft bg-surface p-6 transition-colors hover:border-border"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft">
                  <Icon size={18} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-[15px] font-medium leading-snug text-text">
                  {cert.name}
                </h3>
                <p className="mt-1.5 text-sm text-text-muted">{cert.issuer}</p>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
