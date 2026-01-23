import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '../contexts/LenisContext'

function WorkSection() {
  const sectionRef = useRef(null)
  const lenis = useLenis()

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
    ...(lenis && { container: lenis }),
  })

  // Transform scroll progress for animations
  // Cards slide up as section enters viewport
  const card1Y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const card1Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const card2Y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  // Background blur effect
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.5], [0, 8])

  // Card float effect (subtle scale and shadow)
  const card1Scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const card2Scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1])

  return (
    <section
      ref={sectionRef}
      className="section-container bg-offWhite relative overflow-hidden"
    >
      {/* Background with blur effect */}
      <motion.div
        className="absolute inset-0 bg-offWhite -z-10"
        style={{
          filter: `blur(${backgroundBlur}px)`,
          willChange: 'filter',
        }}
      />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-8 md:px-16 lg:px-24 py-20 z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
          {/* Card 1: Title + 3 Vertical Videos */}
          <motion.div
            className="bg-offWhite rounded-2xl p-8 md:p-12 shadow-xl"
            style={{
              y: card1Y,
              opacity: card1Opacity,
              scale: card1Scale,
              willChange: 'transform, opacity',
            }}
          >
            <h2 className="font-moontime text-black text-4xl md:text-5xl mb-8">
              My Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vertical Video Slot 1 */}
              <div className="w-full aspect-[9/16] bg-black/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-black/30 text-sm">Video 1</span>
                </div>
              </div>
              {/* Vertical Video Slot 2 */}
              <div className="w-full aspect-[9/16] bg-black/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-black/30 text-sm">Video 2</span>
                </div>
              </div>
              {/* Vertical Video Slot 3 */}
              <div className="w-full aspect-[9/16] bg-black/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-black/30 text-sm">Video 3</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 2 Horizontal Videos */}
          <motion.div
            className="bg-offWhite rounded-2xl p-8 md:p-12 shadow-xl"
            style={{
              y: card2Y,
              opacity: card2Opacity,
              scale: card2Scale,
              willChange: 'transform, opacity',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Horizontal Video Slot 1 */}
              <div className="w-full aspect-video bg-black/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-black/30 text-sm">Video 4</span>
                </div>
              </div>
              {/* Horizontal Video Slot 2 */}
              <div className="w-full aspect-video bg-black/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-black/30 text-sm">Video 5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
