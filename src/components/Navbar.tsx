import React, { useState } from 'react'
import { Menu, X, ArrowUpRight, Dumbbell, Mail, Phone, Clock } from 'lucide-react'

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner (Orange / Flame Accent) */}
      <div className="bg-[#ec4d09] text-white text-[11px] font-bold tracking-wider py-2 px-4 shadow-sm font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          {/* Left Contact Info */}
          <div className="flex items-center gap-3">
            <a href="mailto:CONTACT@ONYX-FIT.COM" className="hover:underline flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>CONTACT@ONYX-FIT.COM</span>
            </a>
            <span className="opacity-60">/</span>
            <a href="tel:8004973734" className="hover:underline flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>(800) 497-3734</span>
            </a>
          </div>

          {/* Right Open Hours Info */}
          <div className="hidden md:flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-extrabold uppercase">OPEN HOURS:</span>
            <span>MONDAY - FRIDAY [ 7 AM - 10 PM ]</span>
            <span className="opacity-60">/</span>
            <span>SATURDAY - SUNDAY [ 7 AM - 9 AM ]</span>
          </div>
        </div>
      </div>

      {/* Floating Main Navbar Container */}
      <div className="px-4 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#0e0e12]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
          
          {/* Logo: Dumbbell Icon + ONYX Text */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Dumbbell className="w-4 h-4 text-[#ccff00]" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase font-sans">
              ONYX<span className="text-[#ccff00]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 font-sans"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md font-sans"
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
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full font-sans"
              >
                <span>CONTACT US</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
