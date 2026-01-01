"use client"

import { CheckCircle2, Clock, Rocket, TrendingUp } from "lucide-react"

export function ImpactSection() {
  const impacts = [
    {
      icon: CheckCircle2,
      percentage: "80%",
      title: "Faster compliance",
      description: "Minimize efforts in tracking compliance",
    },
    {
      icon: Clock,
      percentage: "70-50%",
      title: "Time-Saving",
      description: "Cut down the time spent on generating process docs",
    },
    {
      icon: Rocket,
      percentage: "60%",
      title: "Faster execution",
      description: "Reduces execution time with automated workflows",
    },
    {
      icon: TrendingUp,
      percentage: "50%",
      title: "Quicker training",
      description: "Accelerate employee training with guided assistance",
    },
  ]

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-400 rounded-full">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-semibold">Real results</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-4">AI Agents impact</h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Achieve measurable improvements in execution, compliance, and training
        </p>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-gray-800" />
                </div>

                <div className="mb-4">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900">{impact.percentage}</p>
                </div>

                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{impact.title}</h3>
                </div>

                <p className="text-gray-600 text-sm">{impact.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
