import React from 'react'
import { ArrowUp, Dumbbell } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          
          {/* Logo Column */}
          <div className="md:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Dumbbell className="w-4 h-4 text-[#ccff00]" />
              </div>
              <span className="text-lg font-black tracking-tighter text-white uppercase font-sans">
                ONYX<span className="text-[#ccff00]">.</span>
              </span>
            </a>

            <p className="text-xs leading-relaxed max-w-sm text-zinc-400 font-sans">
              No pressure. No hype. Train like you perform. Onyx provides state-of-the-art facilities, expert coaching, and a supportive community for all fitness levels.
            </p>
            
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="X" className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 font-sans">EXPLORE</h4>
            <ul className="space-y-3 text-xs font-sans">
              <li><a href="#about" className="hover:text-[#ccff00] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#ccff00] transition-colors">Services & Classes</a></li>
              <li><a href="#pricing" className="hover:text-[#ccff00] transition-colors">Membership Plans</a></li>
              <li><a href="#testimonials" className="hover:text-[#ccff00] transition-colors">Member Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#ccff00] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 font-sans">LOCATIONS</h4>
            <ul className="space-y-3 text-xs font-sans">
              <li><span className="text-zinc-300 font-semibold">West Wing Studio</span></li>
              <li className="text-zinc-500">San Francisco, CA</li>
              <li><span className="text-zinc-300 font-semibold">Downtown Arena</span></li>
              <li className="text-zinc-500">Tech District, SF</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4 font-sans">LEGAL</h4>
            <ul className="space-y-3 text-xs font-sans">
              <li><a href="#" className="hover:text-[#ccff00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ccff00] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#ccff00] transition-colors">Membership Terms</a></li>
              <li><a href="#" className="hover:text-[#ccff00] transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <div className="text-zinc-400 font-sans">
            © 2026 Onyx Gym. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#ccff00] font-bold uppercase tracking-wider transition-colors cursor-pointer font-sans"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  )
}
