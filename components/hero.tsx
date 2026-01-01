import { Button } from "@/components/ui/button"
import { FlowButton } from "@/components/FlowButton"
import { HeroDualVerticalConveyors } from "./HeroDualVerticalConveyors"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-50 to-cyan-50 px-6 py-20 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="flex items-center p-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm w-fit group cursor-default transition-all duration-300 hover:border-primary/30">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0db493] to-[#0a8d73] px-3 py-1">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">AI-powered</span>
              </span>
              <span className="mx-3 text-xs sm:text-sm font-semibold text-slate-700 tracking-tight">Solutions for Client-Facing businesses</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Secure, AI-powered Portals for Teams, Clients & Partners
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
              Your team needs Project Management, but your clients and partners hate it.{" "}
              <span className="text-teal-600 font-semibold">We solved that!</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-8 py-3 font-semibold"
              >
                Try it free
              </Button>
              <FlowButton text="Book a demo" />
            </div>
          </div>

          {/* Right Side - Product Dual Vertical Conveyors */}
          <div className="relative lg:min-w-[500px]">
            <HeroDualVerticalConveyors />
          </div>
        </div>
      </div>
    </section>
  )
}
