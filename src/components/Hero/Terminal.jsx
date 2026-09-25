import { motion } from 'framer-motion'
import { useTypewriter } from '../../hooks/useTypewriter'

const SCRIPT = [
  { command: 'whoami', output: 'Muhammad Hafiz — Full Stack Developer' },
  { command: 'cat stack.txt', output: 'React, Flask, MongoDB, MySQL, AWS' },
  { command: 'cat status.txt', output: 'Open to full-time, entry-level roles' },
]

export default function Terminal() {
  const { lines, done } = useTypewriter(SCRIPT)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xl"
    >
      {/* Ambient glow behind the terminal — the one bold moment on the page */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[32px] blur-[70px] opacity-60"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, var(--color-accent-soft), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -inset-px rounded-xl opacity-70"
        style={{
          background:
            'linear-gradient(135deg, var(--color-accent) 0%, transparent 35%, transparent 65%, var(--color-accent-dim) 100%)',
          filter: 'blur(1px)',
        }}
      />

      <div className="relative rounded-xl border border-border bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border-soft bg-surface-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-terminal-red/70" />
          <span className="h-3 w-3 rounded-full bg-accent/60" />
          <span className="h-3 w-3 rounded-full bg-terminal-green/60" />
          <span className="ml-3 font-mono text-xs text-text-faint">hafiz@portfolio — zsh</span>
        </div>

        {/* Body */}
        <div className="relative min-h-[220px] px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
          {/* Subtle scanline sheen, sweeps once on load */}
          <motion.div
            aria-hidden
            initial={{ y: '-100%' }}
            animate={{ y: '220%' }}
            transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-[0.06]"
            style={{
              background: 'linear-gradient(180deg, transparent, var(--color-text), transparent)',
            }}
          />

          {lines.map((line, i) => (
            <div key={i} className="mb-3 last:mb-0">
              <div className="flex gap-2">
                <span className="shrink-0 text-terminal-green">➜</span>
                <span className="shrink-0 text-accent">~</span>
                <span className="text-text">
                  {line.commandTyped}
                  {i === lines.length - 1 && !done && (
                    <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-pulse bg-text/80 align-middle" />
                  )}
                </span>
              </div>
              {line.output && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="pl-6 text-text-muted"
                >
                  {line.output}
                </motion.div>
              )}
            </div>
          ))}

          {done && (
            <div className="flex gap-2">
              <span className="shrink-0 text-terminal-green">➜</span>
              <span className="shrink-0 text-accent">~</span>
              <span className="inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-[blink_1s_steps(1)_infinite] bg-text/80" />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  )
}
