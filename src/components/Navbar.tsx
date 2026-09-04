import React, { useState } from 'react'
import { Menu, X, ArrowUpRight, Dumbbell } from 'lucide-react'

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
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Dumbbell className="w-5 h-5 text-[#ccff00]" />
          <span className="text-lg font-black tracking-tighter text-white uppercase font-sans">
            ONYX
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-zinc-300 hover:text-[#ccff00] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
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
          className="lg:hidden p-2 text-zinc-300 hover:text-white"
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
                className="text-sm font-semibold tracking-wider text-zinc-200 hover:text-[#ccff00] transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
