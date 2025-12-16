import Head from 'next/head'
import { ReactNode, useEffect } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ 
  children, 
  title = 'Alex Matei - Rapid Solutions Architect',
  description = 'Building intelligent web applications with clean code and thoughtful design'
}: LayoutProps) {
  useEffect(() => {
    const handleScroll = () => {
      // Create more organic, less predictable movement
      const scroll = window.scrollY * 0.01
      const scrollCycle = scroll % 100

      // Multiple overlapping sine waves with different frequencies and phases
      const wave1 = Math.sin(scrollCycle * 0.07 + 1.2) * 25
      const wave2 = Math.sin(scrollCycle * 0.13 + 2.7) * 15
      const wave3 = Math.cos(scrollCycle * 0.05 + 0.8) * 20

      const waveY1 = Math.cos(scrollCycle * 0.09 + 3.1) * 20
      const waveY2 = Math.sin(scrollCycle * 0.11 + 1.5) * 12

      const newX = 25 + (wave1 + wave2) * 0.6 + wave3 * 0.4
      const newY = 25 + (waveY1 + waveY2) * 0.8

      const targetX = Math.max(15, Math.min(85, newX))
      const targetY = Math.max(15, Math.min(85, newY))

      document.documentElement.style.setProperty('--scroll-bg-x', `${targetX.toFixed(2)}%`)
      document.documentElement.style.setProperty('--scroll-bg-y', `${targetY.toFixed(2)}%`)
    }

    // Set initial position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Alex Matei" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/AlexAboutAvatar3.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/AlexAboutAvatar3.png" />
        <link rel="apple-touch-icon" href="/AlexAboutAvatar3.png" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-tr from-orange-50 via-amber-50 to-blue-50 animate-gradient-shift">
        <main>
          {children}
        </main>
        
        <footer className="border-t border-[#2D2D2D]/20 mt-32">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-600">© 2025 Alex Matei</p>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/aematei" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#6C63FF] transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/aematei" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#6C63FF] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}