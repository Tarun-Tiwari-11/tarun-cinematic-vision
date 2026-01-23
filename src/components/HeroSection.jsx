import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '../contexts/LenisContext'

function HeroSection() {
  const sectionRef = useRef(null)
  const lenis = useLenis()

  // Track scroll progress for wipe-up effect when leaving Hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
    ...(lenis && { container: lenis }),
  })

  // Wipe-up clip-path: content disappears as we scroll out
  const wipeProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const heroClipPath = useTransform(
    wipeProgress,
    (progress) => `polygon(0% ${progress * 100}%, 100% ${progress * 100}%, 100% 100%, 0% 100%)`
  )

  // Timeline-based animation sequence
  // 1. Background (0s)
  // 2. Diagonal image wipe-down (0.3s delay)
  // 3. Text + icons fade-in (1.3s delay with stagger)

  const backgroundVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0,
      },
    },
  }

  const imageVariants = {
    initial: {
      clipPath: 'polygon(30% 0%, 100% 0%, 100% 0%, 30% 0%)',
    },
    animate: {
      clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  }

  const textContainerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 1.3,
        staggerChildren: 0.15,
      },
    },
  }

  const textItemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const iconsContainerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 1.3,
        staggerChildren: 0.1,
      },
    },
  }

  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="section-container bg-offWhite relative overflow-hidden"
    >
      {/* Masked container for wipe-up effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath: heroClipPath,
        }}
      >
        {/* Background - appears first */}
        <motion.div
          className="absolute inset-0 bg-offWhite"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
        />

        {/* Diagonal Image Placeholder - wipe-down reveal */}
        <motion.div
          className="absolute top-0 right-0 w-[60%] h-full bg-black/10"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        />

        {/* Centered Text Container - fixed layout, doesn't depend on text size */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          variants={textContainerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-col items-center gap-2 w-full max-w-4xl px-8">
            <motion.div
              className="font-brittany text-accentRed text-2xl md:text-3xl"
              variants={textItemVariants}
            >
              Welcome to my
            </motion.div>
            <motion.div
              className="font-phatt text-black text-5xl md:text-7xl lg:text-8xl"
              variants={textItemVariants}
            >
              PORTFOLIO
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom-right Social Icons - fixed position */}
        <motion.div
          className="absolute bottom-8 right-8 flex gap-4 z-10 pointer-events-none"
          variants={iconsContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="w-8 h-8 bg-black/20 rounded-full"
            variants={iconVariants}
          />
          <motion.div
            className="w-8 h-8 bg-black/20 rounded-full"
            variants={iconVariants}
          />
          <motion.div
            className="w-8 h-8 bg-black/20 rounded-full"
            variants={iconVariants}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
