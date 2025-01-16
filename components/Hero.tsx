'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import { SquareTerminal, Terminal } from 'lucide-react'
import Typewriter from "@/components/Typewriter";

const Hero = () => {
  // Array containing the typewriter text
  const aboutMe = [
    { static: "Hi, I'm ", dynamic: ["Aditya Bhardwaj!", "a Web Developer!", "a Designer!"] },
    { static: "I am the ", dynamic: ["Web Development Club Coordinator.", "leader of innovative projects.", "creator of unique UI designs."] },
    { static: "I love ", dynamic: ["coding.", "designing.", "collaborating on projects."] },
    { static: "Currently working on ", dynamic: ["the Tech Council website.", "Bento UI layouts.", "community-focused projects."] },
  ]

  // Reference to the section element
  const ref = useRef<HTMLElement>(null)

  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Get the current theme
  const { theme } = useTheme()

  // Transformations for scroll animations
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  // Check if the current theme is dark
  const isDark = theme === 'dark'

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-primary' : 'text-primary-foreground'}`}
        >
          <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
            Aditya Bhardwaj <br />
          </span>

          {/* Github Link */}
          <div className='relative flex items-center justify-center'>
            <a href="https://github.com/TechTitan360" target="_blank" rel="noopener noreferrer" className="focus:outline-none group flex items-center">
              <span className={`text-lg text-left text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} group-hover:animate-metallic-glow`}>
                TechTitan360
              </span>
              <Terminal className="text-muted-foreground ml-2" size={20} />
            </a>
          </div>
        </motion.h1>

        {/* Typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-foreground mb-8 flex items-center justify-center"
        >
          <SquareTerminal className="mr-2" />
          <Typewriter
            sentences={aboutMe}
            typingSpeed={120}
            deletingSpeed={100}
            pauseTime={1500}
            cursorBlinkSpeed={800}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#about"
            className={`${isDark ? 'bg-primary text-primary-foreground' : 'bg-blue-600 text-white'} px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-flex items-center`}
          >
            <span>Explore My Tech Stack</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
