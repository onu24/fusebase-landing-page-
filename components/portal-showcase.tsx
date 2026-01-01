"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"
import { FlowButton } from "@/components/FlowButton"


const menuItems = [
  { label: "Onboarding", id: "onboarding", icon: "↪" },
  { label: "Client Portal", id: "client", icon: "🌀" },
  { label: "Partner or Deal Space", id: "partner", icon: "🤝" },
]

export function PortalShowcase() {
  const [activeTab, setActiveTab] = useState("onboarding")

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-[1120px] mx-auto px-4 lg:px-6">
        <div
          className="
            relative
            rounded-[32px]
            bg-gradient-to-b from-[#064937] via-[#005449] to-[#009f7a]
            pt-[72px]
            pb-1
            shadow-[0_40px_80px_rgba(0,0,0,0.35)]
            overflow-hidden
          "
        >
          {/* Tabs pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-2 py-1 shadow-[0_18px_40px_rgba(0,0,0,0.45)] border border-white/20">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-white/90 text-slate-900 shadow-inner"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mockup wrapper - framed tightly to bottom edge */}
          <div
            className="
              relative
              mx-auto
              mt-8
              px-10
              pb-0
              max-w-5xl
              translate-y-4
              flex
              items-end
            "
          >
            {/* Left/Background screenshot (Secondary) - absolute to tuck behind */}
            <div className="absolute left-10 bottom-10 z-10 hidden w-[52%] rounded-3xl bg-white shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:block overflow-hidden border border-slate-100/50">
              <img
                src={activeTab === "onboarding" ? "/Attached_image.png" : "/portal.png"}
                alt="Background portal view"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Main screenshot (Primary) - relative to define height and stay on top */}
            <div className="relative z-20 ml-auto w-full rounded-3xl bg-white shadow-[0_40px_80px_rgba(0,0,0,0.6)] sm:w-[78%] overflow-hidden border border-slate-100/50">
              <img
                src={activeTab === "onboarding" ? "/portal.png" : activeTab === "client" ? "/Attached_image.png" : "/portal deal space.png"}
                alt="Main portal UI"
                className="h-full w-full object-cover"
              />
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
