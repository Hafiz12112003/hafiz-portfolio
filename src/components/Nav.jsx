import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'border-b border-border-soft bg-canvas/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-tight text-text">
          Hafiz<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md border border-border px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent sm:inline-block"
        >
          Let's talk
        </a>

        {/* Mobile: single compact link */}
        <a
          href="#contact"
          className="rounded-md border border-border px-3 py-1.5 text-sm text-text sm:hidden"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  )
}
