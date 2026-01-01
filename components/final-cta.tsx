"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Star {
  left: string
  top: string
  opacity: number
}

export function FinalCTA() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate stars only on the client side to avoid hydration mismatch
    setStars(
      [...Array(40)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.8 + 0.2,
      }))
    )
  }, [])

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 bg-opacity-90 mx-auto"> 
        {/* Star pattern overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-40">
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  left: star.left,
                  top: star.top,
                  opacity: star.opacity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[470px] px-8 sm:px-16 py-16 sm:py-28">
        <h2 className="mb-6 mt-0 text-balance text-6xl sm:text-7xl font-bold text-white leading-tight text-center">
          Ready to work smarter?
        </h2>

        <p className="mb-10 text-balance text-lg sm:text-xl text-teal-50 max-w-2xl text-center mx-auto">
          Cut through complexity, accelerate task completion, and empower your team to focus on what truly matters. Get started today
        </p>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center mt-2 mb-2">
          <Button size="lg" className="rounded-lg bg-teal-200 text-teal-900 px-12 py-5 text-lg hover:bg-teal-100 font-semibold">
            Get started now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg border-white border-2 text-white font-semibold px-12 py-5 text-lg hover:bg-teal-800/60 bg-transparent"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </section>
    </div>
  )
}
