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
      opacity: { duration: 0.5, ease: [0.4,0,0.2,1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    }, },
}
const navGlowVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5, ease: [0.4,0,0.2,1] }, },
}
const sharedTransition = { type: "spring", stiffness: 100, damping: 20, duration: 0.5 }

export function PortalShowcase() {
  const [activeTab, setActiveTab] = useState("onboarding")

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl p-16 relative">
          {/* Animated/Glowing 3D Menu Bar */}
          <div className="flex justify-center mb-12">
            <motion.nav
              className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
              initial="initial"
              whileHover="hover"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/10 via-30% via-purple-400/10 via-60% via-red-400/10 via-90% to-transparent rounded-3xl z-0 pointer-events-none"
                variants={navGlowVariants}
              />
              <ul className="flex items-center gap-2 relative z-10">
                {menuItems.map((item) => {
                  const isActive = activeTab === item.id
                  return (
                    <motion.li key={item.label} className="relative">
                      <motion.div
                        className="block rounded-xl overflow-visible group relative"
                        style={{ perspective: "600px" }}
                        whileHover="hover"
                        initial="initial"
                        onClick={() => setActiveTab(item.id)}
                      >
                        <motion.div
                          className="absolute inset-0 z-0 pointer-events-none"
                          variants={glowVariants}
                          style={{
                            background: item.gradient,
                            opacity: isActive ? 1 : 0,
                            borderRadius: "16px",
                          }}
                        />
                        <motion.button
                          type="button"
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl cursor-pointer",
                            isActive ? item.iconColor + " text-foreground" : ""
                          )}
                          variants={itemVariants}
                          transition={sharedTransition}
                          style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                          tabIndex={0}
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </motion.button>
                        <motion.button
                          type="button"
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl cursor-pointer",
                            isActive ? item.iconColor + " text-foreground" : ""
                          )}
                          variants={backVariants}
                          transition={sharedTransition}
                          style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                          tabIndex={0}
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </motion.button>
                      </motion.div>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.nav>
          </div>

          {/* Portal Showcase Content */}
          <div className="relative h-96 md:h-[500px]">
            {/* Onboarding Tab */}
            {activeTab === "onboarding" && (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl overflow-hidden">
                <img
                  src="/portal.png"
                  alt="Portal Onboarding Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
            )}

            {/* Client Portal Tab */}
            {activeTab === "client" && (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl overflow-hidden">
                <img
                  src="/Attached_image.png"
                  alt="Client Portal Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
            )}

            {/* Partner/Deal Space Tab */}
            {activeTab === "partner" && (
              <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl overflow-hidden">
                <img
                  src="/portal%20deal%20space.png"
                  alt="Partner or Deal Space Showcase"
                  className="object-contain w-full h-full max-h-full max-w-full"
                  style={{ borderRadius: '2rem' }}
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
