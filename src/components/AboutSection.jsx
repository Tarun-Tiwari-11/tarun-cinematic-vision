import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '../contexts/LenisContext'

function AboutSection() {
  const sectionRef = useRef(null)
  const lenis = useLenis()

  // Track scroll progress for this section
  // Scroll progress: 0 = section top at viewport top, 1 = section bottom at viewport top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
    ...(lenis && { container: lenis }),
  })

  // Transform scroll progress to clip-path values for wipe animations
  // About content wipes up (appears) as we scroll into About section
  // Progress: 0 = section below viewport, 1 = section fully visible
  const aboutWipeProgress = useTransform(scrollYProgress, [0, 1], [1, 0])

  // Clip-path for wipe-up effect (from bottom to top)
  const aboutClipPath = useTransform(
    aboutWipeProgress,
    (progress) => `polygon(0% ${progress * 100}%, 100% ${progress * 100}%, 100% 100%, 0% 100%)`
  )

  return (
    <section
      ref={sectionRef}
      className="section-container bg-offWhite relative overflow-hidden"
    >
      {/* Large Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="font-phatt text-black text-[15vw] md:text-[12vw] lg:text-[10vw] opacity-5 select-none">
          MORPHYX
        </h1>
      </div>

      {/* Body Cutout Image Placeholder - layered, absolute */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/10 rounded-full z-10 pointer-events-none" />

      {/* Diagonal Image Placeholder */}
      <div
        className="absolute top-0 left-0 w-[50%] h-full bg-black/5 z-[5]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
        }}
      />

      {/* About Content - masked container for wipe-up */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          clipPath: aboutClipPath,
        }}
      >
        <div className="h-full w-full px-8 md:px-16 lg:px-24 py-20 flex items-center">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
              <h2 className="font-moontime text-black text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="font-horizon text-black text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6">
              <h2 className="font-moontime text-black text-4xl md:text-5xl">
                Why me?
              </h2>
              <p className="font-horizon text-black text-base md:text-lg leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
