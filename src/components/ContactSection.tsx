import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'West Wing Studio',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-[#08080a] relative">
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
            CONTACT US
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-4 font-sans">
            GET IN <span className="text-stroke-lime">TOUCH</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            Have a question? Want to visit? We’re here to help you take the first step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight font-sans">
                OUR LOCATIONS
              </h3>

              <div className="flex items-start gap-4 pb-6 border-b border-white/10">
                <img src="/images/img_45_OcozqjhgBZSDv3fnuNPq.png" alt="Flag" className="w-8 h-8 rounded-full object-cover mt-1" />
                <div>
                  <div className="text-sm font-bold text-white uppercase font-sans">ONYX WEST WING STUDIO</div>
                  <p className="text-zinc-400 text-xs mt-1 font-sans">2nd Floor, West Wing Athletics Hub, San Francisco, CA</p>
                  <p className="text-xs text-[#ccff00] font-medium mt-1 font-sans">Open 24/7 for Members</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src="/images/img_46_DLH1Q39bhfl77IAUdwi6.png" alt="Flag" className="w-8 h-8 rounded-full object-cover mt-1" />
                <div>
                  <div className="text-sm font-bold text-white uppercase font-sans">ONYX DOWNTOWN ARENA</div>
                  <p className="text-zinc-400 text-xs mt-1 font-sans">104 Central Plaza, Tech District, San Francisco, CA</p>
                  <p className="text-xs text-[#ccff00] font-medium mt-1 font-sans">Open 24/7 for Members</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121604] to-zinc-900 border border-[#ccff00]/30 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ccff00]" />
                <span className="text-sm font-bold text-white font-sans">+1 (800) 497-3734</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ccff00]" />
                <span className="text-sm font-bold text-white font-sans">hello@onyx-fit.com</span>
              </div>
            </div>
          </motion.div>

          {/* Form Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 font-sans">
              SEND US A MESSAGE
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#ccff00]/10 border border-[#ccff00]/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#ccff00] mx-auto" />
                <h4 className="text-lg font-bold text-white uppercase font-sans">MESSAGE RECEIVED!</h4>
                <p className="text-xs text-zinc-300 font-sans">Thank you for reaching out. One of our team members will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-2 font-sans">FULL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00] font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-2 font-sans">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-2 font-sans">PHONE NUMBER</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-2 font-sans">PREFERRED LOCATION</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ccff00] font-sans cursor-pointer"
                  >
                    <option value="West Wing Studio">West Wing Studio</option>
                    <option value="Downtown Arena">Downtown Arena</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-2 font-sans">YOUR MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your fitness goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00] font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'w-full inline-flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider py-4 h-auto rounded-xl transition-all duration-200 cursor-pointer border-0'
                  )}
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
