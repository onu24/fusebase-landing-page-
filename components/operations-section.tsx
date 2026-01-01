import { Zap } from "lucide-react"

export function OperationsSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 border-2 border-cyan-400 rounded-full px-6 py-3 bg-white">
          <Zap className="w-5 h-5 text-cyan-500" />
          <span className="text-cyan-600 font-medium">Need to streamline operations?</span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            You team experience is also important. We got you covered!
          </h2>
        </div>
      </div>
    </section>
  )
}
