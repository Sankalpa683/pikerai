"use client"

import Image from "next/image"
import Link from "next/link"
import Nav from "../component/nav"
import { ArrowLeft, Copy, Heart, Eye } from "lucide-react"

const thumbnailExamples = [
  {
    id: 1,
    title: "MINECRAFT CASTLE BUILD",
    image: "/example-1.png",
    prompt:
      "Epic Minecraft castle build thumbnail with a massive medieval castle, dramatic lighting, excited player character pointing at the build, bold yellow text 'EPIC CASTLE BUILD', blue sky background",
    category: "Gaming",
    views: "2.3M",
    ctr: "12.4%",
  },
  {
    id: 2,
    title: "iPhone 15 HONEST REVIEW",
    image: "/example-2.png",
    prompt:
      "iPhone 15 review thumbnail with the phone prominently displayed, tech reviewer holding it with surprised expression, red and white text 'HONEST REVIEW', clean tech background with bokeh lights",
    category: "Tech",
    views: "890K",
    ctr: "9.8%",
  },
  {
    id: 3,
    title: "MORNING ROUTINE 2024",
    image: "/example-3.png",
    prompt:
      "Morning routine lifestyle thumbnail with a beautiful woman stretching in bed, golden hour lighting, cozy bedroom setting, elegant script font 'MORNING ROUTINE 2024', warm and inviting atmosphere",
    category: "Lifestyle",
    views: "1.5M",
    ctr: "11.2%",
  },
  {
    id: 4,
    title: "PYTHON IN 10 MINUTES",
    image: "/example-4.png",
    prompt:
      "Python programming tutorial thumbnail with code snippets on screen, focused programmer typing, green matrix-style background, bold white text 'LEARN PYTHON IN 10 MINUTES', tech aesthetic",
    category: "Education",
    views: "756K",
    ctr: "8.9%",
  },
  {
    id: 5,
    title: "PASSIVE INCOME SECRETS",
    image: "/example-5.png",
    prompt:
      "Business thumbnail about passive income with money symbols, successful entrepreneur in suit, luxury background, gold and black color scheme, text 'PASSIVE INCOME SECRETS', professional look",
    category: "Business",
    views: "1.2M",
    ctr: "10.7%",
  },
  {
    id: 6,
    title: "MARVEL MOVIE REACTION",
    image: "/example-6.png",
    prompt:
      "Movie reaction thumbnail with shocked facial expression, Marvel movie poster in background, popcorn and cinema elements, red and blue text 'EPIC REACTION', dramatic lighting and composition",
    category: "Entertainment",
    views: "2.1M",
    ctr: "13.5%",
  },
  {
    id: 7,
    title: "FORTNITE VICTORY ROYALE",
    image: "/example-7.png",
    prompt:
      "Fortnite victory royale thumbnail with character doing victory dance, battle royale background with storm, bright colors, explosive effects, yellow text 'VICTORY ROYALE', action-packed scene",
    category: "Gaming",
    views: "3.2M",
    ctr: "15.1%",
  },
  {
    id: 8,
    title: "BEST LAPTOP 2024",
    image: "/example-8.png",
    prompt:
      "Laptop comparison thumbnail with multiple laptops arranged, tech reviewer pointing at the best one, clean white background, blue and orange text 'BEST LAPTOP 2024', professional product shot",
    category: "Tech",
    views: "1.8M",
    ctr: "9.3%",
  },
  {
    id: 9,
    title: "HEALTHY MEAL PREP",
    image: "/example-9.png",
    prompt:
      "Meal prep thumbnail with colorful healthy meals in containers, fresh ingredients around, bright kitchen setting, green and white text 'HEALTHY MEAL PREP', appetizing food photography",
    category: "Lifestyle",
    views: "967K",
    ctr: "8.7%",
  },
  {
    id: 10,
    title: "CALCULUS EXPLAINED",
    image: "/example-10.png",
    prompt:
      "Math education thumbnail with calculus equations on blackboard, teacher pointing at formulas, academic setting, blue and white color scheme, text 'CALCULUS MADE EASY', educational atmosphere",
    category: "Education",
    views: "445K",
    ctr: "7.2%",
  },
  {
    id: 11,
    title: "CRYPTO INVESTMENT GUIDE",
    image: "/example-11.png",
    prompt:
      "Cryptocurrency investment thumbnail with Bitcoin symbols, financial charts going up, professional investor, gold and green colors, text 'CRYPTO GUIDE 2024', modern financial aesthetic",
    category: "Business",
    views: "1.4M",
    ctr: "11.8%",
  },
  {
    id: 12,
    title: "CELEBRITY GOSSIP UPDATE",
    image: "/example-12.png",
    prompt:
      "Celebrity gossip thumbnail with paparazzi-style photo, dramatic lighting, shocked expression, tabloid-style layout, pink and black text 'SHOCKING NEWS', entertainment magazine aesthetic",
    category: "Entertainment",
    views: "2.7M",
    ctr: "14.2%",
  },
  {
    id: 13,
    title: "VALORANT ACE CLUTCH",
    image: "/example-13.png",
    prompt:
      "Valorant gaming thumbnail with agent character in action pose, tactical shooter background, neon colors, explosive effects, red text 'INSANE ACE CLUTCH', competitive gaming vibe",
    category: "Gaming",
    views: "1.9M",
    ctr: "12.8%",
  },
  {
    id: 14,
    title: "AI TOOLS TESTED",
    image: "/example-14.png",
    prompt:
      "AI tools review thumbnail with futuristic interface, robot elements, tech reviewer with amazed expression, blue and purple gradient, text 'AI TOOLS TESTED', sci-fi aesthetic",
    category: "Tech",
    views: "1.1M",
    ctr: "10.4%",
  },
  {
    id: 15,
    title: "FITNESS TRANSFORMATION",
    image: "/example-15.png",
    prompt:
      "Fitness transformation thumbnail with before/after split screen, muscular person flexing, gym background, motivational text 'AMAZING TRANSFORMATION', orange and black colors, inspiring mood",
    category: "Lifestyle",
    views: "2.5M",
    ctr: "13.9%",
  },
  {
    id: 16,
    title: "JAVASCRIPT CRASH COURSE",
    image: "/example-16.png",
    prompt:
      "JavaScript programming thumbnail with code editor on screen, developer typing rapidly, dark theme IDE, yellow JavaScript logo, text 'JS CRASH COURSE', modern coding setup",
    category: "Education",
    views: "823K",
    ctr: "9.1%",
  },
  {
    id: 17,
    title: "DROPSHIPPING SUCCESS",
    image: "/example-17.png",
    prompt:
      "Dropshipping business thumbnail with packages and shipping boxes, successful entrepreneur with laptop, money symbols, green and gold colors, text 'DROPSHIPPING SECRETS', e-commerce theme",
    category: "Business",
    views: "1.6M",
    ctr: "12.3%",
  },
  {
    id: 18,
    title: "MUSIC VIDEO REACTION",
    image: "/example-18.png",
    prompt:
      "Music reaction thumbnail with headphones on, emotional facial expression, music notes floating around, colorful background, text 'FIRST TIME HEARING', vibrant and energetic mood",
    category: "Entertainment",
    views: "1.3M",
    ctr: "11.6%",
  },
  {
    id: 19,
    title: "APEX LEGENDS WIN",
    image: "/example-19.png",
    prompt:
      "Apex Legends thumbnail with champion character, battle royale arena background, victory celebration, orange and blue colors, text 'CHAMPION SQUAD', competitive gaming atmosphere",
    category: "Gaming",
    views: "2.8M",
    ctr: "14.7%",
  },
  {
    id: 20,
    title: "GADGET UNBOXING",
    image: "/example-20.png",
    prompt:
      "Tech unboxing thumbnail with hands opening premium package, luxury gadget inside, clean white background, excited reviewer face, text 'UNBOXING EXPERIENCE', premium product reveal",
    category: "Tech",
    views: "1.7M",
    ctr: "10.9%",
  },
  {
    id: 21,
    title: "TRAVEL VLOG BALI",
    image: "/example-21.png",
    prompt:
      "Bali travel vlog thumbnail with beautiful beach sunset, traveler with backpack, tropical paradise setting, warm colors, text 'BALI ADVENTURE', wanderlust and adventure theme",
    category: "Lifestyle",
    views: "2.2M",
    ctr: "12.1%",
  },
  {
    id: 22,
    title: "PHYSICS EXPLAINED",
    image: "/example-22.png",
    prompt:
      "Physics education thumbnail with scientific diagrams, laboratory setting, professor explaining concepts, blue and white academic colors, text 'PHYSICS MADE SIMPLE', educational and clear",
    category: "Education",
    views: "634K",
    ctr: "8.3%",
  },
]

