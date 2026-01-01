"use client"

import React from 'react'
import { VerticalConveyor } from './VerticalConveyor'
import { CardVariant } from './HeroPortalCard'

const LEFT_CARDS: { title: string; variant: CardVariant }[] = [
    { title: "Client Portal", variant: "client" },
    { title: "Partner Portal", variant: "partner" },
    { title: "Team space", variant: "hub" },
]

const RIGHT_CARDS: { title: string; variant: CardVariant }[] = [
    { title: "Team space", variant: "team" },
    { title: "Client Portal", variant: "knowledge" },
    { title: "Partner Portal", variant: "workspace" },
]

export function HeroDualVerticalConveyors() {
    return (
        <div className="relative w-full h-[650px] overflow-hidden">
            {/* Soft Gradient Masks */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 h-full">
                {/* Left Belt: Scrolls UP, slightly slower */}
                <div className="relative">
                    <VerticalConveyor
                        items={LEFT_CARDS}
                        direction="up"
                        speed={35}
                        className="h-full"
                    />
                </div>

                {/* Right Belt: Scrolls DOWN, staggered down, slightly faster */}
                <div className="relative md:translate-y-24">
                    <VerticalConveyor
                        items={RIGHT_CARDS}
                        direction="down"
                        speed={28}
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    )
}
