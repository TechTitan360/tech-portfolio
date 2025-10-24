import { motion } from "motion/react";
import { Coffee, Code2, Palette, Music, Clock, MapPin, BookOpen, Lightbulb, GraduationCap, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import personalInfo from "../data/personalInfo.json";

export function BentoGrid() {
  return (
    <section id="about" className="py-24 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="inline-block relative mb-4">
            About Me
            <motion.div
              className="absolute -bottom-2 left-0 h-4 bg-pink-400 -z-10 border-2 border-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {/* Main bio card - spans large area */}
          <motion.div
            className="md:col-span-6 lg:col-span-5 lg:row-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-black rounded-full"></div>
                <div>
                  <h3 className="mb-1">{personalInfo.name}</h3>
                  <p className="text-slate-600">{personalInfo.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-700 mb-4">
                {personalInfo.objective.split('.')[0]}. <span className="bg-yellow-400 px-1 border-2 border-black">Design precision</span> meets functional performance.
              </p>

              <p className="text-slate-700 mb-6">
                Currently pursuing {personalInfo.education.degree} in {personalInfo.education.major} at {personalInfo.education.university}. Expected graduation: {personalInfo.education.expectedGraduation}.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-pink-100 border-2 border-black p-3">
                  <Code2 className="w-5 h-5 mb-2" />
                  <p className="text-sm">Clean Code</p>
                </div>
                <div className="bg-cyan-100 border-2 border-black p-3">
                  <Palette className="w-5 h-5 mb-2" />
                  <p className="text-sm">UI/UX First</p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 border-4 border-black rotate-45"
              animate={{ rotate: [45, 60, 45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Visual/Image card */}
          <motion.div
            className="md:col-span-3 lg:col-span-4 lg:row-span-2 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1699568542323-ff98aca8ea6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2MTI0MTg2NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Abstract art"
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-white border-4 border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                whileHover={{ rotate: -5, scale: 1.1 }}
              >
                <p className="text-2xl">� {personalInfo.preferences.motto}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            className="md:col-span-3 lg:col-span-3 bg-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: -2 }}
          >
            <MapPin className="w-8 h-8 mb-3" />
            <h4 className="mb-2">Studying at</h4>
            <p className="text-xl">{personalInfo.location.university}</p>
            <p className="text-sm mt-1">{personalInfo.location.country} • Open to remote</p>
          </motion.div>

          {/* Working hours card */}
          <motion.div
            className="md:col-span-3 lg:col-span-3 bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ rotate: 2 }}
          >
            <Clock className="w-8 h-8 mb-3" />
            <h4 className="mb-2">Work Style</h4>
            <p className="text-xl">{personalInfo.preferences.workingHours}</p>
            <p className="text-sm mt-1">Always ready to innovate ⚡</p>
          </motion.div>

          {/* Interests card */}
          <motion.div
            className="md:col-span-3 lg:col-span-3 bg-pink-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ rotate: -2 }}
          >
            <Music className="w-8 h-8 mb-3" />
            <h4 className="mb-2">Coding with</h4>
            <p className="text-xl">{personalInfo.preferences.music}</p>
            <p className="text-sm mt-1">Focus mode = ON</p>
          </motion.div>

          {/* Coffee card */}
          <motion.div
            className="md:col-span-3 lg:col-span-3 bg-lime-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ rotate: 2 }}
          >
            <Coffee className="w-8 h-8 mb-3" />
            <h4 className="mb-2">Powered by</h4>
            <p className="text-xl">{personalInfo.preferences.coffee}</p>
            <p className="text-sm mt-1">Fuel for innovation</p>
          </motion.div>

          {/* Philosophy card - spans wider */}
          <motion.div
            className="md:col-span-6 lg:col-span-6 bg-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
            <blockquote className="text-white text-xl italic">
              "Build products that feel as good as they perform."
            </blockquote>
            <p className="text-slate-400 mt-2">— My dev philosophy</p>
          </motion.div>

          {/* Leadership & Achievements */}
          <motion.div
            className="md:col-span-6 lg:col-span-6 bg-gradient-to-br from-yellow-400 to-orange-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-8 h-8 mb-3" />
            <h4 className="mb-3">Leadership & Achievements</h4>
            <div className="space-y-2">
              <p className="bg-white border-2 border-black px-3 py-2 inline-block">
                🎯 {personalInfo.leadership[0].role}
              </p>
              <p className="bg-white border-2 border-black px-3 py-2 inline-block ml-2">
                🏆 NASA Space Apps 2024
              </p>
              <p className="bg-white border-2 border-black px-3 py-2 inline-block">
                🚀 Smart India Hackathon 2024
              </p>
            </div>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            className="md:col-span-6 lg:col-span-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl">
              🎯 Coordinator of Web Development Club at Galgotias University
              <br />
              <span className="text-lg mt-2 inline-block">Leading UI design, mentoring, and driving innovation! �</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
