import Image from "next/image"
import { UserCircle2, Wand2, Share2 } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Create Thumbnails. At <span className="text-red-500">Lightspeed</span>.
          </h2>
          <p className="text-gray-600 text-lg">You're 30 seconds from your first viral thumbnail.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6 aspect-[5/3] relative rounded-lg overflow-hidden bg-gray-100">
              <img 
                src="/thumbnails/loginacc.png" 
                alt="Describe your thumbnail" 
                fill 
                className="object-full w-full h-full"
              />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <UserCircle2 className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-bold text-xl">1.  Create Your Account</h3>
            </div>
            <p className="text-gray-600">
             Enter your details to get started with your account — it only takes a minute to unlock everything Pikera has to offer.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6 aspect-[5/3] relative rounded-lg overflow-hidden bg-gray-100">
              <img 
                src="/thumbnails/ideaconcept.png" 
                alt="AI generates thumbnails" 
                fill 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center">
                <Wand2 className="w-4 h-4 text-yellow-500" />
              </div>
              <h3 className="font-bold text-xl">2. Describe Your Idea</h3>
            </div>
            <p className="text-gray-600">
              Enter a detailed prompt describing your thumbnail concept, target audience, and style preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-6 aspect-[5/3] relative rounded-lg overflow-hidden bg-gray-100">
              <img 
                src="/thumbnails/youredone.png" 
                alt="Download and use" 
                fill 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <Share2 className="w-4 h-4 text-green-500" />
              </div>
              <h3 className="font-bold text-xl">3. Amigo, You're Done!</h3>
            </div>
            <p className="text-gray-600">
              Download your favorite thumbnail in high resolution and upload directly to YouTube for instant impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
