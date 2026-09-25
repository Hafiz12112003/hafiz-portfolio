import Reveal from './Reveal'

export default function SectionHeader({ title, description }) {
  return (
    <Reveal className="max-w-xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-text-muted">{description}</p>
      )}
    </Reveal>
  )
}
