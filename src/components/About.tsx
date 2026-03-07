'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24" style={{ background: '#FAFAFA' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              About Us
            </p>
            <h2 className="section-title mb-6">
              Specialized in Advanced IT Solutions
            </h2>
            <div className="gold-divider gold-divider-center mb-8" />
            <p className="section-subtitle max-w-3xl mx-auto">
              HighTech is a Saudi-based company specialized in providing advanced IT solutions and digital transformation services. Our team of local and international professionals is passionate about delivering tailored solutions that meet each client's specific needs.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="#contact" className="btn-gold inline-flex items-center gap-2">
              Get in Touch
              <CheckCircle2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
