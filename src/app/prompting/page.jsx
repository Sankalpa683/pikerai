"use client"

import React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PaperclipIcon, ImageIcon, Sparkles, Mic, Send, Settings, ChevronDown, Loader2 } from "lucide-react"

export default function CreatePage() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [thumbnails, setThumbnails] = useState([])
  const userName = "Sankalpa" // This would come from authentication in a real app

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Assuming the API returns an array of image URLs
        setThumbnails(data.data.thumbnails || [data.data.originalImageUrl])
      } else {
        setError(data.error || "Failed to generate thumbnail")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen text-black bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 text-black bg-gray-50 border-r border-gray-200 hidden md:block">
        <div className="p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Pikera AI Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-lg">Pikera AI</span>
          </Link>
        </div>

        <div className="p-4">
          <button className="w-full flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-md font-medium">
            <Sparkles className="w-4 h-4" />
            New Thumbnail
          </button>
        </div>

        <div className="px-4 py-2">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Thumbnails</h3>
          < div className = " mt-2 space-y-1 " > < div className = " flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer " > < div className = " w-8 h-8 bg-gray-200 rounded overflow-hidden relative " > < img src = " https://dmrqkbkq8el9i.cloudfront.net/Pictures/480xany/9/2/3/347923_pcgamingsetuptech_450607.jpg " alt = " Thumbnail " fill className = " object-fit w-full h-full " /> </ div > < span className = " text-sm truncate " > Gaming Thumbnail </ span > </ div > < div className = " flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer " > < div className = " w-8 h-8 bg-gray-200 rounded overflow-hidden relative " > < img src = " https://travelprnews.com/wp-content/uploads/2021/11/https___specials-images.forbesimg.com_imageserve_920377840_0x0.jpg " alt = " Thumbnail " fill className = " object-fit h-full w-full " /> </ div > < span className = " text-sm truncate " > Travel Vlog </ span > </ div > < div className = " flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer " > < div className = " w-8 h-8 bg-gray-200 rounded overflow-hidden relative " > < img src = " https://public.muragon.com/i0tu35m2/z2h4fcdz.jpg " alt = " Thumbnail " fill className = " object-fit w-full h-full " /> </ div > < span className = " text-sm truncate " > Tech Review </ span > </ div > </ div >
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 text-black bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="md:hidden flex items-center gap-2">
            <Image src="/logo.jpg" alt="Pikera AI Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-lg">Pikera AI</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Upgrade
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                {userName.charAt(0)}
              </div>
              <span className="hidden md:inline text-sm font-medium">{userName}</span>
            </div>
          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Hello <span className="text-blue-500">{userName}</span></h1>
              <p className="text-gray-600 text-xl">What thumbnail would you like to create today?</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your YouTube thumbnail in detail... (e.g. 'A dramatic gaming thumbnail for Minecraft with a character holding a diamond sword, explosive action, eye-catching title ULTIMATE SURVIVAL')"
                  className="w-full min-h-[120px] resize-none text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-2">
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md">
                    <PaperclipIcon className="w-5 h-5" />
                  </button>
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md">
                    <Mic className="w-5 h-5" />
                  </button>
                  <div className="h-6 w-px bg-gray-300 mx-1"></div>
                  <button type="button" className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                    <Settings className="w-4 h-4" />
                    <span>Style</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{prompt.length} / 500</span>
                  <button
                    type="submit"
                    disabled={isLoading || !prompt.trim()}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      isLoading || !prompt.trim()
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        Generate
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Results */}
            {isLoading && (
              <div className="mt-8 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
                <p className="mt-4 text-gray-600">Creating your thumbnails...</p>
                <p className="text-sm text-gray-500">This might take a few seconds</p>
              </div>
            )}

            {thumbnails.length > 0 && (
              <div className="mt-12">
                <br />
                <h2 className="text-xl font-bold text-center mb-6">Your Generated Thumbnail</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {thumbnails.map((thumbnail, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 group"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={thumbnail || "/placeholder.svg"}
                          alt={`Generated thumbnail ${index + 1}`}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setPrompt("")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium"
                  >
                    Generate More
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
