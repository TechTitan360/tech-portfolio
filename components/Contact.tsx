'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

const Contact = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      id="contact"
      className={`min-h-screen flex flex-col justify-center items-center py-20 ${isDark ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-gradient-to-br from-blue-100 to-indigo-100'}`}
    >
      <motion.h2
        style={{ y }}
        className={`text-5xl font-bold mb-8 ${isDark ? 'text-primary' : 'text-blue-600'}`}
      >
        <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
          Connect with Me
        </span>
      </motion.h2>
      <motion.form
        style={{ y }}
        className={`w-full max-w-md backdrop-blur-md ${isDark ? 'bg-background/30 border-primary/30' : 'bg-white/70 border-blue-200'} p-8 rounded-lg shadow-lg border relative overflow-hidden`}
      >
        {/* Tech-inspired background elements */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`tech-element-${i}`}
              className={`absolute ${isDark ? 'bg-primary/10' : 'bg-blue-200/30'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 30 + 5,
                height: Math.random() * 30 + 5,
                rotate: Math.random() * 360,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 space-y-4">
          <div>
            <Input type="text" placeholder="Your Name" required className={`${isDark ? 'bg-background/50 border-primary/50' : 'bg-white/50 border-blue-200'}`} />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" required className={`${isDark ? 'bg-background/50 border-primary/50' : 'bg-white/50 border-blue-200'}`} />
          </div>
          <div>
            <Textarea placeholder="Your Message" required className={`${isDark ? 'bg-background/50 border-primary/50' : 'bg-white/50 border-blue-200'}`} />
          </div>
          <Button
            type="submit"
            className={`w-full ${isDark ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors duration-300`}
          >
            Send Message
          </Button>
        </div>
      </motion.form>
    </motion.section>
  )
}

export default Contact

