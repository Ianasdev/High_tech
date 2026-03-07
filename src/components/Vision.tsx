'use client'

import { Eye, Target, Heart } from 'lucide-react'

const cards = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the leading digital transformation partner in the region, empowering businesses through innovative technology solutions that drive sustainable growth and societal progress.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide professional, responsive, and user-friendly IT services — from ERP implementation to cloud management — that precisely address the unique challenges of every client.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    text: 'Excellence, Commitment, Integrity, Innovation, and Passion. These pillars guide every project we undertake and every relationship we build with our clients.',
  },
]

export default function Vision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            What Drives Us
          </p>
          <h2 className="section-title">Vision, Mission & Values</h2>
          <div className="gold-divider mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            // Determine animation based on position
            const getAnimation = () => {
              if (i === 0) return 'fade-right' // Left card
              if (i === 2) return 'fade-left'  // Right card
              return 'fade-up' // Middle card
            }
            
            return (
              <div
                key={card.title}
                className="card-hover rounded-2xl p-8 text-center"
                data-aos={getAnimation()}
                data-aos-delay={i * 150}
                data-aos-duration="800"
                style={{
                  border: '1px solid #F3F4F6',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(245,166,35,0.15), rgba(245,166,35,0.05))' }}
                >
                  <card.icon size={28} style={{ color: 'var(--gold)' }} />
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: 'sans-serif', color: '#1A1A1A' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {card.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
