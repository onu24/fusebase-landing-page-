"use client"

import React from 'react'
import { Check, Calendar, FileText, Layout, Users, Lightbulb, ArrowRight } from 'lucide-react'

export type CardVariant = 'deal' | 'partner' | 'team' | 'client' | 'workspace' | 'hub' | 'knowledge'

interface HeroPortalCardProps {
    title: string
    variant: CardVariant
    className?: string
}

// --- Pill Label ---
const PillLabel = ({ text }: { text: string }) => (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="px-6 py-2 rounded-full border border-white/40 bg-white/60 backdrop-blur-md shadow-lg">
            <span className="text-sm font-bold text-slate-800 whitespace-nowrap">{text}</span>
        </div>
    </div>
)

// --- Knowledge Base Inner UI ---
const KnowledgeContent = () => (
    <div className="h-full w-full overflow-hidden bg-white group-hover:scale-[1.02] transition-transform duration-700">
        <img
            src="/knowledge-base.png"
            alt="Knowledge Base Interface"
            className="w-full h-full object-cover object-top"
        />
    </div>
)

// --- Hub Inner UI ---
const HubContent = () => (
    <div className="h-full w-full overflow-hidden bg-white group-hover:scale-[1.02] transition-transform duration-700">
        <img
            src="/client-hub.png"
            alt="Client Discovery Hub Interface"
            className="w-full h-full object-cover object-top"
        />
    </div>
)

// --- Workspace Inner UI ---
const WorkspaceContent = () => (
    <div className="h-full w-full overflow-hidden bg-slate-900 group-hover:scale-[1.02] transition-transform duration-700">
        <img
            src="/workspace.png"
            alt="AI Workspace Interface"
            className="w-full h-full object-cover object-top"
        />
    </div>
)

// --- Client Portal Inner UI ---
const ClientPortalContent = () => (
    <div className="h-full w-full overflow-hidden bg-slate-50 group-hover:scale-[1.02] transition-transform duration-700">
        <img
            src="/client-portal.png"
            alt="Client Portal Interface"
            className="w-full h-full object-cover object-top"
        />
    </div>
)

// --- Deal Rooms Inner UI ---
const DealRoomsContent = () => (
    <div className="p-5 flex flex-col h-full bg-slate-50/30">
        <div className="flex gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <FileText size={32} />
            </div>
            <div className="flex-1 space-y-2 py-1">
                <div className="h-4 w-3/4 bg-slate-200 rounded-full" />
                <div className="h-3 w-1/2 bg-slate-100 rounded-full" />
            </div>
        </div>

        <div className="grid grid-cols-5 gap-4 flex-1">
            <div className="col-span-3 space-y-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deal submission form</div>
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-9 w-full rounded-xl border border-slate-200 bg-white flex items-center px-3">
                        <div className="h-2 w-1/3 bg-slate-100 rounded" />
                    </div>
                ))}
            </div>
            <div className="col-span-2 space-y-2">
                {["Book a meeting", "Upload document", "Review & approve", "Terms of Service"].map((text, i) => (
                    <div key={i} className={`p-2 rounded-lg text-[10px] font-semibold border flex items-center gap-2 ${i === 2 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}>
                        <div className={`w-3 h-3 rounded-sm ${i === 2 ? 'bg-white/20' : 'bg-slate-100'}`} />
                        <span className="truncate">{text}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

// --- Partner Portal Inner UI ---
const PartnerPortalContent = () => (
    <div className="h-full w-full overflow-hidden bg-slate-900 group-hover:scale-[1.02] transition-transform duration-700">
        <img
            src="/partner-portal.png"
            alt="Partner Portal Interface"
            className="w-full h-full object-cover object-top"
        />
    </div>
)

// --- Team space Inner UI ---
const TeamSpaceContent = () => (
    <div className="h-full w-full overflow-hidden bg-slate-50 group-hover:scale-[1.02] transition-transform duration-700">
        <img
            src="/team-space.png"
            alt="Team Space Interface"
            className="w-full h-full object-cover object-top"
        />
    </div>
)

export function HeroPortalCard({ title, variant, className }: HeroPortalCardProps) {
    const content = {
        deal: <DealRoomsContent />,
        partner: <PartnerPortalContent />,
        team: <TeamSpaceContent />,
        client: <ClientPortalContent />,
        workspace: <WorkspaceContent />,
        hub: <HubContent />,
        knowledge: <KnowledgeContent />
    }[variant]

    return (
        <div className={`relative group transition-all duration-500 ${className}`}>
            <PillLabel text={title} />
            <div className="rounded-[2rem] p-2.5 bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 shadow-xl overflow-hidden h-full">
                <div className="bg-white rounded-[1.75rem] h-full overflow-hidden flex flex-col border border-slate-100 shadow-inner">
                    {content}
                </div>
            </div>
        </div>
    )
}
