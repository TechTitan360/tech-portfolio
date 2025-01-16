'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { Menu, X, Search, Code, Terminal, Sun, Moon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useTheme } from 'next-themes'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8])
  const navOpacity = useTransform(scrollY, [50, 100], [0, 1])
  const searchOpacity = useTransform(scrollY, [50, 100], [1, 0])
  const searchScale = useTransform(scrollY, [50, 100], [1, 0.8])

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const menuItems = ['About', 'Projects', 'Contact']

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 transition-colors duration-300 border-b border-primary/20"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-2">
              <Code className="text-primary-foreground" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-primary hidden sm:block">TechPortfolio</h1>
          </motion.div>

          <motion.div 
            className="flex-grow mx-4 max-w-md relative"
            style={{ opacity: searchOpacity, scale: searchScale }}
          >
            <div className="relative">
              <Input
                type="search"
                placeholder="Hey There..."
                className="w-full bg-background/50 border-primary/50 pr-10 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Terminal className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            </div>
          </motion.div>

          <motion.nav
            className="hidden md:flex space-x-6"
            style={{ opacity: navOpacity }}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.nav>

          <div className="flex items-center space-x-4">
            <LocalThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md py-4 mt-2"
          >
            <ul className="flex flex-col items-center space-y-4">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

const LocalThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}

export default Header

