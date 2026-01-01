"use client"

import { ChevronDown } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-24">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-5 gap-8 mb-16">
          {/* OUR SOLUTIONS */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">Our Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Mid-size companies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  AI Agents (apps)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Client portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Deal rooms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  White label
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Knowledge base
                </a>
              </li>
            </ul>
          </div>

          {/* PLANS & PRICING */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">Plans & Pricing</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* ENTERPRISE SECURITY */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">Enterprise Security</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Trust Center
                  <br />
                  <span className="text-xs text-gray-400">(HIPAA & SOC 2)</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Terms & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  GDPR
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY & CONTACTS */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">Company & Contacts</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* COMPARE WITH */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">Compare With</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  SharePoint
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Moxo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Notion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Confluence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Asana
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Airtable
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Monday
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition font-medium">
                  See all
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex items-center justify-between gap-8">
            {/* Logo and Language */}
            <div className="flex items-center gap-8">
              <div className="text-xs font-semibold">
                FUSEBASE | FORMERLY
                <br />
                NIMBUS
              </div>
              <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
                English
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Certification Badges */}
            <div className="flex items-center gap-4">
              {/* SOC 2 Badge */}
              <div className="w-32 h-32 rounded-full border-4 border-yellow-500 bg-blue-600 flex flex-col items-center justify-center text-center">
                <div className="text-lg font-bold">SOC 2</div>
                <div className="text-xs">Type 2</div>
                <div className="text-xs mt-1">Monitored by</div>
                <div className="text-xs font-semibold">Delve</div>
              </div>

              {/* HIPAA Badge */}
              <div className="w-32 h-32 rounded-full border-4 border-yellow-500 bg-blue-600 flex flex-col items-center justify-center text-center">
                <div className="text-lg font-bold">HIPAA</div>
                <div className="text-xs mt-2">Monitored by</div>
                <div className="text-xs font-semibold">Delve</div>
              </div>
            </div>

            {/* Awards Section */}
            <div className="flex flex-col items-center gap-3">
              {/* Product Hunt */}
              <div className="bg-white rounded px-3 py-2 text-center">
                <div className="text-xs font-bold text-orange-500">PRODUCT HUNT</div>
                <div className="text-sm font-bold text-gray-900">#1 Product of the Year</div>
              </div>

              {/* Award Badges */}
              <div className="flex gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-yellow-400 bg-yellow-50 flex items-center justify-center text-xs font-bold text-center">
                  <span className="text-xs">
                    Easiest
                    <br />
                    Admin
                    <br />
                    <span className="text-yellow-600">2025</span>
                  </span>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-orange-400 bg-orange-50 flex items-center justify-center text-xs font-bold text-center">
                  <span className="text-xs">
                    Customers
                    <br />
                    Love Us
                    <br />
                    <span className="text-orange-600">2025</span>
                  </span>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-red-400 bg-red-50 flex items-center justify-center text-xs font-bold text-center">
                  <span className="text-xs">
                    Easiest
                    <br />
                    To Use
                    <br />
                    <span className="text-red-600">2025</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
