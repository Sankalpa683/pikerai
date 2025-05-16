import Image from "next/image"
import { Check, X } from "lucide-react"

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Save <span className="text-gray-900">Money</span> and <span className="text-gray-900">Time</span>
          </h2>
          <p className="text-gray-600 text-lg">Alternatives are expensive and time-consuming.</p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Pikera AI */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/logo.jpg" alt="Pikera AI Logo" width={32} height={32} className="w-8 rounded-full h-8" />
              <h3 className="text-xl font-bold">Pikera AI</h3>
            </div>
            <p className="text-gray-600 text-sm mb-8">AI-Powered Thumbnail Generation</p>

            {/* Features */}
            <div className="w-full space-y-4">
              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Cost Effective</h4>
                    <p className="text-gray-600 text-sm">Around $0.10 per-thumbnail</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Instant Iterations</h4>
                    <p className="text-gray-600 text-sm">Generate multiple versions instantly</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Full Ownership</h4>
                    <p className="text-gray-600 text-sm">Full thumbnail ownership "ad vitam eternam"</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">AI-Powered Creation</h4>
                    <p className="text-gray-600 text-sm">Create thumbnails in seconds with AI assistance</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Professional Designs</h4>
                    <p className="text-gray-600 text-sm">Access to 100+ design styles or customize your own</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Traditional */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs">T</span>
              </div>
              <h3 className="text-xl font-bold">Traditional</h3>
            </div>
            <p className="text-gray-600 text-sm mb-8">Manual Thumbnail Creation</p>

            {/* Drawbacks */}
            <div className="w-full space-y-4">
              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">High Production Costs</h4>
                    <p className="text-gray-600 text-sm">~$50 per-thumbnail + designer fees</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Long Feedback Cycles</h4>
                    <p className="text-gray-600 text-sm">Waiting for designer revisions & approvals</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Limited Rights</h4>
                    <p className="text-gray-600 text-sm">Restricted usage rights with stock photos</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Manual Creation</h4>
                    <p className="text-gray-600 text-sm">Hours of manual design work</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Hiring Designers</h4>
                    <p className="text-gray-600 text-sm">Limited designer availability & high costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
