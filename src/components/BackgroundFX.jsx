export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="dot-grid absolute inset-x-0 top-0 h-[900px]" />
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(closest-side, var(--color-accent-soft), transparent 70%)',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute top-[140vh] right-[-10%] h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(closest-side, var(--color-accent-soft), transparent 70%)',
          opacity: 0.35,
        }}
      />
    </div>
  )
}
