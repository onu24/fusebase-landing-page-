"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"
import { FlowButton } from "@/components/FlowButton"

import { PortalMockupUI } from "./portal-mockup-ui"

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
        {/* Tall gradient panel filling most of viewport height */}
        <div className="bg-gradient-to-b from-teal-700 via-teal-800 to-emerald-900 rounded-[32px] relative shadow-2xl shadow-teal-900/20 min-h-[85vh] flex flex-col overflow-hidden">

          {/* Glassmorphism Pill Switcher - 80-100px from top */}
          <div className="flex justify-center pt-20 pb-8">
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

          {/* Portal Showcase Content - pushed to bottom with minimal gap (4px) */}
          <div className="flex-1 relative px-14 pb-1 flex items-end">
            <div className="w-full h-[620px]">
              <PortalMockupUI activeTab={activeTab} />
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
