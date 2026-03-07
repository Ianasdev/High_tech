'use client'

import Image from 'next/image'

// Replace these with actual partner logo paths from /public/images/partners/
const partners = [
  { name: 'MERVE', src: '/images/merve.png' },
  { name: 'Al-Shatnnan', src: '/images/Al-Shatnnan.png' },
  { name: 'Al-Dawli', src: '/images/Al-Dawli.png' },
  { name: 'ALDEKHEL', src: '/images/ALDEKHEL.png' },
]

// Placeholder while images are not available
function PartnerPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="partner-logo flex items-center justify-center rounded-xl px-6 py-4 font-bold text-base"
      style={{
        background: '#F9FAFB',
        border: '1px solid #E5E7EB',
        minWidth: '120px',
        height: '64px',
        fontFamily: 'Syne',
        color: '#374151',
        letterSpacing: '-0.5px',
      }}
    >
      {name}
    </div>
  )
}

export default function Partners() {
  return (
    <section className="py-20" style={{ background: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-semibold tracking-widest uppercase mb-10" style={{ color: 'var(--muted)' }}>
          Trusted by Leading Companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((p) => (
            <Image key={p.name} src={p.src} alt={p.name} width={120} height={48} className="partner-logo" />
          ))}
        </div>
      </div>
    </section>
  )
}
