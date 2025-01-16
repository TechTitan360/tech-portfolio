'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const skills = [
  { name: 'React', level: 80, description: 'Building interactive UIs with React and its ecosystem' },
  { name: 'Next.js', level: 65, description: 'Creating server-side rendered and static websites' },
  { name: 'TypeScript', level: 50, description: 'Developing type-safe JavaScript applications' },
  { name: 'Node.js', level: 55, description: 'Building scalable backend services and APIs' },
  { name: 'TailwindCSS', level: 95, description: 'Crafting responsive and customizable designs' },
  { name: 'Framer Motion', level: 75, description: 'Creating smooth and engaging animations' },
  { name: 'MongoDB', level: 45, description: 'A NoSQL database for building high-performance and scalable applications' },
  { name: 'Three.js', level: 35, description: 'Developing 3D graphics and visualizations for the web' },
  { name: 'Git', level: 90, description: 'Version control and collaborative development' },
]

const About = () => {
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
      id="about" 
      className="min-h-screen flex flex-col justify-center items-center py-20 "
    >
      <motion.h2
        style={{ y }}
        className="text-5xl font-bold mb-8 text-primary"
      >
        About Me
      </motion.h2>
      <motion.p
        style={{ y }}
        className="text-xl text-foreground max-w-2xl text-center mb-12"
      >
        I'm a passionate full-stack developer with a keen interest in creating
        immersive web experiences. My expertise spans across modern web technologies,
        and I'm always eager to learn and apply new skills to solve complex problems.
      </motion.p>
      <motion.div
        style={{ y }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="bg-secondary rounded-lg p-4 h-full">
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-background rounded-full h-2.5 mb-2">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{skill.level}%</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default About

