import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Signals from '@/components/Signals'
import IndicatorsSection from '@/components/IndicatorsSection'
import FounderSection from '@/components/FounderSection'
import MarketShowcase from '@/components/MarketShowcase'
import PlatformSection from '@/components/PlatformSection'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signals />
      <IndicatorsSection />
      <FounderSection />
      <MarketShowcase />
      <PlatformSection />
      <Reviews />
      <Footer />
    </main>
  )
}
