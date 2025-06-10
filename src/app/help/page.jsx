"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle,
  HelpCircle,
  Search,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Send,
} from "lucide-react"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create my first thumbnail?",
        answer:
          "Simply sign in to your account, go to the prompting page, and describe your thumbnail idea in detail. Our AI will generate multiple variations for you to choose from.",
      },
      {
        question: "What makes a good thumbnail prompt?",
        answer:
          "Be specific about the style, colors, text, emotions, and elements you want. For example: 'Gaming thumbnail with excited player, bright colors, bold text saying EPIC WIN, Minecraft background'.",
      },
      {
        question: "How many thumbnails can I generate?",
        answer:
          "This depends on your plan. Basic plan includes 50 thumbnails/month, Pro plan includes 200 thumbnails/month, and Business plan includes unlimited thumbnails.",
      },
    ],
  },
  {
    category: "Account & Billing",
    questions: [
      {
        question: "How do I upgrade my plan?",
        answer:
          "Go to the Pricing page and select your desired plan. You can upgrade or downgrade at any time, and changes take effect at your next billing cycle.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel anytime from your account settings. You'll continue to have access until the end of your current billing period.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 14-day money-back guarantee if you're not satisfied with our service. Contact support for assistance.",
      },
    ],
  },
  {
    category: "Technical Issues",
    questions: [
      {
        question: "Why is my thumbnail generation taking so long?",
        answer:
          "Generation typically takes 10-30 seconds. If it's taking longer, try refreshing the page or contact support if the issue persists.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "We generate thumbnails in PNG format at 1920x1080 resolution (1080p) for Pro plans and 4K for Business plans.",
      },
      {
        question: "Can I edit thumbnails after generation?",
        answer:
          "Currently, you can regenerate with modified prompts. We're working on an editing feature that will be available soon.",
      },
    ],
  },
]

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@pikeraai.com",
    responseTime: "Usually within 24 hours",
    available: "24/7",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available in app",
    responseTime: "Usually within 1 hour",
    available: "Mon-Fri, 9AM-6PM PST",
  },
  {
    icon: Phone,
    title: "Priority Support",
    description: "For Business plan customers",
    contact: "+1 (555) 123-4567",
    responseTime: "Immediate response",
    available: "Business hours",
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFaq, setOpenFaq] = useState(null)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFaqToggle = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Contact form submitted:", contactForm)
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        priority: "normal",
      })
    }, 3000)
  }

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-6 w-px bg-gray-300"></div>
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.jpg" alt="Pikera AI Logo" width={36} height={36} className="w-9 h-9 rounded-lg" />
                <span className="font-bold text-xl text-gray-900">Pikera AI</span>
              </Link>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/pricing" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link
                href="/signin"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How can we <span className="text-blue-600">help</span> you?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get quick answers to common questions or reach out to our support team for personalized assistance.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">&lt; 1 Hour</h3>
              <p className="text-gray-600">Average response time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Customer satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Support availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">Choose the best way to reach our support team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">Contact:</span>
                    <span className="text-sm text-gray-900 font-medium">{method.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">Response:</span>
                    <span className="text-sm text-gray-900">{method.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">Available:</span>
                    <span className="text-sm text-gray-900">{method.available}</span>
                  </div>
                </div>

                <button className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  {method.title === "Email Support"
                    ? "Send Email"
                    : method.title === "Live Chat"
                      ? "Start Chat"
                      : "Call Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {category.category}
                </h3>

                <div className="space-y-3">
                  {category.questions.map((faq, questionIndex) => {
                    const faqId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openFaq === faqId

                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => handleFaqToggle(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          {isOpen ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-4 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            {searchQuery && filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any FAQs matching "{searchQuery}". Try a different search term or contact our support
                  team.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-gray-600 text-lg">Send us a message and we'll get back to you as soon as possible</p>
            </div>

            {formSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    value={contactForm.priority}
                    onChange={(e) => setContactForm({ ...contactForm, priority: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="normal">Normal - Standard support</option>
                    <option value="high">High - Urgent issue</option>
                    <option value="critical">Critical - Service down</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-gray-600 text-lg">Explore more ways to get the most out of Pikera AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/examples" className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <ExternalLink className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Example Gallery</h3>
              <p className="text-gray-600 text-sm">Browse thumbnail examples and prompts</p>
            </Link>

            <Link href="/pricing" className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <ExternalLink className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Pricing Plans</h3>
              <p className="text-gray-600 text-sm">Compare features and pricing</p>
            </Link>

            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <ExternalLink className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm">Learn with step-by-step guides</p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <ExternalLink className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Join our Discord community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/logo.jpg" alt="Pikera AI Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl text-gray-900">Pikera AI</span>
          </div>
          <p className="text-gray-600 mb-6">Creating scroll-stopping YouTube thumbnails with AI since 2024</p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
            <span>&copy; {new Date().getFullYear()} Pikera AI, Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
