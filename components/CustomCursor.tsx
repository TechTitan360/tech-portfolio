'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(mousePosition.x, mousePosition.y)
      setIsPointer(window.getComputedStyle(target as Element).cursor === 'pointer')
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateCursorType)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateCursorType)
    }
  }, [mousePosition.x, mousePosition.y])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
    },
    pointer: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
      scale: 1.5,
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={isPointer ? 'pointer' : 'default'}
        variants={variants}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
          <circle cx="16" cy="16" r="2" fill="white" />
          <line x1="16" y1="4" x2="16" y2="8" stroke="white" strokeWidth="2" />
          <line x1="16" y1="24" x2="16" y2="28" stroke="white" strokeWidth="2" />
          <line x1="28" y1="16" x2="24" y2="16" stroke="white" strokeWidth="2" />
          <line x1="8" y1="16" x2="4" y2="16" stroke="white" strokeWidth="2" />
        </svg>
      </motion.div>
    </>
  )
}

export default CustomCursor

