import React from 'react'

export const LogoMarquee: React.FC = () => {
  const logos = [
    '/images/img_3_mnXC0a9dZSgJCHDJ3vti.png',
    '/images/img_4_5mkdq8RPTUb7Nm3JqBZa.png',
    '/images/img_5_L2Ej5RgoEwGbYOGmsfg9.png',
    '/images/img_6_GOnQnjLyExyxPkWSiMUN.png',
    '/images/img_7_jGa7frOW52CEKTNtuPzo.png',
    '/images/img_8_OgD5z0NxIVWnZQMCOamm.png',
  ]

  // Quadruple logos array to ensure infinite loop visual smoothness
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-12 bg-[#0c0c10] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-sans">
          TRUSTED BY ATHLETES & LEADING FITNESS BRANDS
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left/Right Fading Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0c0c10] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0c0c10] to-transparent pointer-events-none" />

        <div className="animate-marquee items-center gap-16">
          {marqueeLogos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img
                src={logo}
                alt={`Partner logo ${idx}`}
                className="h-8 md:h-10 w-auto object-contain brightness-200 invert grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
