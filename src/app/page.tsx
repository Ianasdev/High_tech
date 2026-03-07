import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Vision from '@/components/Vision'
import Services from '@/components/Services'
import SuccessStories from '@/components/SuccessStories'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Vision />
      <Services />
      <SuccessStories />
      <Partners />
      <Footer />
    </main>
  )
}
