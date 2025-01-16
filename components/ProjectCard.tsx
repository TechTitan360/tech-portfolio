'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from 'next-themes'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

const ProjectCard = ({ title, description, image, tags }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x: x - 0.5, y: y - 0.5 })
  }

  return (
    <motion.div
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      animate={{
        rotateX: isHovered ? -mousePosition.y * 20 : 0,
        rotateY: isHovered ? mousePosition.x * 20 : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {/* Tech-inspired background */}
      <motion.div
        className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-gradient-to-br from-blue-200/50 to-indigo-200/50'} z-0`}
        animate={{
          opacity: isHovered ? 1 : 0.5,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Circuit board pattern */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          opacity: isHovered ? 0.2 : 0.1,
        }}
        transition={{ duration: 0.3 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className={`absolute ${isDark ? 'bg-primary' : 'bg-blue-600'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 30 + 5,
              height: 1,
              rotate: Math.random() * 360,
            }}
          />
        ))}
      </motion.div>

      {/* Project image */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-20"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content overlay */}
      <motion.div
        className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-background/90 to-transparent' : 'bg-gradient-to-t from-white/90 to-transparent'} p-6 flex flex-col justify-end z-30`}
        animate={{
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className={`text-xl font-bold mb-2 ${isDark ? 'text-primary' : 'text-blue-600'}`}
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0.8,
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-muted-foreground mb-4"
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2"
          animate={{
            y: isHovered ? 0 : 30,
            opacity: isHovered ? 1 : 0,
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${isDark ? 'bg-primary/20 text-primary' : 'bg-blue-200 text-blue-600'} text-xs px-2 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard

