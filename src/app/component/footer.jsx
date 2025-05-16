import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpg" alt="Pikera AI Logo" width={32} height={32} className="w-8 rounded-full h-8" />
              <span className="font-bold text-lg">Pikera AI</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Create scroll-stopping YouTube thumbnails for your channel in seconds with our AI-powered thumbnail
              generator platform.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-6 mb-4">Affiliate</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/affiliate-program" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Tools */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-6">
              <a href="mailto:contact@pikeraai.com" className="hover:text-gray-900 transition-colors">
                contact@pikeraai.com
              </a>
            </p>

            <h3 className="font-semibold text-gray-800 mb-4">Free Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tools/roi-calculator"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Pikera AI, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
