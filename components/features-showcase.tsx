"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FlowButton } from "@/components/FlowButton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Settings, Users, Bot } from "lucide-react"

export function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState("automations")


  const tabs = [
    {
      id: "automations",
      label: "Automations",
      icon: <Settings className="h-5 w-5" />,
      gradient: "radial-gradient(circle,rgba(59,130,246,0.15) 0%,rgba(37,99,235,0.06) 50%,rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      id: "workspace",
      label: "Team Workspace",
      icon: <Users className="h-5 w-5" />,
      gradient: "radial-gradient(circle,rgba(34,197,94,0.15) 0%,rgba(22,163,74,0.06) 50%,rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
    {
      id: "agents",
      label: "AI Agents",
      icon: <Bot className="h-5 w-5" />,
      gradient: "radial-gradient(circle,rgba(239,68,68,0.15) 0%,rgba(220,38,38,0.06) 50%,rgba(185,28,28,0) 100%)",
      iconColor: "text-red-500",
    },
  ]

  const tabImages = {
    automations: "/feature%20showcase.png", // local image for automations
    workspace: "/feature%20showcase%20worksapce.png",
    agents: "/feature%20showcase%20section%20ai%20assistant.png",
  }

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated/Glowing 3D Menu Bar Tabs with Icons */}
        <div className="flex justify-center mb-16">
          <motion.nav
            className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/10 via-30% via-purple-400/10 via-60% via-red-400/10 via-90% to-transparent rounded-3xl z-0 pointer-events-none"
              variants={{ initial: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.5, ease: [0.4,0,0.2,1] } } }}
            />
            <ul className="flex items-center gap-2 relative z-10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <motion.li key={tab.label} className="relative">
                    <motion.div
                      className="block rounded-xl overflow-visible group relative"
                      style={{ perspective: "600px" }}
                      whileHover="hover"
                      initial="initial"
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <motion.div
                        className="absolute inset-0 z-0 pointer-events-none"
                        variants={{ initial: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 2, transition: { opacity: { duration: 0.5, ease: [0.4,0,0.2,1] }, scale: { duration: 0.5, type: 'spring', stiffness: 300, damping: 25 } } } }}
                        style={{
                          background: isActive ? tab.gradient : undefined,
                          opacity: isActive ? 1 : 0,
                          borderRadius: "16px",
                        }}
                      />
                      <motion.button
                        type="button"
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl cursor-pointer text-base font-medium",
                          isActive ? `${tab.iconColor} text-foreground bg-white shadow-lg` : "text-slate-200 hover:text-white"
                        )}
                        variants={{ initial: { rotateX: 0, opacity: 1 }, hover: { rotateX: -90, opacity: 0 } }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                        tabIndex={0}
                      >
                        <span>{tab.icon}</span>
                        <span>{tab.label}</span>
                      </motion.button>
                      <motion.button
                        type="button"
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl cursor-pointer text-base font-medium",
                          isActive ? `${tab.iconColor} text-foreground bg-white shadow-lg` : "text-slate-200 hover:text-white"
                        )}
                        variants={{ initial: { rotateX: 90, opacity: 0 }, hover: { rotateX: 0, opacity: 1 } }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                        tabIndex={0}
                      >
                        <span>{tab.icon}</span>
                        <span>{tab.label}</span>
                      </motion.button>
                    </motion.div>
                  </motion.li>
                )
              })}
            </ul>
          </motion.nav>
        </div>

        {/* Showcase Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 p-8 sm:p-12">
          {/* Decorative gradient overlays */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          </div>

          {/* Conditional rendering based on active tab */}
          <div className="relative flex items-center justify-center min-h-96">
            <img
              src={tabImages[activeTab as keyof typeof tabImages] || "/placeholder.svg"}
              alt={`${tabs.find((t) => t.id === activeTab)?.label} showcase`}
              className="w-full max-w-5xl object-contain transition-opacity duration-300"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button size="lg" className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
            Try it free
          </Button>
          <FlowButton text="Book a demo" />
        </div>
      </div>
    </section>
  )
}
