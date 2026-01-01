"use client"

import React from "react"
import {
    Search,
    Bell,
    LayoutGrid,
    Users,
    FileText,
    BarChart3,
    Settings,
    CheckCircle2,
    Download,
    Plus,
    Rocket
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PortalMockupUIProps {
    activeTab: string
}

export function PortalMockupUI({ activeTab }: PortalMockupUIProps) {
    return (
        <div className="w-full h-full bg-slate-50 rounded-[20px] shadow-2xl shadow-black/30 overflow-hidden flex flex-col border border-slate-200/50">
            {/* Top Header */}
            <header className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center text-white font-bold text-xs">F</div>
                    <span className="font-bold text-slate-800 text-sm tracking-tight">FuseBase</span>
                </div>

                <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-slate-50 border-none rounded-lg py-1.5 pl-10 pr-4 text-xs focus:ring-1 focus:ring-teal-500/30 outline-none transition-all"
                            readOnly
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Bell className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                    <div className="w-8 h-8 rounded-full bg-teal-100 border border-teal-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" alt="Emma" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-48 bg-slate-50 border-r border-slate-100 flex flex-col p-3 shrink-0">
                    <nav className="space-y-1">
                        {[
                            { icon: LayoutGrid, label: "Projects", active: true },
                            { icon: Users, label: "Team" },
                            { icon: FileText, label: "Documents" },
                            { icon: BarChart3, label: "Analytics" },
                            { icon: Settings, label: "Settings" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all group cursor-pointer",
                                    item.active ? "bg-white text-slate-900 shadow-sm border border-slate-200/50" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                                )}
                            >
                                <item.icon className={cn("w-4 h-4", item.active ? "text-teal-500" : "text-slate-400 group-hover:text-slate-600")} />
                                {item.label}
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 bg-white overflow-hidden flex flex-col">
                    <div className="p-8 overflow-y-auto custom-scrollbar">
                        {activeTab === "onboarding" ? (
                            <OnboardingView />
                        ) : activeTab === "client" ? (
                            <ClientPortalView />
                        ) : (
                            <PartnerView />
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

function OnboardingView() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-xl font-bold text-slate-900 mb-2">Onboarding for New Client: Acme Corp.</h1>
                <div className="flex items-center gap-4 max-w-xl">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">75% Complete</div>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-emerald-500 rounded-full shadow-sm shadow-emerald-200" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6">
                <div className="col-span-3 space-y-4">
                    <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 shadow-sm">
                        <h2 className="text-sm font-bold text-slate-900 mb-4">Welcome</h2>
                        <p className="text-xs text-slate-500 leading-relaxed mb-6">
                            Welcome to your FuseBase portal! Let's get you started with a few easy steps.
                        </p>

                        <div className="space-y-3">
                            {[
                                { label: "Connect Slack", done: true },
                                { label: "Upload Brand Assets", done: true },
                                { label: "Invite Team Members", done: true },
                                { label: "Review Workflow", done: false },
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className={cn("w-4 h-4", step.done ? "text-emerald-500" : "text-slate-200")} />
                                    <span className={cn("text-xs font-medium", step.done ? "text-slate-700" : "text-slate-400")}>{step.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-bold text-slate-900">Documents</h2>
                            <Plus className="w-4 h-4 text-slate-400 cursor-pointer" />
                        </div>
                        <div className="space-y-2">
                            {[
                                { name: "Service Agreement.pdf", type: "pdf", color: "text-red-500" },
                                { name: "Brand Guidelines.pdf", type: "pdf", color: "text-red-500" },
                                { name: "Project Timeline.xlsx", type: "excel", color: "text-emerald-500" },
                            ].map((doc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <FileText className={cn("w-4 h-4", doc.color)} />
                                        <span className="text-xs text-slate-600 font-medium">{doc.name}</span>
                                    </div>
                                    <Download className="w-3 h-3 text-slate-300 group-hover:text-slate-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-2 space-y-6">
                    <div className="bg-slate-50/50 border border-slate-200/50 rounded-xl p-5">
                        <h2 className="text-sm font-bold text-slate-900 mb-4">Team</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { name: "Acme Potter", role: "CEO", status: "Online" },
                                { name: "Deliver Smith", role: "Manager", status: "Online" },
                                { name: "Nolli Kemmon", role: "Designer", status: "Offline" },
                            ].map((member, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 overflow-hidden flex-shrink-0">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} alt={member.name} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[11px] font-bold text-slate-800 truncate">{member.name}</div>
                                        <div className="flex items-center gap-2">
                                            <div className={cn("w-1.5 h-1.5 rounded-full", member.status === "Online" ? "bg-emerald-500" : "bg-slate-300")} />
                                            <span className="text-[9px] text-slate-400 font-medium">{member.status}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ClientPortalView() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-slate-900">Client Portal: Tesla</h1>
                <div className="px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-full border border-teal-100 uppercase tracking-wider">Active Project</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: "Active Tasks", value: "12", sub: "+2 from yesterday", color: "text-blue-600" },
                    { label: "Hours logged", value: "148", sub: "Month to date", color: "text-emerald-600" },
                    { label: "Pending Approval", value: "3", sub: "Due tomorrow", color: "text-orange-600" },
                ].map((stat, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl shadow-sm">
                        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</div>
                        <div className={cn("text-2xl font-black mb-1", stat.color)}>{stat.value}</div>
                        <div className="text-[9px] text-slate-400 font-medium">{stat.sub}</div>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Recent Activity</h2>
                    <span className="text-[10px] text-teal-600 font-bold cursor-pointer hover:underline">View All</span>
                </div>
                <div className="divide-y divide-slate-50">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="px-4 py-3 flex items-center gap-4 hover:bg-slate-50/30 transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs font-bold text-slate-800">Wireframes_v2.fig updated</div>
                                <div className="text-[10px] text-slate-400">by Alex Rivera • 2 hours ago</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function PartnerView() {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <h1 className="text-xl font-bold text-slate-900 mb-6">Partner Space: Global Supply</h1>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl text-white shadow-lg shadow-teal-500/20">
                    <h2 className="text-sm font-bold opacity-80 mb-1">Deal Value</h2>
                    <div className="text-3xl font-black mb-4">$284,000</div>
                    <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold">
                        <Rocket className="w-3 h-3" />
                        Closing soon
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 flex flex-col justify-center text-center">
                        <div className="text-sm font-black text-slate-800 mb-1">94%</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase">CSAT Score</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 flex flex-col justify-center text-center">
                        <div className="text-sm font-black text-slate-800 mb-1">12ms</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase">Avg Response</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                    <h2 className="text-sm font-bold text-slate-900 mb-4">Milestones</h2>
                    <div className="space-y-4">
                        {[
                            { label: "Product Discovery", date: "Oct 12", done: true },
                            { label: "Technical Review", date: "Oct 24", done: true },
                            { label: "Legal Approval", date: "Nov 02", done: false },
                        ].map((m, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={cn("w-2 h-2 rounded-full", m.done ? "bg-emerald-500" : "bg-slate-200")} />
                                <div className="flex-1">
                                    <div className={cn("text-xs font-bold", m.done ? "text-slate-800" : "text-slate-400")}>{m.label}</div>
                                    <div className="text-[9px] text-slate-400">{m.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 p-5 rounded-xl shadow-xl">
                    <h2 className="text-sm font-bold text-white mb-4">Deal Pipeline</h2>
                    <div className="space-y-3">
                        {[0.8, 0.6, 0.4].map((w, i) => (
                            <div key={i} className="space-y-1">
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${w * 100}%` }}
                                        className="h-full bg-teal-400"
                                    />
                                </div>
                                <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase">
                                    <span>Phase {3 - i}</span>
                                    <span>{Math.round(w * 100)}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
