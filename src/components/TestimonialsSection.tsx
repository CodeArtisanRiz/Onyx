import React from 'react'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Deepa Khan',
      date: 'April 2, 2026',
      avatar: '/images/img_36_RSfVJtzzfN3ZuTJJl1Ux.png',
      quote: 'Just a place where you can grow - your way. The equipment quality and coaching guidance are unparalleled.',
      stars: 5,
    },
    {
      name: 'Marcus Chen',
      date: 'March 28, 2026',
      avatar: '/images/img_41_rhNutcIKzlXDZztLuDEK.png',
      quote: 'The coaches here don’t force fake hype. They help you stay consistent, prevent injury, and build real habits.',
      stars: 5,
    },
    {
      name: 'Elena Vance',
      date: 'March 15, 2026',
      avatar: '/images/img_43_oX51K9osv27kwDmJwpi6.png',
      quote: 'Best gym environment I’ve ever trained in. Clean, modern equipment, great sauna suites, and super friendly staff.',
      stars: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-[#08080a] relative">
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
            MEMBER REVIEWS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-4 font-sans">
            BECAUSE STAYING FIT <br />
            <span className="text-stroke-lime">SHOULD FEEL GOOD.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            Hear from our members who built lasting strength and routine with Onyx.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#ccff00]/40" />
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic font-sans">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#ccff00]/30"
                />
                <div>
                  <div className="text-sm font-bold text-white uppercase font-sans">{rev.name}</div>
                  <div className="text-xs text-zinc-400 font-sans">{rev.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
