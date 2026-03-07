'use client'

import { Briefcase, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: '50+', color: '#F5A623' },
  { icon: Users, label: 'Happy Clients', value: '40+', color: '#F5A623' },
  { icon: Award, label: 'Years of Experience', value: '5+', color: '#F5A623' },
  { icon: TrendingUp, label: 'Customer Satisfaction', value: '98%', color: '#F5A623' },
]

function StatCard({ icon: Icon, label, value, index, offset = 0 }: typeof stats[0] & { index: number; offset?: number }) {
  // Determine animation based on position
  const getAnimation = () => {
    if (index === 0 || index === 1) return 'fade-right' // Left side cards
    return 'fade-left' // Right side cards
  }
  
  return (
    <div
      className="stat-card card-hover flex flex-col items-center text-center"
      data-aos={getAnimation()}
      data-aos-delay={index * 100}
      data-aos-duration="800"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="stat-icon mb-4">
        <Icon size={32} style={{ color: '#F5A623' }} />
      </div>

      <p className="text-lg font-semibold gold-text mb-2">{label}</p>

      <div className="stat-number mb-1">{value}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => {
            // first and fourth raised, middle two level (equal)
            const offsets = [-22, 0, 0, -22]
            return <StatCard key={stat.label} {...stat} index={i} offset={offsets[i] ?? 0} />
          })}
        </div>
      </div>
    </section>
  )
}
