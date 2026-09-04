import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-[#ccff00] selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
