'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'MuseumMate',
    description: 'MuseumMate is an AI-powered online museum ticket booking system that provides users with a seamless and personalized experience. Utilizing advanced algorithms, it recommends exhibitions and events based on user preferences and past visits. The platform also offers secure and convenient ticket purchasing options, making it easy for users to plan their museum visits.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React.js', 'MongoDB', 'Botpress', 'TailwindCSS'],
  },
  {
    title: 'NovaTAG',
    description: 'NovaTAG is an AI-powered exoplanet exploration system developed by my team for the NASA Space Apps Challenge. It leverages advanced machine learning algorithms to analyze astronomical data and identify potential exoplanets. The system provides researchers with valuable insights and visualizations, aiding in the discovery and study of new worlds beyond our solar system.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React.js', 'NASA api', 'Botpress', 'TailwindCSS'],
  },
  {
    title: 'Trickster Tracker',
    description: 'Trickster Tracker is a web extension designed to detect dark patterns used in e-commerce websites. It identifies deceptive design practices that manipulate users into making unintended decisions, such as hidden costs, forced continuity, and misleading information. By highlighting these patterns, Trickster Tracker empowers users to make informed choices and promotes transparency in online shopping.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['HTML', 'CSS', 'Django', 'JavaScript'],
  },
]

const Projects = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      id="projects" 
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-background/50"
    >
      <motion.h2
        style={{ y }}
        className="text-5xl font-bold mb-12 text-primary"
      >
        My Projects
      </motion.h2>
      <motion.div
        style={{ y }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl px-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects