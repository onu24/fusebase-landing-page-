"use client"

export function TrustSection() {
  return (
    <section className="w-full bg-white pt-0 pb-14 px-4">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center justify-center">
        {/* 3-column card grid with 24px gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card placeholders - these would be your actual trust/feature cards */}
          <div className="bg-slate-50 rounded-lg p-6 min-h-[200px]">
            {/* Card content */}
          </div>
          <div className="bg-slate-50 rounded-lg p-6 min-h-[200px]">
            {/* Card content */}
          </div>
          <div className="bg-slate-50 rounded-lg p-6 min-h-[200px]">
            {/* Card content */}
          </div>
        </div>
      </div>
    </section>
  )
}
