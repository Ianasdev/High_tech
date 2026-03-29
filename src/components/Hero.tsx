import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fffbf2 60%, #fff8e8 100%)' }}
    >
      {/* Decorative background shapes */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(245,166,35,0.1)', color: 'var(--gold)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
              Odoo Ready Partner
            </div>

            <h1 className="section-title mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.15 }}>
              <span style={{ color: 'var(--gold)' }}>HighTech</span>{' '}
      
            </h1>

            <p className="section-subtitle mb-8" style={{ fontSize: '18px' }}>
              Your Arm in Digital Transformation.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold" style={{ fontSize: '15px' }}>
                Contact Us
              </a>
              <a href="#services" className="btn-outline" style={{ fontSize: '15px' }}>
                Our Services
              </a>
            </div>
          </div>

          {/* Right: Odoo badge / hero image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl p-8 flex flex-col items-center gap-6" style={{ background: 'transparent', boxShadow: 'none', border: 'none', minWidth: '300px' }}>
              
             {/* <div className="text-center relative z-10">
                <div className="text-5xl font-black mb-1" style={{ fontFamily: 'sans-serif', letterSpacing: '-2px', fontWeight: '900' }}>
                  <span style={{ color: '#2D2540' }}>o</span>
                  <span style={{ color: '#F5A623' }}>doo</span>
                </div>
                <div className="text-sm font-semibold px-4 py-1 rounded-full inline-block" style={{ background: '#2D2540', color: '#fff' }}>
                  Ready Partner
                </div>  */}

              <div className="w-full h-px" style={{ background: 'var(--border)' }} />

             {/*  <div className="text-center relative z-10">
                <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  Certified Odoo Implementation
                </p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  & Support Partner
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0 60L1440 60L1440 20C1200 50 900 10 720 30C540 50 240 10 0 40L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
