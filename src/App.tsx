import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { LogoMarquee } from '@/components/LogoMarquee'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { TrainersSection } from '@/components/TrainersSection'
import { WhyChooseSection } from '@/components/WhyChooseSection'

function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-[#ccff00] selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <AboutSection />
        <ServicesSection />
        <TrainersSection />
        <WhyChooseSection />
      </main>
    </div>
  )
}

export default App
