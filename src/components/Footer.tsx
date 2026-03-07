import { Globe, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Success Stories', href: '#success' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: '#fff' }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="HighTech Logo" width={110} height={40} priority />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Information Technology Company
            </p>
            <p className="text-xs text-gray-500 mt-2">Your Arm in Digital Transformation</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: 'Syne', color: 'var(--gold)' }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: 'Syne', color: 'var(--gold)' }}>
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a href="https://hightech.sa" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Globe size={16} style={{ color: 'var(--gold)' }} />
                hightech.sa
              </a>
              <a href="mailto:sales@hightech.sa" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={16} style={{ color: 'var(--gold)' }} />
                sales@hightech.sa
              </a>
              <a href="tel:+966543712154" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={16} style={{ color: 'var(--gold)' }} />
                +966-543712154
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '13px' }}>𝕏</span>
                @HighTechSA
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} HighTech Information Technology Company. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Powered by HighTech IT
          </p>
        </div>
      </div>
    </footer>
  )
}
