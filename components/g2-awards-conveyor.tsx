"use client"

import { useEffect, useRef } from "react"

export function G2AwardsConveyor() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clone items for infinite loop effect
    const items = container.querySelectorAll("[data-award-item]")
    items.forEach((item) => {
      const clone = item.cloneNode(true)
      container.appendChild(clone)
    })
  }, [])

  const awards = [
    {
      id: 1,
      name: "Easiest Setup - Mid-Market - Winter 2024",
      image: "/g2-awards/easiest-setup-mid-market-winter-2024.jpg",
      alt: "G2 Easiest Setup Mid-Market Winter 2024",
    },
    {
      id: 2,
      name: "Highest User Adoption - Small Business - Winter 2024",
      image: "/g2-awards/highest-user-adoption-small-business-winter-2024.jpg",
      alt: "G2 Highest User Adoption Small Business Winter 2024",
    },
    {
      id: 3,
      name: "Momentum Leader - Winter 2024",
      image: "/g2-awards/momentum-leader-winter-2024.jpg",
      alt: "G2 Momentum Leader Winter 2024",
    },
    {
      id: 4,
      name: "Easiest To Use - Mid-Market - Summer 2024",
      image: "/g2-awards/easiest-to-use-mid-market-summer-2024.jpg",
      alt: "G2 Easiest To Use Mid-Market Summer 2024",
    },
    {
      id: 5,
      name: "Easiest Admin - Mid-Market - Winter 2024",
      image: "/g2-awards/easiest-admin-mid-market-winter-2024.jpg",
      alt: "G2 Easiest Admin Mid-Market Winter 2024",
    },
    {
      id: 6,
      name: "Leader - Winter 2024",
      image: "/g2-awards/leader-winter-2024.jpg",
      alt: "G2 Leader Winter 2024",
    },
  ]

  return (
    <section className="w-full py-12 bg-background overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Conveyor Belt Container */}
        <div className="relative overflow-hidden w-full">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling container */}
          <div
            ref={containerRef}
            className="flex gap-8 animate-scroll"
            style={{
              animation: "scroll 40s linear infinite",
            }}
          >
            {awards.map((award) => (
              <div
                key={award.id}
                data-award-item
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="h-36 w-56 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-200 p-4 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.alt}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-slate-50 rounded text-xs text-slate-600 text-center p-2"><span class="break-words">${award.name}</span></div>`
                      }
                    }}
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

