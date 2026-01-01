"use client"

import React from 'react'
import { HeroPortalCard, CardVariant } from './HeroPortalCard'

interface VerticalConveyorProps {
    items: { title: string; variant: CardVariant }[]
    direction: 'up' | 'down'
    speed?: number // duration in seconds
    className?: string
}

export function VerticalConveyor({
    items,
    direction,
    speed = 30,
    className = ""
}: VerticalConveyorProps) {
    // Duplicate items to create a seamless loop
    const displayItems = [...items, ...items]
    const animationName = direction === 'up' ? 'v-scroll-up' : 'v-scroll-down'

    return (
        <div className={`relative overflow-hidden group ${className}`}>
            <div
                className={`flex flex-col gap-12 group-hover:[animation-play-state:paused]`}
                style={{
                    animation: `${animationName} ${speed}s linear infinite`,
                }}
            >
                {displayItems.map((item, idx) => (
                    <div key={`${item.variant}-${idx}`} className="px-4">
                        <HeroPortalCard
                            title={item.title}
                            variant={item.variant}
                            className="w-full h-[320px]"
                        />
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes v-scroll-up {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-50%);
                    }
                }
                @keyframes v-scroll-down {
                    0% {
                        transform: translateY(-50%);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
