import Head from 'next/head'
import Link from 'next/link'
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
    let animationId: number
    let currentX = 25
    let currentY = 25
    let targetX = 25
    let targetY = 25
    let isUserActive = false
    let stopTimeout: NodeJS.Timeout
    let startTime = Date.now()

    const updateGradient = () => {
      const now = Date.now()
      const elapsed = now - startTime
      
      // If no user input, create subtle continuous cycling
      if (!isUserActive) {
        const time = elapsed * 0.0005 // Very slow auto-cycle
        targetX = 25 + Math.sin(time) * 15
        targetY = 25 + Math.cos(time * 0.7) * 10
      }
      
      // Smooth interpolation towards target
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1
      
      document.documentElement.style.setProperty('--scroll-bg-x', `${currentX}%`)
      document.documentElement.style.setProperty('--scroll-bg-y', `${currentY}%`)
      
      animationId = requestAnimationFrame(updateGradient)
    }

    const startUserInput = () => {
      isUserActive = true
      clearTimeout(stopTimeout)
      stopTimeout = setTimeout(() => {
        isUserActive = false
      }, 2000) // Return to auto-cycle 2 seconds after last input
    }

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
      
      targetX = Math.max(15, Math.min(85, newX))
      targetY = Math.max(15, Math.min(85, newY))
      startUserInput()
    }

    const handleMouseMove = (e: MouseEvent) => {
      const mouseInfluence = 0.01
      const newX = targetX + e.movementX * mouseInfluence
      const newY = targetY + e.movementY * mouseInfluence * 0.5
      
      targetX = Math.max(15, Math.min(85, newX))
      targetY = Math.max(15, Math.min(85, newY))
      startUserInput()
    }

    // Start the animation loop immediately
    updateGradient()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
      clearTimeout(stopTimeout)
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
        
        <footer className="border-t border-gray-200 mt-32">
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