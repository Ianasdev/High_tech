export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className="rounded-3xl px-10 py-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
          }}
        >
          {/* Decorative orb */}
          <div
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Let's Work Together
            </p>
            <h2 className="section-title text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              We'd Love to Be Part of Your Next{' '}
              <span style={{ color: 'var(--gold)' }}>Success Story</span>
            </h2>
            <p className="mb-8 text-gray-300 text-base max-w-xl mx-auto">
              Ready to transform your business with cutting-edge IT solutions? Reach out to us today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:sales@hightech.sa"
                className="btn-gold"
                style={{ fontSize: '15px' }}
              >
                Contact Us
              </a>
              <a
                href="https://hightech.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: '15px', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
