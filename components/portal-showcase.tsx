"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogIn, UserCircle, Handshake } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"
import { InteractiveHoverButton } from "@/components/InteractiveHoverButton"
import { FlowButton } from "@/components/FlowButton"

const menuItems = [
  {
    icon: <LogIn className="h-5 w-5" />, label: "Onboarding", id: "onboarding",
    gradient: "radial-gradient(circle,rgba(59,130,246,0.15) 0%,rgba(37,99,235,0.06) 50%,rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <UserCircle className="h-5 w-5" />, label: "Client Portal", id: "client",
    gradient: "radial-gradient(circle,rgba(34,197,94,0.15) 0%,rgba(22,163,74,0.06) 50%,rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <Handshake className="h-5 w-5" />, label: "Partner or Deal Space", id: "partner",
    gradient: "radial-gradient(circle,rgba(239,68,68,0.15) 0%,rgba(220,38,38,0.06) 50%,rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}
const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}
const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1, scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}
const navGlowVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }, },
}
const sharedTransition = { type: "spring", stiffness: 100, damping: 20, duration: 0.5 }

export function PortalShowcase() {
  const [activeTab, setActiveTab] = useState("onboarding")

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-4">
        {/* Full-width gradient panel with rounded corners and shadows */}
        <div className="bg-gradient-to-b from-teal-700 via-teal-800 to-emerald-900 rounded-[32px] p-14 relative shadow-2xl shadow-teal-900/20">

          {/* Glassmorphism Pill Switcher - 80-100px from top */}
          <div className="flex justify-center mb-16 pt-6">
            <nav className="inline-flex items-center gap-1 p-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 shadow-lg">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium",
                      isActive
                        ? "bg-teal-400/40 text-teal-50 shadow-md shadow-teal-500/20"
                        : "text-teal-200/80 hover:text-teal-100 hover:bg-teal-500/10"
                    )}
                  >
                    <span className={cn("w-4 h-4", isActive ? "text-teal-100" : "text-teal-300/70")}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Portal Showcase Content - 56-72px below pill */}
          <div className="relative h-96 md:h-[500px] px-6">
            {/* Onboarding Tab */}
            {activeTab === "onboarding" && (
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src="/portal.png"
                  alt="Portal Onboarding Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full rounded-[20px] shadow-2xl shadow-black/30"
                />
              </div>
            )}

            {/* Client Portal Tab */}
            {activeTab === "client" && (
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src="/Attached_image.png"
                  alt="Client Portal Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full rounded-[20px] shadow-2xl shadow-black/30"
                />
              </div>
            )}

            {/* Partner/Deal Space Tab */}
            {activeTab === "partner" && (
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src="/portal%20deal%20space.png"
                  alt="Partner or Deal Space Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full rounded-[20px] shadow-2xl shadow-black/30"
                />
              </div>
            )}
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
