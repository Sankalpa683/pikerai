"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

const categories = [
  {
    id: "gaming",
    name: "Gaming",
    thumbnails: [
      { id: 1, title: "EPIC MINECRAFT BUILD!", image: "/category/gaming-1.png" },
      { id: 2, title: "FORTNITE WIN STREAK", image: "/category/gaming-2.png" },
      { id: 3, title: "VALORANT ACE CLUTCH", image: "/category/gaming-3.png" },
      { id: 4, title: "APEX LEGENDS TIPS", image: "/category/gaming-4.png" },
      { id: 5, title: "COD WARZONE WINS", image: "/category/gaming-5.png" },
      { id: 6, title: "ROCKET LEAGUE GOALS", image: "/category/gaming-6.png" },
    ],
  },
  {
    id: "tech",
    name: "Tech Reviews",
    thumbnails: [
      { id: 1, title: "iPhone 15 REVIEW!", image: "/category/tech-1.png" },
      { id: 2, title: "BEST LAPTOP 2024", image: "/category/tech-2.png" },
      { id: 3, title: "AI TOOLS TESTED", image: "/category/tech-3.png" },
      { id: 4, title: "CAMERA COMPARISON", image: "/category/tech-4.png" },
      { id: 5, title: "GADGET UNBOXING", image: "/category/tech-5.png" },
      { id: 6, title: "TECH PREDICTIONS", image: "/category/tech-6.png" },
    ],
  },
  {
    id: "lifestyle",
    name: "Documentary",
    thumbnails: [
      { id: 1, title: "MORNING ROUTINE 2024", image: "/category/lifestyle-1.png" },
      { id: 2, title: "HOME MAKEOVER", image: "/category/lifestyle-2.png" },
      { id: 3, title: "HEALTHY RECIPES", image: "/category/lifestyle-3.png" },
      { id: 4, title: "FITNESS JOURNEY", image: "/category/lifestyle-4.png" },
      { id: 5, title: "TRAVEL VLOG", image: "/category/lifestyle-5.png" },
      { id: 6, title: "SELF CARE TIPS", image: "/category/lifestyle-6.png" },
    ],
  },
  {
    id: "education",
    name: "Education",
    thumbnails: [
      { id: 1, title: "Calculus EXPLAINED", image: "/category/education-1.png" },
      { id: 2, title: "MATH MADE EASY", image: "/category/education-2.png" },
      { id: 3, title: "HISTORY FACTS", image: "/category/education-3.png" },
      { id: 4, title: "CODING TUTORIAL", image: "/category/education-4.png" },
      { id: 5, title: "LANGUAGE LEARNING", image: "/category/education-5.png" },
      { id: 6, title: "STUDY TIPS", image: "/category/education-6.png" },
    ],
  },
  {
    id: "business",
    name: "Business",
    thumbnails: [
      { id: 1, title: "STARTUP SUCCESS", image: "/category/business-1.png" },
      { id: 2, title: "MARKETING TIPS", image: "/category/business-2.png" },
      { id: 3, title: "PASSIVE INCOME", image: "/category/business-3.png" },
      { id: 4, title: "INVESTMENT GUIDE", image: "/category/business-4.png" },
      { id: 5, title: "ENTREPRENEUR LIFE", image: "/category/business-5.png" },
      { id: 6, title: "BUSINESS GROWTH", image: "/category/business-6.png" },
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    thumbnails: [
      { id: 1, title: "MOVIE REACTIONS", image: "/entertainment-1.png" },
      { id: 2, title: "COMEDY SKITS", image: "/entertainment-2.png" },
      { id: 3, title: "MUSIC COVERS", image: "/entertainment-3.png" },
      { id: 4, title: "CELEBRITY NEWS", image: "/entertainment-4.png" },
      { id: 5, title: "VIRAL TRENDS", image: "/entertainment-5.png" },
      { id: 6, title: "BEHIND SCENES", image: "/entertainment-6.png" },
    ],
  },
]

export default function ThumbnailCategories() {
  const [activeCategory, setActiveCategory] = useState("gaming")

  const currentThumbnails = categories.find((cat) => cat.id === activeCategory)?.thumbnails || []

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thumbnails for <span className="text-blue-600">Every</span> Niche
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore AI-generated thumbnails across different categories. See how Pikera AI adapts to your content style.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentThumbnails.map((thumbnail) => (
            <div
              key={thumbnail.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={thumbnail.image || "/placeholder.svg?height=180&width=320"}
                  alt={thumbnail.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-black ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    {categories.find((cat) => cat.id === activeCategory)?.name}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Use Template →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
