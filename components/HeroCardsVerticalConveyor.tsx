"use client"

import React from 'react'
import { HeroPortalCard, CardVariant } from './HeroPortalCard'

const CARDS: { title: string; variant: CardVariant }[] = [
    { title: "Deal Rooms", variant: "deal" },
    { title: "Partner Portal", variant: "partner" },
    { title: "Team space", variant: "team" },
]

export function HeroCardsVerticalConveyor() {
    // Duplicate the cards array to create a seamless loop
    const displayCards = [...CARDS, ...CARDS]

    return (
        <div className="relative w-full h-[600px] overflow-hidden group">
            {/* Gradient Mask for top and bottom */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />

            <div
                className="flex flex-col gap-12 animate-v-scroll group-hover:[animation-play-state:paused]"
                style={{
                    animation: 'v-scroll 30s linear infinite',
                }}
            >
                {displayCards.map((card, idx) => (
                    <div key={`${card.variant}-${idx}`} className="px-4">
                        <HeroPortalCard
                            title={card.title}
                            variant={card.variant}
                            className="w-full max-w-[400px] mx-auto h-[320px]"
                        />
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes v-scroll {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-50%);
                    }
                }
                .animate-v-scroll {
                    animation: v-scroll 30s linear infinite;
                }
            `}</style>
        </div>
    )
}
