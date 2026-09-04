import React, { useState } from 'react'
import { Menu, X, ArrowUpRight, Dumbbell } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#0e0e12]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        {/* Text Logo with Lucide Icon */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Dumbbell className="w-4 h-4 text-[#ccff00]" />
          </div>
          <span className="text-lg font-black tracking-tighter text-white uppercase font-sans">
            ONYX<span className="text-[#ccff00]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-zinc-300 hover:text-[#ccff00] transition-colors font-sans"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 h-auto rounded-full transition-all duration-200 hover:scale-105 border-0 inline-flex items-center gap-2'
            )}
          >
            <span>CONTACT US</span>
            <div className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 mx-2 bg-[#0e0e12] border border-white/10 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold tracking-wider text-zinc-200 hover:text-[#ccff00] transition-colors py-2 border-b border-white/5 font-sans"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'mt-2 w-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider py-3 h-auto rounded-full border-0 inline-flex items-center justify-center gap-2'
              )}
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
