// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import {
//   PaperclipIcon,
//   ImageIcon,
//   Sparkles,
//   Mic,
//   Send,
//   Settings,
//   ChevronDown,
//   Loader2,
//   LogOut,
//   User,
//   History,
//   Download,
//   Heart,
// } from "lucide-react"
// import { createClient } from "@/lib/supabase/client"

// export default function PromptingPage() {
//   const [prompt, setPrompt] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")
//   const [thumbnails, setThumbnails] = useState([])
//   const [user, setUser] = useState(null)
//   const [authLoading, setAuthLoading] = useState(true)
//   const router = useRouter()
//   const supabase = createClient()

//   // Check authentication status
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const {
//           data: { session },
//         } = await supabase.auth.getSession()

//         if (!session) {
//           router.push("/signin")
//           return
//         }

//         setUser(session.user)
//       } catch (error) {
//         console.error("Auth check error:", error)
//         router.push("/signin")
//       } finally {
//         setAuthLoading(false)
//       }
//     }

//     checkAuth()

//     // Listen for auth changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       if (event === "SIGNED_OUT" || !session) {
//         router.push("/signin")
//       } else {
//         setUser(session.user)
//       }
//     })

//     return () => subscription.unsubscribe()
//   }, [router, supabase.auth])

//   const handleSignOut = async () => {
//     try {
//       await supabase.auth.signOut()
//       router.push("/signin")
//     } catch (error) {
//       console.error("Sign out error:", error)
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!prompt.trim()) {
//       setError("Please enter a prompt")
//       return
//     }

//     setIsLoading(true)
//     setError("")

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           prompt: prompt,
//         }),
//       })

//       const data = await response.json()

//       if (data.success) {
//         setThumbnails(data.data.thumbnails || [data.data.originalImageUrl])
//       } else {
//         setError(data.error || "Failed to generate thumbnail")
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.")
//       console.error(err)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const downloadThumbnail = (thumbnailUrl, index) => {
//     const link = document.createElement("a")
//     link.href = thumbnailUrl
//     link.download = `pikera-thumbnail-${index + 1}.png`
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   // Show loading spinner while checking auth
//   if (authLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     )
//   }

//   // Don't render if no user (will redirect)
//   if (!user) {
//     return null
//   }

//   const userName = user.user_metadata?.full_name || user.email?.split("@")[0] || "User"
//   const userAvatar = user.user_metadata?.avatar_url

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-72 bg-white border-r border-gray-200 hidden lg:block">
//         <div className="p-6 border-b border-gray-200">
//           <Link href="/" className="flex items-center gap-3">
//             <Image src="/logo.jpg" alt="Pikera AI Logo" width={36} height={36} className="w-9 h-9 rounded-lg" />
//             <span className="font-bold text-xl text-gray-900">Pikera AI</span>
//           </Link>
//         </div>

//         <div className="p-6">
//           <button
//             onClick={() => {
//               setPrompt("")
//               setThumbnails([])
//               setError("")
//             }}
//             className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
//           >
//             <Sparkles className="w-5 h-5" />
//             New Thumbnail
//           </button>
//         </div>

//         <div className="px-6 py-2">
//           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Recent Projects</h3>
//           <div className="space-y-2">
//             {[
//               {
//                 name: "Gaming Thumbnail",
//                 image:
//                   "https://dmrqkbkq8el9i.cloudfront.net/Pictures/480xany/9/2/3/347923_pcgamingsetuptech_450607.jpg",
//               },
//               {
//                 name: "Travel Vlog",
//                 image:
//                   "https://travelprnews.com/wp-content/uploads/2021/11/https___specials-images.forbesimg.com_imageserve_920377840_0x0.jpg",
//               },
//               { name: "Tech Review", image: "https://public.muragon.com/i0tu35m2/z2h4fcdz.jpg" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
//               >
//                 <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden relative">
//                   <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
//                 </div>
//                 <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="px-6 py-4 mt-auto">
//           <div className="flex items-center gap-2 text-xs text-gray-500">
//             <History className="w-4 h-4" />
//             <span>View all history</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="lg:hidden flex items-center gap-3">
//               <Image src="/logo.jpg" alt="Pikera AI Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
//               <span className="font-bold text-lg">Pikera AI</span>
//             </div>

//             <div className="hidden lg:block">
//               <h1 className="text-xl font-semibold text-gray-900">AI Thumbnail Generator</h1>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link
//                 href="/pricing"
//                 className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 Upgrade Plan
//               </Link>

//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg">
//                   {userAvatar ? (
//                     <Image
//                       src={userAvatar || "/placeholder.svg"}
//                       alt={userName}
//                       width={32}
//                       height={32}
//                       className="w-8 h-8 rounded-full"
//                     />
//                   ) : (
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                       <User className="w-4 h-4 text-blue-600" />
//                     </div>
//                   )}
//                   <span className="hidden md:inline text-sm font-medium text-gray-700">{userName}</span>
//                 </div>

//                 <button
//                   onClick={handleSignOut}
//                   className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                   title="Sign out"
//                 >
//                   <LogOut className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Main Area */}
//         <main className="flex-1 flex flex-col items-center justify-center p-6">
//           <div className="w-full max-w-4xl mx-auto">
//             {!thumbnails.length && (
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-3">
//                   Hello <span className="text-blue-600">{userName}</span>! 👋
//                 </h2>
//                 <p className="text-gray-600 text-xl">What amazing thumbnail would you like to create today?</p>
//               </div>
//             )}

//             {/* Prompt Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8"
//             >
//               <div className="p-6">
//                 <textarea
//                   value={prompt}
//                   onChange={(e) => setPrompt(e.target.value)}
//                   placeholder="Describe your YouTube thumbnail in detail... (e.g. 'A dramatic gaming thumbnail for Minecraft with a character holding a diamond sword, explosive action, eye-catching title ULTIMATE SURVIVAL')"
//                   className="w-full min-h-[140px] resize-none text-gray-800 placeholder-gray-400 focus:outline-none text-lg leading-relaxed"
//                   maxLength={500}
//                 />
//                 {error && (
//                   <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
//                     <p className="text-red-600 text-sm font-medium">{error}</p>
//                   </div>
//                 )}
//               </div>

//               <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <button
//                       type="button"
//                       className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                       <PaperclipIcon className="w-5 h-5" />
//                     </button>
//                     <button
//                       type="button"
//                       className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                       <ImageIcon className="w-5 h-5" />
//                     </button>
//                     <button
//                       type="button"
//                       className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                       <Mic className="w-5 h-5" />
//                     </button>
//                     <div className="h-6 w-px bg-gray-300 mx-2"></div>
//                     <button
//                       type="button"
//                       className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                       <Settings className="w-4 h-4" />
//                       <span>Style</span>
//                       <ChevronDown className="w-3 h-3" />
//                     </button>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <span className="text-xs text-gray-500 font-medium">{prompt.length}/500</span>
//                     <button
//                       type="submit"
//                       disabled={isLoading || !prompt.trim()}
//                       className={`px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all ${
//                         isLoading || !prompt.trim()
//                           ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                           : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
//                       }`}
//                     >
//                       {isLoading ? (
//                         <>
//                           <Loader2 className="w-4 h-4 animate-spin" />
//                           Generating...
//                         </>
//                       ) : (
//                         <>
//                           Generate
//                           <Send className="w-4 h-4" />
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>

//             {/* Loading State */}
//             {isLoading && (
//               <div className="text-center py-12">
//                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600 mb-6"></div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Creating your thumbnails...</h3>
//                 <p className="text-gray-600">This might take a few seconds</p>
//               </div>
//             )}

//             {/* Results */}
//             {thumbnails.length > 0 && (
//               <div className="space-y-8">
//                 <div className="text-center">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Generated Thumbnails</h3>
//                   <p className="text-gray-600">Click on any thumbnail to download it</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {thumbnails.map((thumbnail, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 group hover:shadow-xl transition-all"
//                     >
//                       <div className="aspect-video relative overflow-hidden">
//                         <img
//                           src={thumbnail || "/placeholder.svg"}
//                           alt={`Generated thumbnail ${index + 1}`}
//                           className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
//                           <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
//                             <button
//                               onClick={() => downloadThumbnail(thumbnail, index)}
//                               className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
//                               title="Download"
//                             >
//                               <Download className="w-5 h-5 text-gray-700" />
//                             </button>
//                             <button
//                               className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
//                               title="Like"
//                             >
//                               <Heart className="w-5 h-5 text-gray-700" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="p-4">
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm font-medium text-gray-700">Thumbnail {index + 1}</span>
//                           <button
//                             onClick={() => downloadThumbnail(thumbnail, index)}
//                             className="px-3 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
//                           >
//                             Download
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="text-center">
//                   <button
//                     onClick={() => {
//                       setPrompt("")
//                       setThumbnails([])
//                       setError("")
//                     }}
//                     className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors shadow-lg"
//                   >
//                     Generate More Thumbnails
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  PaperclipIcon,
  ImageIcon,
  Sparkles,
  Mic,
  Send,
  Settings,
  ChevronDown,
  Loader2,
  LogOut,
  User,
  Download,
  Heart,
  Menu,
  X,
  Plus,
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function PromptingPage() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [thumbnails, setThumbnails] = useState([])
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (!session) {
          router.push("/signin")
          return
        }

        setUser(session.user)
      } catch (error) {
        console.error("Auth check error:", error)
        router.push("/signin")
      } finally {
        setAuthLoading(false)
      }
    }

    checkAuth()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        router.push("/signin")
      } else {
        setUser(session.user)
      }
    })

    return () => subscription.unsubscribe()
  }, [router, supabase.auth])

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push("/signin")
    } catch (error) {
      console.error("Sign out error:", error)
    }
  }

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

  const downloadThumbnail = (thumbnailUrl, index) => {
    const link = document.createElement("a")
    link.href = thumbnailUrl
    link.download = `pikera-thumbnail-${index + 1}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Show loading spinner while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render if no user (will redirect)
  if (!user) {
    return null
  }

  const userName = user.user_metadata?.full_name || user.email?.split("@")[0] || "User"
  const userAvatar = user.user_metadata?.avatar_url

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

          <div className="flex items-center gap-2">
            <Link
              href="/pricing"
              className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Upgrade
            </Link>
            <button
              onClick={handleSignOut}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
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

              <div className="p-4">
                <button
                  onClick={() => {
                    setPrompt("")
                    setThumbnails([])
                    setError("")
                    setSidebarOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  New Thumbnail
                </button>
              </div>

              <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent Projects</h3>
                <div className="space-y-2">
                  {[
                    {
                      name: "Gaming Thumbnail",
                      image:
                        "https://dmrqkbkq8el9i.cloudfront.net/Pictures/480xany/9/2/3/347923_pcgamingsetuptech_450607.jpg",
                    },
                    {
                      name: "Travel Vlog",
                      image:
                        "https://travelprnews.com/wp-content/uploads/2021/11/https___specials-images.forbesimg.com_imageserve_920377840_0x0.jpg",
                    },
                    { name: "Tech Review", image: "https://public.muragon.com/i0tu35m2/z2h4fcdz.jpg" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <div className="w-8 h-8 bg-gray-200 rounded-lg overflow-hidden relative flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 truncate">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-4 py-4 mt-auto border-t border-gray-200">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  {userAvatar ? (
                    <Image
                      src={userAvatar || "/placeholder.svg"}
                      alt={userName}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full flex-shrink-0"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700 truncate">{userName}</span>
                </div>
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

          <div className="p-6">
            <button
              onClick={() => {
                setPrompt("")
                setThumbnails([])
                setError("")
              }}
              className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              New Thumbnail
            </button>
          </div>

          <div className="px-6 py-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Recent Projects</h3>
            <div className="space-y-2">
              {[
                {
                  name: "Gaming Thumbnail",
                  image:
                    "https://dmrqkbkq8el9i.cloudfront.net/Pictures/480xany/9/2/3/347923_pcgamingsetuptech_450607.jpg",
                },
                {
                  name: "Travel Vlog",
                  image:
                    "https://travelprnews.com/wp-content/uploads/2021/11/https___specials-images.forbesimg.com_imageserve_920377840_0x0.jpg",
                },
                { name: "Tech Review", image: "https://public.muragon.com/i0tu35m2/z2h4fcdz.jpg" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              {userAvatar ? (
                <Image
                  src={userAvatar || "/placeholder.svg"}
                  alt={userName}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-gray-700 block truncate">{userName}</span>
                <span className="text-xs text-gray-500">Free Plan</span>
              </div>
              <button
                onClick={handleSignOut}
                className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-72">
          {/* Desktop Header */}
          <header className="hidden lg:block bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">AI Thumbnail Generator</h1>
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Upgrade Plan
              </Link>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-4 lg:p-6">
            <div className="max-w-4xl mx-auto">
              {/* Welcome Message */}
              {!thumbnails.length && (
                <div className="text-center mb-8 lg:mb-12">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">
                    Hello <span className="text-blue-600">{userName}</span>! 👋
                  </h2>
                  <p className="text-gray-600 text-lg lg:text-xl">
                    What amazing thumbnail would you like to create today?
                  </p>
                </div>
              )}

              {/* Prompt Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6 lg:mb-8"
              >
                <div className="p-4 lg:p-6">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your YouTube thumbnail in detail... (e.g. 'A dramatic gaming thumbnail for Minecraft with a character holding a diamond sword, explosive action, eye-catching title ULTIMATE SURVIVAL')"
                    className="w-full min-h-[120px] lg:min-h-[140px] resize-none text-gray-800 placeholder-gray-400 focus:outline-none text-base lg:text-lg leading-relaxed"
                    maxLength={500}
                  />
                  {error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm font-medium">{error}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 px-4 lg:px-6 py-3 lg:py-4 bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Tools - Hidden on mobile, shown on larger screens */}
                    <div className="hidden sm:flex items-center gap-2">
                      <button
                        type="button"
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <PaperclipIcon className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <ImageIcon className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Mic className="w-5 h-5" />
                      </button>
                      <div className="h-6 w-px bg-gray-300 mx-2"></div>
                      <button
                        type="button"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        <span className="hidden md:inline">Style</span>
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <span className="text-xs text-gray-500 font-medium">{prompt.length}/500</span>
                      <button
                        type="submit"
                        disabled={isLoading || !prompt.trim()}
                        className={`px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl flex items-center gap-2 font-medium transition-all text-sm lg:text-base ${
                          isLoading || !prompt.trim()
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="hidden sm:inline">Generating...</span>
                            <span className="sm:hidden">...</span>
                          </>
                        ) : (
                          <>
                            <span className="hidden sm:inline">Generate</span>
                            <span className="sm:hidden">Go</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Loading State */}
              {isLoading && (
                <div className="text-center py-8 lg:py-12">
                  <div className="inline-block animate-spin rounded-full h-10 w-10 lg:h-12 lg:w-12 border-4 border-gray-300 border-t-blue-600 mb-4 lg:mb-6"></div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Creating your thumbnails...</h3>
                  <p className="text-gray-600">This might take a few seconds</p>
                </div>
              )}

              {/* Results */}
              {thumbnails.length > 0 && (
                <div className="space-y-6 lg:space-y-8">
                  <div className="text-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Your Generated Thumbnails</h3>
                    <p className="text-gray-600">Tap any thumbnail to download it</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    {thumbnails.map((thumbnail, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg border border-gray-200 group hover:shadow-xl transition-all"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={thumbnail || "/placeholder.svg"}
                            alt={`Generated thumbnail ${index + 1}`}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                              <button
                                onClick={() => downloadThumbnail(thumbnail, index)}
                                className="p-2 lg:p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                                title="Download"
                              >
                                <Download className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
                              </button>
                              <button
                                className="p-2 lg:p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                                title="Like"
                              >
                                <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 lg:p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Thumbnail {index + 1}</span>
                            <button
                              onClick={() => downloadThumbnail(thumbnail, index)}
                              className="px-2 lg:px-3 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => {
                        setPrompt("")
                        setThumbnails([])
                        setError("")
                      }}
                      className="px-6 lg:px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors shadow-lg"
                    >
                      Generate More Thumbnails
                    </button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
