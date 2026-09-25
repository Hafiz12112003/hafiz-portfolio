import { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import GithubMark from './icons/GithubMark'

export default function ProjectCard({ project }) {
  const { name, tagline, description, tech, links, stat, flagship } = project
  const cardRef = useRef(null)

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const glow = useMotionTemplate`radial-gradient(280px circle at ${glowX}% ${glowY}%, var(--color-accent-soft), transparent 70%)`

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 6)
    rotateX.set((0.5 - py) * 6)
    glowX.set(px * 100)
    glowY.set(py * 100)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`glow-border group relative flex h-full flex-col overflow-hidden rounded-xl border p-7 sm:p-8 ${
        flagship
          ? 'border-accent-dim bg-surface'
          : 'border-border-soft bg-surface hover:border-border'
      }`}
    >
      {/* Cursor-tracked sheen */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />

      <div className="relative flex h-full flex-col">
        {flagship && (
          <span className="mb-4 inline-flex w-fit items-center rounded-full border border-accent-dim bg-accent-soft px-3 py-1 font-mono text-[11px] text-accent">
            Flagship project
          </span>
        )}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-text">{name}</h3>
            <p className="mt-1 text-sm text-text-muted">{tagline}</p>
          </div>
          {stat && (
            <div className="shrink-0 text-right">
              <div className="font-display text-lg font-semibold text-accent">{stat.value}</div>
              <div className="font-mono text-[11px] text-text-faint">{stat.label}</div>
            </div>
          )}
        </div>

        <p className="mt-5 flex-1 text-[14px] leading-relaxed text-text-muted">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border-soft px-2.5 py-1 font-mono text-[11px] text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-5 border-t border-border-soft pt-5">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text"
            >
              <GithubMark size={15} />
              Code
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text"
            >
              <ExternalLink size={15} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
