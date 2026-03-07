'use client'

import { ArrowRight, TrendingUp } from 'lucide-react'

const stories = [
  {
    tag: 'Odoo ERP',
    title: 'ERP Implementation for Major Trading Company',
    description: 'Full Odoo ERP implementation including inventory, accounting, and HR modules — reducing manual processes by 70%.',
    color: '#F5A623',
  },
  {
    tag: 'E-Commerce',
    title: 'Full-Featured E-Commerce Platform for Local Brand',
    description: 'Developed a high-performance online store with integrated payment gateways, resulting in 3x online revenue growth.',
    color: '#714B67',
  },
  {
    tag: 'Client Portal',
    title: 'Client Service Portal in the Services Sector',
    description: 'Built a comprehensive client service portal that streamlined support operations and improved customer satisfaction to 98%.',
    color: '#10B981',
  },
]

export default function SuccessStories() {
  return (
    <section id="success" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Proven Results
          </p>
          <h2 className="section-title">Success Stories</h2>
          <div className="gold-divider mt-3 mb-4" />
          <p className="section-subtitle mx-auto text-center">
            We've helped numerous clients across various industries achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => {
            // Determine animation based on position
            const getAnimation = () => {
              if (i === 0) return 'fade-right' // Left card
              if (i === 2) return 'fade-left'  // Right card
              return 'fade-up' // Middle card
            }
            
            return (
              <div
                key={story.title}
                className="rounded-2xl overflow-hidden card-hover"
                data-aos={getAnimation()}
                data-aos-delay={i * 150}
                data-aos-duration="800"
                style={{
                  border: '1px solid #F3F4F6',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                {/* Top bar */}
                <div className="h-1.5" style={{ background: story.color }} />

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${story.color}18` }}
                    >
                      <TrendingUp size={16} style={{ color: story.color }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: `${story.color}15`, color: story.color }}
                    >
                      {story.tag}
                    </span>
                  </div>

                  <h3
                    className="font-bold text-base mb-3 leading-snug"
                    style={{ fontFamily: 'sans-serif', color: '#1A1A1A' }}
                  >
                    {story.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                    {story.description}
                  </p>

                  <button
                    className="flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2"
                    style={{ color: story.color, fontFamily: 'sans-serif' }}
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
