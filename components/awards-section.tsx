"use client"

import { Button } from "@/components/ui/button"

export function AwardsSection() {
  const awards = [
    { id: 1, name: "Award 1", image: "/1.png" },
    { id: 2, name: "Award 2", image: "/2.png" },
    { id: 3, name: "Award 3", image: "/3.png" },
    { id: 4, name: "Award 4", image: "/4.png" },
    { id: 5, name: "Award 5", image: "/5.png" },
    { id: 6, name: "Award 6", image: "/6.png" },
  ];




  return (
    <section className="w-full bg-white py-20">
      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mb-20">
        <Button className="bg-teal-900 hover:bg-teal-950 text-white px-8 py-3 rounded-lg">Try it free</Button>
        <Button variant="outline" className="px-8 py-3 rounded-lg bg-transparent">
          Book a demo
        </Button>
      </div>

      {/* Awards Section Container */}
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="flex items-center gap-12">
          {/* Title */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-foreground whitespace-nowrap">
              Recognized with
              <br />
              numerous awards
            </h2>
          </div>

          {/* Conveyor Belt */}
          <div className="flex-1">
            <div className="relative">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Scrolling container */}
              <div className="overflow-hidden">
                <div className="inline-flex gap-8 animate-scroll">
                  {awards.map((award) => (
                    <div
                      key={award.id}
                      className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <img src={award.image} alt={award.name} className="object-contain w-full h-full" loading="lazy" />
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {awards.map((award) => (
                    <div
                      key={`duplicate-${award.id}`}
                      className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <img src={award.image} alt={award.name} className="object-contain w-full h-full" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
