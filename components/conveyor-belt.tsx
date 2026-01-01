"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function ConveyorBelt() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clone items for infinite loop effect
    const items = container.querySelectorAll("[data-logo-item]")
    items.forEach((item) => {
      const clone = item.cloneNode(true)
      container.appendChild(clone)
    })
  }, [])

  const logos = [
    {
      id: 1,
      name: "FreeStyle Libre",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brands-mobile-04a-DmWeYJpBK0irWeQnBk4Dz7ijY8aMFG.png",
    },
    {
      id: 2,
      name: "HIPAA Compliant",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-yrZbgwkNUQaoNRvHlOfeHDXBLl1uYw.png",
    },
    {
      id: 3,
      name: "Abbott",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Htb483EVXSwc1fr0aBhTGahYwtgfod.png",
    },
    {
      id: 4,
      name: "Medicare Accepted",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-X2OqEE0Jh3DYc1PIKRZnskQjjtblyj.png",
    },
    {
      id: 5,
      name: "GEMCO Medical",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-9BXHaBFI3vfSLPIsIlV2PH4jYQFvu2.png",
    },
    {
      id: 6,
      name: "Parachute Health",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-CHiLQDAgNELtyUoS96MBCmOEhrEjop.png",
    },
  ]

  return (
    <section className="w-full py-16 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-foreground mb-12">
          Trusted by 3000+ businesses across the world
        </h2>

        {/* Conveyor Belt Container */}
        <div className="relative overflow-hidden w-full">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling container */}
          <div
            ref={containerRef}
            className="flex gap-12 animate-scroll"
            style={{
              animation: "scroll 30s linear infinite",
            }}
          >
            {logos.map((logo) => (
              <div key={logo.id} data-logo-item className="flex-shrink-0 flex items-center justify-center min-w-max">
                <div className="h-12 relative w-40 flex items-center justify-center">
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={logo.name}
                    width={160}
                    height={48}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animation for scrolling */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
