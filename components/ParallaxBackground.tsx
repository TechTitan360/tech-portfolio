'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { theme } = useTheme()
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1000])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -1400])
  
  const springConfig = { damping: 15, stiffness: 100 }
  const y1Spring = useSpring(y1, springConfig)
  const y2Spring = useSpring(y2, springConfig)
  const y3Spring = useSpring(y3, springConfig)

  const isDark = theme === 'dark'

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Circuit board pattern */}
      <motion.div
        style={{ y: y1Spring }}
        className="absolute inset-0"
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className={`absolute ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 50 + 10,
              height: 2,
              rotate: Math.random() * 360,
            }}
          />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className={`absolute w-3 h-3 rounded-full ${isDark ? 'bg-primary/30' : 'bg-primary/20'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Binary code pattern */}
      <motion.div
        style={{ y: y2Spring }}
        className="absolute inset-0"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className={`absolute ${isDark ? 'text-primary/20' : 'text-primary/10'} text-xs`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {Array.from({ length: 8 }).map(() => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </motion.div>

      {/* Tech grid */}
      <motion.div
        style={{ y: y3Spring }}
        className="absolute inset-0"
      >
        <div className={`absolute inset-0 grid grid-cols-12 gap-4 ${isDark ? 'opacity-[0.07]' : 'opacity-[0.05]'}`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`line-${i}`} className="h-screen w-px bg-primary" />
          ))}
        </div>
        <div className={`absolute inset-0 grid grid-rows-12 gap-4 ${isDark ? 'opacity-[0.07]' : 'opacity-[0.05]'}`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`row-${i}`} className="w-full h-px bg-primary" />
          ))}
        </div>
      </motion.div>

      {/* Gradient overlays */}
      {isDark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
        </>
      )}
      
      {/* Interactive glow effect that follows mouse */}
      <MouseGlow isDark={isDark} />
    </div>
  )
}

const MouseGlow = ({ isDark }: { isDark: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none absolute -inset-px"
      animate={{
        background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, ${isDark ? 'rgba(0, 255, 255, 0.15)' : 'rgba(0, 0, 255, 0.1)'}, transparent 80%)`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  )
}

export default ParallaxBackground

