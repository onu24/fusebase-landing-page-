"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"
import { FlowButton } from "@/components/FlowButton"


const menuItems = [
  { label: "Onboarding", id: "onboarding" },
  { label: "Client Portal", id: "client" },
  { label: "Partner or Deal Space", id: "partner" },
]

export function PortalShowcase() {
  const [activeTab, setActiveTab] = useState("onboarding")

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-4">
        {/* Panel wrapping content tightly to endpoint immediately under mockup */}
        <div className="bg-gradient-to-b from-teal-700 via-teal-800 to-emerald-900 rounded-[32px] relative shadow-2xl shadow-teal-900/20 overflow-hidden">

          {/* Glassmorphism Pill Switcher - 80-100px from top */}
          <div className="flex justify-center pt-20">
            <nav className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "px-6 py-2.5 rounded-full transition-all duration-500 text-sm font-semibold tracking-tight",
                      isActive
                        ? "bg-white/90 text-teal-900 shadow-xl"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Portal Showcase Content - Tighter Framing (Camera Zoom) */}
          <div className="relative px-14 pt-16 pb-1 flex justify-center items-end overflow-hidden">
            {/* Inner container to hold mockup height precisely */}
            <div className="w-full h-[620px] relative flex items-end">
              {/* Onboarding Tab */}
              {activeTab === "onboarding" && (
                <div className="w-full h-full animate-in fade-in duration-500">
                  <img
                    src="/portal.png"
                    alt="Portal Onboarding Showcase"
                    className="object-contain object-bottom w-full h-full rounded-t-[20px] shadow-2xl shadow-black/40 translate-y-1"
                  />
                </div>
              )}

              {/* Client Portal Tab */}
              {activeTab === "client" && (
                <div className="w-full h-full animate-in fade-in duration-500">
                  <img
                    src="/Attached_image.png"
                    alt="Client Portal Showcase"
                    className="object-contain object-bottom w-full h-full rounded-t-[20px] shadow-2xl shadow-black/40 translate-y-1"
                  />
                </div>
              )}

              {/* Partner/Deal Space Tab */}
              {activeTab === "partner" && (
                <div className="w-full h-full animate-in fade-in duration-500">
                  <img
                    src="/portal%20deal%20space.png"
                    alt="Partner or Deal Space Showcase"
                    className="object-contain object-bottom w-full h-full rounded-t-[20px] shadow-2xl shadow-black/40 translate-y-1"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button size="lg" className="bg-teal-900 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold">
            Try it free
          </Button>
          <FlowButton text="Book a demo" />
        </div>
      </div>
    </section>
  )
}
