import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Dumbbell, Users, Utensils, Zap } from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      tag: '1-ON-1 COACHING',
      description: 'Custom-designed fitness programs paired with 1-on-1 coach accountability to reach your target strength and conditioning goals.',
      bgGradient: 'from-zinc-900 via-zinc-900 to-[#141804]',
    },
    {
      icon: Users,
      title: 'Group Fitness Classes',
      tag: 'COMMUNITY ENERGY',
      description: 'High-energy, structured group sessions built around functional movement, HIIT, and endurance training for all capability levels.',
      bgGradient: 'from-zinc-900 via-zinc-900 to-zinc-900',
    },
    {
      icon: Utensils,
      title: 'Nutrition & Diet Plans',
      tag: 'SUSTAINABLE LIFESTYLE',
      description: 'Practical, science-backed dietary guidance and macronutrient planning tailored around your daily routine and dietary preferences.',
      bgGradient: 'from-zinc-900 via-zinc-900 to-zinc-900',
    },
    {
      icon: Zap,
      title: 'Recovery & Mobility',
      tag: 'REGENERATE & PREVENT',
      description: 'Dedicated post-workout recovery suites including guided mobility work, contrast hydrotherapy, and foam rolling technique guidance.',
      bgGradient: 'from-zinc-900 via-zinc-900 to-[#141804]',
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#0c0c10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-sans">
              OUR SERVICES
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 font-sans">
              NOT JUST WORKOUTS. <br />
              <span className="text-stroke-lime">A WHOLE APPROACH.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base max-w-md font-sans">
            From personal training to nutrition and recovery — we cover what your body needs to build lasting strength and vitality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} border border-white/10 hover:border-[#ccff00]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)] flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center group-hover:bg-[#ccff00] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#ccff00] group-hover:text-black transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 bg-zinc-800/80 px-3 py-1.5 rounded-full border border-white/5 font-sans">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-3 group-hover:text-[#ccff00] transition-colors font-sans">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider font-sans">LEARN MORE</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-[#ccff00] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
