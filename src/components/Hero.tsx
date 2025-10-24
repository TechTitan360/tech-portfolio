import { motion } from "motion/react";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { Button } from "./ui/button";
import personalInfo from "../data/personalInfo.json";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-pink-400 border-4 border-black"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 bg-cyan-400 rounded-full border-4 border-black"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16 bg-lime-400 border-4 border-black rotate-45"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-yellow-400 border-4 border-black px-4 py-2 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <Sparkles className="w-5 h-5" />
              <span>{personalInfo.tagline}</span>
            </motion.div>

            <h1 className="mb-4">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hey! I'm
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                {personalInfo.name}
              </motion.span>
            </h1>

            <motion.h2
              className="mb-6 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative z-10">{personalInfo.subtitle}</span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-3 bg-yellow-400 -z-10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.h2>

            <motion.p
              className="text-slate-700 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button
                size="lg"
                className="bg-black hover:bg-slate-800 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                See My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white hover:bg-yellow-100 transition-all"
                asChild
              >
                <a href="/Aditya_Bhardwaj_Resume.pdf" download="Aditya_Bhardwaj_Resume.pdf">
                  <Download className="mr-2 w-4 h-4" /> Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 rotate-3"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white border-4 border-black p-6 -rotate-2">
                  <div className="space-y-4">
                    <div className="h-4 bg-black w-3/4"></div>
                    <div className="h-4 bg-black w-1/2"></div>
                    <div className="h-4 bg-black w-5/6"></div>
                    <div className="grid grid-cols-3 gap-2 pt-4">
                      <div className="h-16 bg-yellow-400 border-2 border-black"></div>
                      <div className="h-16 bg-pink-400 border-2 border-black"></div>
                      <div className="h-16 bg-cyan-400 border-2 border-black"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Code({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
