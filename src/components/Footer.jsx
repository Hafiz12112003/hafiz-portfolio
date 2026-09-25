import { PROFILE } from '../data/content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-soft py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between sm:px-8">
        <a href="#top" className="font-display text-sm font-semibold text-text">
          {PROFILE.name}
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-6">
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

        <p className="text-xs text-text-faint">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  )
}
