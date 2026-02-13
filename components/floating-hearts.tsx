'use client'

import { useEffect, useState } from 'react'

interface FloatingHeart {
  id: number
  left: number
  delay: number
  duration: number
}

export default function FloatingHearts({ isActive }: { isActive: boolean }) {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    if (!isActive) {
      setHearts([])
      return
    }

    // Create initial hearts
    const initialHearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }))
    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 2 + Math.random() * 1,
        },
      ])
    }, 300)

    return () => clearInterval(interval)
  }, [isActive])

  // Clean up old hearts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHearts((prev) => prev.slice(-15))
    }, 3000)
    return () => clearTimeout(timeout)
  }, [hearts.length])

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none text-primary animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${20 + Math.random() * 30}px`,
            animation: `floatUp ${heart.duration}s ease-in forwards`,
            animationDelay: `${heart.delay}s`,
            opacity: 0.8,
          }}
        >
          ❤️
        </div>
      ))}

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
