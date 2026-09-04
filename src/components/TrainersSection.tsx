import React from 'react'
import { motion } from 'motion/react'

export const TrainersSection: React.FC = () => {
  const trainers = [
    {
      name: 'ALEX RIVERS',
      role: 'Head Strength Coach',
      spec: 'Functional Strength & Olympic Weightlifting',
      image: '/images/img_29_4GovxnK3IxLhydt5ScI9.png',
      experience: '8+ Years Exp',
    },
    {
      name: 'SARAH CHEN',
      role: 'HIIT & Mobility Specialist',
      spec: 'Athletic Movement & Posture Recovery',
      image: '/images/img_30_PvdQ8l6PPnbPrYRbs5ei.png',
      experience: '6+ Years Exp',
    },
    {
      name: 'MARCUS VANCE',
      role: 'Body Transformation Coach',
      spec: 'Hypertrophy & Macro Nutrition',
      image: '/images/img_31_OQnrIsjDz2WWZUs2Ma4l.png',
      experience: '10+ Years Exp',
    },
  ]

  return (
    <section className="py-24 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-sans">
            MEET THE TRAINERS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-4 font-sans">
            GUIDANCE YOU CAN <span className="text-stroke-lime">TRUST.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            They’re more than just fitness experts — they’re real people who listen, support, and guide you every step of the way.
          </p>
        </motion.div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#ccff00]/50 transition-all duration-500 shadow-2xl"
            >
              {/* Trainer Image */}
              <div className="h-96 w-full overflow-hidden relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/30 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-[#ccff00] uppercase tracking-wider font-sans">
                  {trainer.experience}
                </div>
              </div>

              {/* Trainer Content Info */}
              <div className="p-6 relative z-10 -mt-12 bg-gradient-to-t from-[#09090c] to-[#09090c]/90 rounded-b-3xl">
                <div className="text-xs font-extrabold text-[#ccff00] uppercase tracking-widest mb-1 font-sans">
                  {trainer.role}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 font-sans">
                  {trainer.name}
                </h3>
                <p className="text-zinc-400 text-xs mb-6 font-sans">
                  {trainer.spec}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:bg-zinc-700 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" aria-label="X" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:bg-zinc-700 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:bg-zinc-700 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
