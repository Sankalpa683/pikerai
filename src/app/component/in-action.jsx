"use client"
import { useState } from "react"
import { Play } from "lucide-react"

export default function InAction() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoId = "yBY5yYMUwhg" // Replace with your actual YouTube video ID

  const handlePlayClick = () => {
    setVideoPlaying(true)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See <span className="text-blue-500">Pikera AI</span> in Action
          </h2>
          <p className="text-gray-600 text-lg">Create professional AI-generated thumbnails in just a few clicks.</p>
        </div>

        {/* Demo Video */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser-like header */}
            <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-sm text-gray-500 font-medium">Pikera AI Demo</div>
            </div>

            {/* Video content */}
            <div className="relative bg-gradient-to-br from-purple-500 via-red-400 to-yellow-500">
              <div className="aspect-[16/9] relative">
                {videoPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Pikera AI Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                ) : (
                  <>
                    {/* YouTube thumbnail preview */}
                    <div className="absolute inset-0">
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Play button overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                      onClick={handlePlayClick}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                          <Play className="w-8 h-8 text-red-500 ml-1" />
                        </div>
                        <span className="text-white font-medium text-lg">Watch how it works</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
