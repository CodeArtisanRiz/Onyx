import React from 'react'
import { motion } from 'motion/react'
import { Clock, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react'

export const WhyChooseSection: React.FC = () => {
  const points = [
    {
      icon: Clock,
      title: '24/7 Facility Access',
      description: 'Train on your own time with secure, keyless app entry any hour of the day or night.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Pricing',
      description: 'Zero hidden sign-up fees or predatory annual contracts. Cancel or freeze anytime.',
    },
    {
      icon: Sparkles,
      title: 'Luxury Amenities',
      description: 'Spacious infrared saunas, rainfall showers, and complimentary towel service included.',
    },
    {
      icon: HeartHandshake,
      title: 'Supportive Community',
      description: 'Surround yourself with members and coaches who encourage consistency and celebrate wins.',
    },
  ]

  return (
    <section className="py-24 bg-[#0c0c10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-sans">
              WHY CHOOSE ONYX
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-6 font-sans">
              FITNESS SHOULD <br />
              <span className="text-stroke-lime">FEEL LIKE IT FITS.</span>
            </h2>
            <p className="text-zinc-400 text-base mb-10 leading-relaxed font-sans">
              Onyx isn’t just another gym template. It’s designed for real people who want progress without corporate intimidation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => {
                const Icon = pt.icon
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#ccff00]/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#ccff00]" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 font-sans">
                      {pt.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                      {pt.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
              <img
                src="/images/img_32_CCboQ1IkaXCGeT3jvKKN.png"
                alt="Why Choose Onyx"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
