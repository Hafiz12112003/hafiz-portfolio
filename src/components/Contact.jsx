import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import GithubMark from './icons/GithubMark'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { PROFILE } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    )
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeader
          title="Get in touch"
          description="Open to full-time, entry-level roles. The fastest way to reach me is email."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 border-b border-border-soft bg-surface-2 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-terminal-red/70" />
                <span className="h-3 w-3 rounded-full bg-accent/60" />
                <span className="h-3 w-3 rounded-full bg-terminal-green/60" />
                <span className="ml-3 font-mono text-xs text-text-faint">contact.txt</span>
              </div>
              <div className="space-y-5 px-6 py-7 font-mono text-sm">
                <div>
                  <span className="text-terminal-green">➜</span>{' '}
                  <span className="text-text-faint">cat contact.txt</span>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 text-text-muted transition-colors hover:text-accent"
                >
                  <Mail size={16} className="text-accent" />
                  {PROFILE.email}
                </a>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-text-muted transition-colors hover:text-accent"
                >
                  <Phone size={16} className="text-accent" />
                  {PROFILE.phone}
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-text-muted transition-colors hover:text-accent"
                >
                  <GithubMark size={16} className="text-accent" />
                  {PROFILE.githubHandle}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border-soft bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border-soft bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-border-soft bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                  placeholder="What are you looking to build?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-canvas"
              >
                Send message
                <Send size={15} />
              </motion.button>
              <p className="text-xs text-text-faint">
                Opens your email client with this message pre-filled — nothing is stored on a server.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
