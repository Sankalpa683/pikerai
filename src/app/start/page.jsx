"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"

export default function WaitlistPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Pikera AI Logo" width={28} height={28} className="w-7 h-7 rounded-lg" />
              <span className="font-bold text-lg text-gray-900">Pikera AI</span>
            </Link>
          </div>

          <Link
            href="/"
            className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Home
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
            <div className="relative w-80 max-w-[85vw] bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link href="/" className="flex items-center gap-3">
                  <Image src="/logo.jpg" alt="Pikera AI Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
                  <span className="font-bold text-xl text-gray-900">Pikera AI</span>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 space-y-4">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/example"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  Examples
                </Link>
                <Link
                  href="/signin"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-72 bg-white border-r border-gray-200 fixed h-full">
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Pikera AI Logo" width={36} height={36} className="w-9 h-9 rounded-lg" />
              <span className="font-bold text-xl text-gray-900">Pikera AI</span>
            </Link>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-1">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Home
              </Link>
              <Link
                href="/pricing"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/example"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Examples
              </Link>
              <Link
                href="/signin"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Sign In
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-medium text-blue-800 mb-2">Join the Waitlist</h3>
                <p className="text-sm text-blue-700 mb-3">
                  Get early access to our AI thumbnail generator and exclusive launch offers.
                </p>
                <div className="text-xs text-blue-600">You're already on the waitlist page!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-72">
          {/* Desktop Header */}
          <header className="hidden lg:block bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/signin"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-4 lg:p-6">
            <div className="max-w-4xl mx-auto">
              {/* Waitlist Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Join the <span className="text-blue-600">Pikera AI</span> Waitlist
                </h1>
                <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
                  Be among the first to access our AI-powered thumbnail generator and receive exclusive launch offers.
                </p>
              </div>

              {/* Google Form Container */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                <div className="p-4 lg:p-6 border-b border-gray-200">
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Waitlist Registration Form</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Fill out the form below to secure your spot on our waitlist.
                  </p>
                </div>

                {/* Form Loading State */}
                {!iframeLoaded && (
                  <div className="flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                      <p className="mt-4 text-gray-600">Loading form...</p>
                    </div>
                  </div>
                )}

                {/* Google Form Iframe - Responsive Container */}
                <div className="relative overflow-hidden w-full">
                  <div className={`transition-opacity duration-300 ${iframeLoaded ? "opacity-100" : "opacity-0"}`}>
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfXO8ub-7lmMNLkiHpf3BvEZmj8gBIVgA2Vsr18sK8tqplNLg/viewform?embedded=true"
                      width="100%"
                      height="2000"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      className="mx-auto"
                      onLoad={() => setIframeLoaded(true)}
                      title="Pikera AI Waitlist Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Early access to our AI thumbnail generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Exclusive launch discounts on premium plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Regular updates on our development progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Opportunity to provide feedback and shape the product</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-4 text-gray-600 text-sm">
                    <div>
                      <p className="font-medium text-gray-800">When will I get access?</p>
                      <p>We're rolling out access in batches. You'll receive an email when it's your turn.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Is there a cost to join the waitlist?</p>
                      <p>No, joining the waitlist is completely free.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">How will I be notified?</p>
                      <p>We'll send you an email with instructions to access the platform.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 py-6 px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Pikera AI. All rights reserved.</p>
              <div className="flex items-center justify-center gap-4 mt-3">
                <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-700">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-700">
                  Terms of Service
                </Link>
                <Link href="/help" className="text-xs text-gray-500 hover:text-gray-700">
                  Help Center
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
