import { useEffect, useRef, useState } from 'react'

/**
 * Plays a scripted sequence of terminal lines once.
 * Each entry: { command: string, output?: string }
 * Returns an array of "revealed" lines with partial text as typing progresses,
 * plus a `done` flag once the whole script has finished.
 */
export function useTypewriter(script, { charDelay = 28, lineGap = 420, startDelay = 400 } = {}) {
  const [revealed, setRevealed] = useState([])
  const [done, setDone] = useState(false)
  const reduceMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  useEffect(() => {
    let cancelled = false
    const timers = []

    if (reduceMotion.current) {
      setRevealed(script.map((l) => ({ command: l.command, commandTyped: l.command, output: l.output })))
      setDone(true)
      return () => {}
    }

    async function run() {
      await wait(startDelay, timers)
      for (let i = 0; i < script.length; i++) {
        if (cancelled) return
        const { command, output } = script[i]

        setRevealed((prev) => [...prev, { command, commandTyped: '', output: null }])

        for (let c = 1; c <= command.length; c++) {
          if (cancelled) return
          await wait(charDelay, timers)
          setRevealed((prev) => {
            const next = [...prev]
            next[i] = { ...next[i], commandTyped: command.slice(0, c) }
            return next
          })
        }

        if (output) {
          await wait(280, timers)
          if (cancelled) return
          setRevealed((prev) => {
            const next = [...prev]
            next[i] = { ...next[i], output }
            return next
          })
        }

        await wait(lineGap, timers)
      }
      if (!cancelled) setDone(true)
    }

    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { lines: revealed, done }
}

function wait(ms, timers) {
  return new Promise((resolve) => {
    const t = setTimeout(resolve, ms)
    timers.push(t)
  })
}
