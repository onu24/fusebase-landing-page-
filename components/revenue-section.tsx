"use client"

import React from 'react'
import { CircleDollarSign } from 'lucide-react'

export function RevenueSection() {
    return (
        <section className="w-full bg-white pt-10 pb-0 px-6 flex flex-col items-center overflow-hidden">
            <div className="max-w-[1120px] w-full flex flex-col items-center">

                {/* Pure Sketchy Graphic Element */}
                <div className="relative cursor-default group mb-6">
                    {/* SVG Filter for Hand-Drawn Wobble */}
                    <svg className="absolute w-0 h-0">
                        <filter id="penSketch" x="-20%" y="-20%" width="140%" height="140%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                    </svg>

                    {/* Wobbly Pen Sketch SVG */}
                    <div className="absolute inset-0 -m-10 pointer-events-none" style={{ filter: 'url(#penSketch)' }}>
                        <svg
                            viewBox="0 0 300 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full text-[#0db493]"
                        >
                            {/* Inner sketchy oval - wobbly and slightly open */}
                            <path
                                d="M20,55 C20,30 90,15 150,15 C210,15 280,30 280,55 C280,80 210,95 150,95 C90,95 20,80 20,55 M20,55 C20,45 40,30 65,22"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                className="opacity-70"
                            />
                            {/* Outer sketchy oval - double outline, extending past ends */}
                            <path
                                d="M15,50 C15,25 85,10 155,10 C225,10 285,25 285,50 C285,75 225,100 155,100 C80,100 12,85 12,50 M285,50 C285,65 250,80 210,88"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                className="opacity-90"
                            />
                            {/* Sketchy cross-over lines at ends */}
                            <path d="M10,40 Q5,50 15,65" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-50" />
                            <path d="M290,45 Q295,55 280,70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-50" />
                        </svg>
                    </div>

                    {/* Content inside the wobbly bubble */}
                    <div className="relative z-10 flex items-center gap-2.5 px-12 h-14">
                        <CircleDollarSign size={15} className="text-[#0db493]" strokeWidth={1} />
                        <span className="text-sm font-extralight text-[#0db493] tracking-[0.05em] font-sans">
                            Need more revenue?
                        </span>
                    </div>
                </div>

                {/* Main Headline - Tightly connected (24-32px gap) */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 leading-[1.15] tracking-tight max-w-3xl mb-10">
                    You worked hard to earn trust.
                    <br />
                    Now don't lose the relationship
                </h2>
            </div>
        </section>
    )
}
