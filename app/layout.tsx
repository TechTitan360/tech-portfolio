import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import CustomCursor from '@/components/CustomCursor'
import ParallaxBackground from '@/components/ParallaxBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Portfolio',
  description: 'An impressive and fully animated personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <ParallaxBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

