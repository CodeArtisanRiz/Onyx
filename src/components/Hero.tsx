import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Play, Star } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#08080a]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left z-10"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-white/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-sans">
                NO PRESSURE. NO HYPE.
              </span>
            </div>

            {/* Headline with Multi-Weight Satoshi Spans */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6 font-sans">
              <span className="block font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ec4d09] to-[#ffa600]">
                TRAIN LIKE
              </span>
              <span className="text-white block font-black">
                YOU PERFORM
              </span>
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal mb-8 leading-relaxed font-sans">
              Just simple, effective workouts tailored to your goals — guided by real people who care about your progress.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 h-auto rounded-full transition-all duration-200 hover:scale-105 shadow-[0_0_30px_rgba(204,255,0,0.2)] border-0'
                )}
              >
                <span>START TODAY</span>
                <div className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </a>

              <a
                href="#services"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 h-auto rounded-full transition-all duration-200'
                )}
              >
                <Play className="w-4 h-4 text-[#ccff00] fill-[#ccff00]" />
                <span>EXPLORE PROGRAMS</span>
              </a>
            </div>

            {/* Micro Stats Banner */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-sans">1,200+</div>
                <div className="text-xs text-zinc-400 font-medium font-sans">Active Members</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-sans">98%</div>
                <div className="text-xs text-zinc-400 font-medium font-sans">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-sans">15+</div>
                <div className="text-xs text-zinc-400 font-medium font-sans">Expert Coaches</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 group">
              <img
                src="/images/img_2_mXjxBWSb8GBdmvrqH4vs.png"
                alt="Onyx Athlete Training"
                className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Glass Badge 1 */}
              <div className="absolute top-6 right-6 bg-[#0e0e12]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ccff00] flex items-center justify-center font-black text-black font-sans">
                  4.9
                </div>
                <div>
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mt-0.5 font-sans">Top Rated Gym</div>
                </div>
              </div>

              {/* Floating Glass Badge 2 */}
              <div className="absolute bottom-6 left-6 bg-[#0e0e12]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#ccff00]">⚡</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase font-sans">Personalized Plans</div>
                  <div className="text-xs text-zinc-400 font-sans">Targeted Strength & Fitness</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
