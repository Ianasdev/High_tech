/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ← هذا السطر ناقص - ضروري للـ static export
  trailingSlash: true,       // ← هذا ناقص - ضروري لـ GitHub Pages
  images: {
    unoptimized: true,       // ← غيّر هذا - GitHub Pages لا يدعم image optimization
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