export default function ExamplesPage() {
  const copyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt)
    // You could add a toast notification here
  }

  return (
    <div className="min-h-screen bg-white">
        <Nav />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thumbnail <span className="text-blue-600">Examples</span> & Prompts
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore real thumbnails created with Pikera AI and the exact prompts used to generate them. Get inspired and
            copy prompts to create your own viral thumbnails.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">22+</div>
            <div className="text-gray-600">Example Thumbnails</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">11.2%</div>
            <div className="text-gray-600">Average CTR</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-red-600 mb-2">35M+</div>
            <div className="text-gray-600">Total Views</div>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {thumbnailExamples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail Image */}
              <div className="aspect-video relative group">
                <Image
                  src={example.image || "/placeholder.svg?height=360&width=640"}
                  alt={example.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">{example.title}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {example.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{example.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{example.ctr} CTR</span>
                  </div>
                </div>

                {/* Prompt */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Prompt Used:</h4>
                  <div className="bg-gray-50 rounded-lg p-4 relative">
                    <p className="text-gray-700 text-sm leading-relaxed pr-8">"{example.prompt}"</p>
                    <button
                      onClick={() => copyPrompt(example.prompt)}
                      className="absolute top-3 right-3 p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors"
                      title="Copy prompt"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => copyPrompt(example.prompt)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Copy Prompt
                  </button>
                  <Link
                    href="/create"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  >
                    Use Template
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Use these prompts as inspiration or create completely new thumbnails with Pikera AI. Start generating viral
            thumbnails in seconds.
          </p>
          <Link
            href="/create"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            Start Creating Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Pikera AI, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
