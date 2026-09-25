import { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { ArrowUpRight, FileDown, ChevronDown } from 'lucide-react'
import Terminal from './Terminal'
import { PROFILE } from '../../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const mx = useMotionValue(-400)
  const my = useMotionValue(-400)
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, var(--color-accent-soft), transparent 70%)`

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect()
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Cursor-reactive spotlight — desktop only, purely decorative */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-70 lg:block"
        style={{ background: spotlight }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-sm text-accent">
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 font-display text-[3.4rem] font-semibold leading-[0.98] tracking-tight text-text text-balance sm:text-7xl"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 font-display text-xl text-text-muted sm:text-2xl">
            {PROFILE.role}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
            {PROFILE.rolesShort.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border-soft px-3 py-1 font-mono text-[11px] text-text-muted"
              >
                {r}
              </span>
            ))}
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-md text-[15px] leading-relaxed text-text-muted">
            {PROFILE.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-canvas shadow-[0_8px_30px_-10px_var(--color-accent)] transition-transform hover:-translate-y-0.5"
            >
              View work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              Contact me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-1 py-3 text-sm text-text-muted transition-colors hover:text-text"
            >
              <FileDown size={16} />
              Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-text-faint transition-colors hover:text-text-muted sm:flex"
      >
        <span className="font-mono text-[10px] tracking-wide">scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
