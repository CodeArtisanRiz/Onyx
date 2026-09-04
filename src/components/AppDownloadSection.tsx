import React from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'

export const AppDownloadSection: React.FC = () => {
  const points = [
    'Quick keyless door access with encrypted Bluetooth pass',
    'Real-time class booking and instant waitlist updates',
    'Integrated macro calculator and personalized workout logger',
  ]

  return (
    <section className="py-24 bg-[#0c0c10] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121604] via-zinc-900 to-zinc-900 border border-[#ccff00]/30 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          
          {/* Content Left */}
          <div>
            <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-sans">
              ALWAYS CONNECTED
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-4 mb-4 font-sans">
              DOWNLOAD OUR <br />
              <span className="text-stroke-lime">ONYX APP</span>
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-sans">
              Stay connected to your fitness journey — anytime, anywhere. Our mobile app brings convenience, clarity, and workout control right to your phone.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
                  <div className="w-5 h-5 rounded-full bg-[#ccff00] text-black flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img src="/images/img_52_SLjf225AgHSQsgzAQ2Ek.png" alt="Get it on Google Play" className="h-12 w-auto" />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img src="/images/img_53_weRU4qFHO8lBTLgJx4W5.png" alt="Download on the App Store" className="h-12 w-auto" />
              </a>
            </div>
          </div>

          {/* App Image Right */}
          <div className="relative flex justify-center">
            <img
              src="/images/img_54_mOHvyhus6UzJ9GvicM8b.png"
              alt="Onyx Mobile App Interface"
              className="max-h-[420px] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
            />
          </div>

        </motion.div>

      </div>
    </section>
  )
}
