import Image from "next/image"
import Link from "next/link"
import { Check, X, Star, Zap, Rocket } from "lucide-react"
import Nav from "../component/nav"
import Footer from "../component/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen text-black bg-white">
      {/* Navigation */}
      <Nav />

      {/* Pricing Section */}
      <main className="container mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-gray-600 text-lg">No hidden fees. Cancel anytime.</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm font-medium">Monthly</button>
            <button className="px-6 py-2 rounded-full text-gray-700 font-medium">
              Yearly <span className="text-xs text-blue-600 ml-1">Save up to 17%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold">Basic</h2>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold">$9</span>
              <span className="text-gray-600">/month</span>
              <p className="text-sm text-gray-500 mt-1">Billed monthly</p>
            </div>

            <button className="w-full py-3 border border-gray-300 rounded-full font-medium mb-8 hover:bg-gray-100 transition-colors">
              Select Plan
            </button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>50 AI thumbnails per month</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>5 thumbnail styles</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>Basic text customization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>720p resolution export</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>Email support</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-500">Background removal</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-500">Brand kit integration</span>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 rounded-2xl p-8 border border-blue-700 text-white relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-medium text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" />
              Most Popular
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <h2 className="text-xl font-bold">Pro</h2>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-blue-200">/month</span>
              <p className="text-sm text-blue-200 mt-1">Billed monthly</p>
            </div>

            <button className="w-full py-3 bg-white text-blue-600 rounded-full font-medium mb-8 hover:bg-blue-50 transition-colors">
              Get Started
            </button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <span>200 AI thumbnails per month</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <span>20 thumbnail styles</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <span>Advanced text customization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <span>1080p resolution export</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <span>Priority email support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <span>Background removal</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-blue-200">Brand kit integration</span>
              </div>
            </div>
          </div>

          {/* Business Plan */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold">Business</h2>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold">$79</span>
              <span className="text-gray-600">/month</span>
              <p className="text-sm text-gray-500 mt-1">Billed monthly</p>
            </div>

            <button className="w-full py-3 border border-gray-300 rounded-full font-medium mb-8 hover:bg-gray-100 transition-colors">
              Select Plan
            </button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>Unlimited AI thumbnails</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>All thumbnail styles</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>Premium text customization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>4K resolution export</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>Dedicated support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>Background removal</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>Brand kit integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Compare Plans</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-500">Features</th>
                  <th className="text-center py-4 px-4 font-medium">Basic</th>
                  <th className="text-center py-4 px-4 font-medium text-blue-600">Pro</th>
                  <th className="text-center py-4 px-4 font-medium">Business</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Monthly thumbnails</td>
                  <td className="py-4 px-4 text-center">50</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">200</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Thumbnail styles</td>
                  <td className="py-4 px-4 text-center">5</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">20</td>
                  <td className="py-4 px-4 text-center">All (50+)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Export resolution</td>
                  <td className="py-4 px-4 text-center">720p</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">1080p</td>
                  <td className="py-4 px-4 text-center">4K</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Background removal</td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Brand kit integration</td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">AI prompt complexity</td>
                  <td className="py-4 px-4 text-center">Basic</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">Advanced</td>
                  <td className="py-4 px-4 text-center">Premium</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Support</td>
                  <td className="py-4 px-4 text-center">Email</td>
                  <td className="py-4 px-4 text-center font-medium text-blue-600">Priority</td>
                  <td className="py-4 px-4 text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your
                next billing cycle.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Do unused thumbnails roll over to the next month?</h3>
              <p className="text-gray-600">
                No, unused thumbnails don't roll over. Your allocation resets at the beginning of each billing cycle.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and Apple Pay. Enterprise customers can request invoice
                payment.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, we offer a 7-day free trial on all plans. No credit card required to start your trial.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 14-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create scroll-stopping thumbnails?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of creators who are boosting their click-through rates with Pikera AI.
          </p>
          <Link
            href="/start"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Start Your Free Trial
          </Link>
          <p className="text-blue-200 text-sm mt-4">No credit card required</p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
