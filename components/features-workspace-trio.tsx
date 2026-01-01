    import { Briefcase, Users, Bot, Check } from "lucide-react";
      import { FlowButton } from "@/components/FlowButton"

export function FeaturesWorkspaceTrio() {
  return (
    <section className="w-full py-16 bg-[#f9fbfd]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Internal Workspace */}
        <div className="rounded-2xl shadow bg-white px-7 pt-7 pb-8 border border-gray-100 flex flex-col">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-orange-100 text-orange-600 text-2xl mb-5">
            <span role="img" aria-label="internal">📁</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Internal Workspace</h3>
          <p className="text-gray-700 text-sm mb-4">
            Stay organized, aligned, and productive with everything your team needs in one place
          </p>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">What you get:</h4>
          <ul className="mb-4 space-y-2 text-base">
            <li className="flex items-center gap-2 font-semibold text-orange-900"><Briefcase className="w-4 h-4 text-orange-500" />Sales Portal</li>
            <li className="flex items-center gap-2 font-semibold text-orange-900"><Briefcase className="w-4 h-4 text-orange-500" />Process Portal</li>
            <li className="flex items-center gap-2 font-semibold text-orange-900"><Briefcase className="w-4 h-4 text-orange-500" />Centralized Hub</li>
            <li className="flex items-center gap-2 font-semibold text-orange-900"><Briefcase className="w-4 h-4 text-orange-500" />Internal Knowledge Base</li>
          </ul>
          <hr className="mb-4 mt-2 border-slate-200" />
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Real-Time Collaboration</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Secure File Storage</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Video Recording & Transcription</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Meeting Notes with Context</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Fast Search & Organization</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Client-Ready Sharing</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Tool Integrations</li>
          </ul>
        </div>

        {/* AI Agents */}
        <div className="rounded-2xl shadow-lg border border-gray-100 bg-white px-7 pt-7 pb-8 flex flex-col relative z-10 md:-translate-y-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-purple-100 text-purple-700 text-2xl mb-5">
            <span role="img" aria-label="ai agents">🪄</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">AI Agents</h3>
          <p className="text-gray-700 text-sm mb-4">
            AI that lives inside your everyday tools — answers questions, takes action, and does the busywork for you
          </p>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">What you get:</h4>
          <ul className="mb-4 space-y-2 text-base text-gray-900">
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>Works Where You Work</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>Internal & External Workspaces</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>Real Answers from Your Content</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>Automates Busywork</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>Screen-Aware & Prompt-Driven</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>Custom or Prebuilt Agents</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>External Agent Access</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>Synced with Your Stack</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>On-Brand, On-Point</span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 w-4 h-4 text-purple-600" /><span>No Extra Tools Needed</span></li>
          </ul>
          <div className="flex flex-1 items-end justify-center mt-10">
            {/* Replace with SVG/robot if desired */}
            <svg width="90" height="78" viewBox="0 0 90 78" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="45" cy="39" r="38" fill="#f5f3ff"/><ellipse cx="45" cy="53.5" rx="19" ry="12.5" fill="#fff" stroke="#ccc"/><ellipse cx="45" cy="36" rx="15" ry="15" fill="#fff" stroke="#ccc"/><ellipse cx="41.5" cy="35.5" rx="2.5" ry="3.5" fill="#292524"/><ellipse cx="48.5" cy="35.5" rx="2.5" ry="3.5" fill="#292524"/><rect x="42" y="43" width="6" height="2" rx="1" fill="#BBB"/></svg>
          </div>
        </div>

        {/* External Workspace */}
        <div className="rounded-2xl shadow bg-white px-7 pt-7 pb-8 border border-gray-100 flex flex-col">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-green-100 text-green-600 text-2xl mb-5">
            <span role="img" aria-label="external">🧑‍💼</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">External Workspace</h3>
          <p className="text-gray-700 text-sm mb-4">
            Deliver a seamless client experience with custom-branded portals, real-time updates, and secure file sharing
          </p>
          <h4 className="font-semibold text-sm text-gray-900 mb-3">What you get:</h4>
          <ul className="mb-4 space-y-2 text-base">
            <li className="flex items-center gap-2 font-semibold text-green-900"><Users className="w-4 h-4 text-green-600" />Partner or Vendor Portal</li>
            <li className="flex items-center gap-2 font-semibold text-green-900"><Users className="w-4 h-4 text-green-600" />Client Portal / Branded Client Portals</li>
            <li className="flex items-center gap-2 font-semibold text-green-900"><Users className="w-4 h-4 text-green-600" />External Knowledge Base</li>
          </ul>
          <hr className="mb-4 mt-2 border-slate-200" />
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Drag-and-Drop Page Builder</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Mutual Action Plans & Task Lists</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Built-in CRM</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Built-In E-signatures</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Forms & Surveys</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Secure File Sharing</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Meeting Notes & Videos</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Live Chat with Clients</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />Client Analytics</li>
            <li className="flex gap-2 items-start"><Check className="mt-0.5 w-4 h-4 text-gray-400" />White-Label & SMTP Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
