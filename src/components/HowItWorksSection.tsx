import React from 'react'
import { motion } from 'motion/react'
import { CalendarCheck, Compass, Trophy } from 'lucide-react'

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: CalendarCheck,
      title: 'BOOK A FREE TRIAL',
      description: 'Schedule a free day pass to tour our facility, meet our coaching staff, and test out our equipment.',
    },
    {
      num: '02',
      icon: Compass,
      title: 'GET A TAILORED PLAN',
      description: 'Sit down with a coach to evaluate your current fitness level and build a practical roadmap for your goals.',
    },
    {
      num: '03',
      icon: Trophy,
      title: 'TRAIN & TRANSFORM',
      description: 'Follow your structured routines, track progress in our mobile app, and hit milestone achievements.',
    },
  ]

  return (
    <section className="py-24 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-sans">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-4 font-sans">
            GETTING STARTED <span className="text-stroke-lime">IS SIMPLE.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            At Onyx, we make your fitness journey feel natural, structured, and easy to stick with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center group-hover:bg-[#ccff00] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#ccff00] group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-4xl font-black text-zinc-700 font-sans group-hover:text-[#ccff00] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-3 font-sans">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
