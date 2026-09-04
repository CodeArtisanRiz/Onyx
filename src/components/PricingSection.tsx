import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Check, ArrowUpRight, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const PricingSection: React.FC = () => {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: 'STARTER',
      tagline: 'Perfect for beginners building a routine',
      priceMonthly: 49,
      priceAnnual: 39,
      image: '/images/img_33_rgdakbNEJZLapifjIWue.png',
      popular: false,
      features: [
        'Standard Gym Access (6 AM - 10 PM)',
        'Full Locker Room & Shower Access',
        'Mobile App Progress & Log Tracker',
        '1 Monthly Fitness Consultation',
        'Standard Strength & Cardio Zones',
      ],
    },
    {
      name: 'CORE ATHLETE',
      tagline: 'Our most popular plan for active members',
      priceMonthly: 79,
      priceAnnual: 64,
      image: '/images/img_34_C9bL243VwN8YDo3QjAQ6.png',
      popular: true,
      features: [
        '24/7 Full Keyless Facility Access',
        'Unlimited Group Fitness Classes',
        'Infrared Sauna & Hydro Recovery',
        'Personalized Macro Nutrition Plan',
        '4 Monthly Personal Training Sessions',
        'Free Towel Service & Hydro Bar',
      ],
    },
    {
      name: 'UNLIMITED PRO',
      tagline: 'Complete package for maximum results',
      priceMonthly: 119,
      priceAnnual: 99,
      image: '/images/img_35_aq0uBp1NfDkamqeJahF3.png',
      popular: false,
      features: [
        'Everything in Core Athlete',
        'Dedicated 1-on-1 Personal Coach',
        'Unlimited Recovery Suite & Cold Plunge',
        '2 Monthly Guest Passes',
        'Priority Class & Workshop Booking',
        'Custom Supplement Consultation',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-[#0c0c10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-sans">
            MEMBERSHIP PLANS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-4 font-sans">
            JOIN THE WAY THAT <br />
            <span className="text-stroke-lime">FEELS RIGHT FOR YOU.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            Choose a plan that fits your pace — whether you’re just starting out or going all in.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 bg-zinc-900 border border-white/10 p-1.5 rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer font-sans ${
                !annual ? 'bg-[#ccff00] text-black shadow-md' : 'text-zinc-400 hover:text-white'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer font-sans ${
                annual ? 'bg-[#ccff00] text-black shadow-md' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full font-sans">SAVE 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-zinc-900 via-[#121604] to-zinc-900 border-2 border-[#ccff00] shadow-[0_0_40px_rgba(204,255,0,0.15)] transform lg:-translate-y-4'
                    : 'bg-zinc-900/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 font-sans">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight font-sans">
                      {plan.name}
                    </h3>
                    <img src={plan.image} alt={plan.name} className="w-10 h-10 object-contain rounded-xl" />
                  </div>

                  <p className="text-zinc-400 text-xs mb-6 font-sans">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-black text-white font-sans">${price}</span>
                    <span className="text-zinc-400 text-sm font-semibold font-sans">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-[#ccff00] text-black' : 'bg-zinc-800 text-[#ccff00]'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    `w-full inline-flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider py-4 h-auto rounded-full transition-all duration-200 border-0 ${
                      plan.popular
                        ? 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-lg hover:scale-[1.02]'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`
                  )}
                >
                  <span>SELECT THIS PLAN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
