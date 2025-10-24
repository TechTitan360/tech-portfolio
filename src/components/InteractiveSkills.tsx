import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import personalInfo from "../data/personalInfo.json";

export function InteractiveSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Transform personalInfo skills to match the expected format
  const skills = {
    frontend: personalInfo.skills.frontend.map(skill => ({
      name: skill.name,
      experience: skill.experience,
      projects: skill.projects,
      description: ""
    })),
    backend: personalInfo.skills.backend.map(skill => ({
      name: skill.name,
      experience: skill.experience,
      projects: skill.projects,
      description: ""
    })),
    design: personalInfo.skills.design.map(skill => ({
      name: skill.name,
      experience: skill.experience,
      projects: skill.projects,
      description: ""
    })),
  };

  type SkillCategory = keyof typeof skills;
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");

  const categoryColors: Record<SkillCategory, string> = {
    frontend: "bg-pink-400",
    backend: "bg-cyan-400",
    design: "bg-yellow-400",
  };

  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block relative mb-4">
            Tech Stack
            <motion.div
              className="absolute -bottom-2 left-0 h-4 bg-lime-400 -z-10 border-2 border-black rotate-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </h2>
          <p className="text-slate-700 mt-4">
            Technologies I work with daily (hover for details!)
          </p>
        </motion.div>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(skills) as SkillCategory[]).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] capitalize transition-all ${activeCategory === category
                ? categoryColors[category]
                : "bg-white"
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div className={`border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 bg-white transition-all ${hoveredSkill === skill.name ? `${categoryColors[activeCategory]} scale-105` : ""
                }`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl">{skill.name}</h3>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-1 text-sm border-2 border-black">
                      {skill.experience}
                    </span>
                    <span className="text-sm text-slate-600">experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-1 text-sm border-2 border-black">
                      {skill.projects}+
                    </span>
                    <span className="text-sm text-slate-600">projects</span>
                  </div>
                </div>

                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredSkill === skill.name ? "auto" : 0,
                    opacity: hoveredSkill === skill.name ? 1 : 0,
                  }}
                  className="text-slate-700 text-sm overflow-hidden"
                >
                  {skill.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 -rotate-1"
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          <div className="text-center">
            <h3 className="mb-4">Soft Skills & Strengths 🚀</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {personalInfo.softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  whileHover={{ y: -4, rotate: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
