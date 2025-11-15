import { motion, useMotionValue, useTransform } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import personalInfo from "../data/personalInfo.json";

export function ProjectsShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projectVisuals = [
    {
      image: "/ai.png",
      color: "from-purple-400 to-pink-500",
      rotation: 3,
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-cyan-400 to-blue-500",
      rotation: -2,
    },
    {
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-yellow-400 to-orange-500",
      rotation: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-lime-400 to-green-500",
      rotation: -3,
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      color: "from-pink-400 to-purple-500",
      rotation: 2,
    },
  ];

  const projects = personalInfo.projects
    .filter((project) => project.featured)
    .map((project, index) => ({
      ...project,
      ...projectVisuals[index],
    }));

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block relative mb-4">
            Featured Projects
            <motion.div
              className="absolute -bottom-2 left-0 h-4 bg-cyan-400 -z-10 border-2 border-black -rotate-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            From AI assistants to NASA challenges — building digital experiences that matter
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image side */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ rotate: project.rotation }}
                >
                  <div className={`bg-gradient-to-br ${project.color} border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover mix-blend-overlay"
                    />
                  </div>

                  {/* Floating number */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rotate-12"
                    animate={{
                      rotate: hoveredIndex === index ? 0 : 12,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                  >
                    <span className="text-4xl">0{index + 1}</span>
                  </motion.div>
                </motion.div>

                {/* Content side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="mb-4 inline-block relative">
                      {project.title}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-2 bg-pink-400 -z-10"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      />
                    </h3>
                    <p className="text-slate-700 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tech) => (
                        <motion.span
                          key={tech}
                          className="bg-white border-2 border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          whileHover={{ y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        asChild={project.link ? true : false}
                        className="bg-black hover:bg-slate-800 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      >
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                          </a>
                        ) : (
                          <>
                            <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                          </>
                        )}
                      </Button>
                      <Button
                        asChild={project.link ? true : false}
                        variant="outline"
                        className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white hover:bg-yellow-100 transition-all"
                      >
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 w-4 h-4" /> Code
                          </a>
                        ) : (
                          <>
                            <Github className="mr-2 w-4 h-4" /> Code
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5" /> View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
