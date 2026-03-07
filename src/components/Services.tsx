'use client'

import { LayoutGrid, Globe, Share2, Code2, Cloud, Puzzle } from 'lucide-react'

const services = [
  {
    icon: LayoutGrid,
    title: 'Odoo ERP Implementation & Support',
    description: 'Business process analysis and system customization tailored to your needs. Full lifecycle ERP support.',
    tag: 'ERP',
  },
  {
    icon: Globe,
    title: 'Website & E-Commerce Development',
    description: 'Professional, responsive, and user-friendly website and online store designs that convert visitors.',
    tag: 'Web',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Content creation, ad campaigns, community management, and performance analytics.',
    tag: 'Marketing',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Business process analysis and custom software development tailored to your unique requirements.',
    tag: 'Dev',
  },
  {
    icon: Cloud,
    title: 'Cloud Management',
    description: 'Deploy and manage systems securely on trusted cloud platforms with 24/7 monitoring.',
    tag: 'Cloud',
  },
  {
    icon: Puzzle,
    title: 'API Integrations',
    description: 'Connect different systems to enhance operational efficiency and streamline your workflows.',
    tag: 'Integration',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            What We Offer
          </p>
          <h2 className="section-title">Our Services</h2>
          <div className="gold-divider mt-3 mb-4" />
          <p className="section-subtitle mx-auto text-center">
            We deliver comprehensive digital solutions across ERP, web, cloud, and marketing to help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            // Determine animation based on position
            const getAnimation = () => {
              if (i === 0 || i === 3 || i === 4) return 'fade-right' // Left side cards
              if (i === 2 || i === 5) return 'fade-left'  // Right side cards
              return 'fade-up' // Middle cards
            }
            
            return (
              <div
                key={service.title}
                className="service-card"
                data-aos={getAnimation()}
                data-aos-delay={i * 100}
                data-aos-duration="800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="service-icon">
                    <service.icon size={22} style={{ color: 'var(--gold)' }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(245,166,35,0.1)', color: 'var(--gold)' }}
                  >
                    {service.tag}
                  </span>
                </div>
                <h3
                  className="font-bold text-base mb-3"
                  style={{ fontFamily: 'sans-serif', color: '#1A1A1A', lineHeight: 1.4 }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
