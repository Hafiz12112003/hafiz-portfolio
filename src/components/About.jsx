import Reveal from './Reveal'
import { PROFILE } from '../data/content'

export default function About() {
  return (
    <section id="about" className="bg-canvas-raised py-28 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            About
          </h2>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.05}>
            <p className="text-[15px] leading-relaxed text-text-muted sm:text-base">
              I'm a {PROFILE.education.year} B.Tech Information Technology graduate from{' '}
              <span className="text-text">{PROFILE.education.school}</span>, and I build
              full-stack products end to end — from a Flask or Python API, through the
              database, to a React frontend someone can actually click through.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[15px] leading-relaxed text-text-muted sm:text-base">
              My default stack is React.js on the frontend with Python/Flask on the
              backend, MongoDB or MySQL for storage, and AWS for hosting it all — but the
              projects I'm proudest of go a step further, wiring in applied machine
              learning: an ensemble of CNNs for medical image classification, and a
              retrieval-augmented generation pipeline on top of an open-weight LLM.
            </p>
          </Reveal>

          <Reveal delay={0.19}>
            <p className="text-[15px] leading-relaxed text-text-muted sm:text-base">
              I'm currently looking for my first full-time role — as a{' '}
              <span className="text-text">Full Stack Developer</span>,{' '}
              <span className="text-text">Junior Web Developer</span>, or{' '}
              <span className="text-text">AI/ML Engineer</span> — somewhere I can keep
              shipping complete features rather than isolated pieces.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
