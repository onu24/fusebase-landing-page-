"use client"

import { Check, Briefcase, Layers, Users } from "lucide-react"

export function FeaturesComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Internal Workspace Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-6">
              <Briefcase className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Internal Workspace</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Stay organized, aligned, and productive with everything your team needs in one place
            </p>

            <h4 className="font-semibold text-gray-900 mb-4 text-sm">What you get:</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Sales Portal</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Process Portal</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Centralized Hub</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Internal Knowledge Base</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Real-Time Collaboration</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Secure File Storage</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Video Recording & Transcription</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Meeting Notes with Context</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Fast Search & Organization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Client-Ready Sharing</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Tool Integrations</span>
              </div>
            </div>
          </div>

          {/* AI Agents Card - Elevated/Highlighted */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 md:transform md:-translate-y-4">
            <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-6">
              <Layers className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Agents</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              AI that lives inside your everyday tools — answers questions, takes action, and does the busywork for you
            </p>

            <h4 className="font-semibold text-gray-900 mb-4 text-sm">What you get:</h4>
            <div className="space-y-3 mb-8 text-gray-600 text-sm">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>Works Where You Work</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>Internal & External Workspaces</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>Real Answers from Your Content</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>Automates Busywork</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>Screen-Aware & Prompt-Driven</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>Custom or Prebuilt Agents</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>External Agent Access</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>Synced with Your Stack</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>On-Brand, On-Point</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span>No Extra Tools Needed</span>
              </div>
            </div>

            {/* Robot illustration */}
            <div className="flex justify-center mt-8">
              <span className="text-6xl">🤖</span>
            </div>
          </div>

          {/* External Workspace Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-6">
              <Users className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">External Workspace</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Deliver a seamless client experience with custom-branded portals, real-time updates, and secure file
              sharing
            </p>

            <h4 className="font-semibold text-gray-900 mb-4 text-sm">What you get:</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Partner or Vendor Portal</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Client Portal / Branded Client Portals</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">External Knowledge Base</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Drag-and-Drop Page Builder</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Mutual Action Plans & Task Lists</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Built-in CRM</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Built-In E-signatures</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Forms & Surveys</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Secure File Sharing</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Meeting Notes & Videos</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Live Chat with Clients</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Client Analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>White-Label & SMTP Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
