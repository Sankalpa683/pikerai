import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

const hero = () => {
    return (
        <>
            <main className="container mx-auto px-4 pt-8 pb-20">
                {/* Trust Badge */}
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-50 rounded-full px-5 py-2 flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <Image
                                src="/users/saroj.jpg"
                                alt="User"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full border-2 border-white"
                            />
                            <Image
                                src="/users/suraj.jpg"
                                alt="User"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full border-2 border-white"
                            />
                            <Image
                                src="/users/sudip.jpg"
                                alt="User"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full border-2 border-white"
                            />
                            <Image
                                src="/users/biyanak.jpg"
                                alt="User"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full border-2 border-white"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Trusted by <span className="font-bold">10+</span> creators
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
                    Turn {" "}
                    <span className="relative">
                        <span className="text-blue-500 font-semibold">One Prompt</span>

                    </span>{" "}
                    Into a Viral You<span className="text-red-500 font-semibold">Tube</span> Thumbnail
                </h1>

                {/* Subheading */}
                <p className="text-center text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mt-6">
                    No Photoshop. No design skills. No stress.
                    Just drop your video idea as a prompt and Pikera AI turns it into a scroll-stopping YouTube thumbnail — in seconds.
                </p>

                {/* CTA Button */}
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/start"
                        className="relative px-8 py-3 bg-black text-white font-bold rounded-full text-lg group overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started Now <span className="ml-1">→</span>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                        <span className="absolute inset-0 bg-black rounded-full group-hover:scale-[0.97] transition-transform duration-300"></span>
                    </Link>
                </div>

                {/* Thumbnail Examples */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                        {/* Thumbnail 1 */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 relative overflow-hidden">
                                <Image src="/thumbnails/madesi.jpg" alt="YouTube thumbnail example" fill className="object-cover" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                        <Play className="w-5 h-5 text-black ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail 2 */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                                <Image src="/thumbnails/nikola.jpg" alt="YouTube thumbnail example" fill className="object-cover" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                        <Play className="w-5 h-5 text-black ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail 3 */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                                <Image src="/thumbnails/ronaldo.jpg" alt="YouTube thumbnail example" fill className="object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                        <Play className="w-5 h-5 text-black ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail 4 */}
                        <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                                <Image src="/thumbnails/kills.jpg" alt="YouTube thumbnail example" fill className="object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                        <Play className="w-5 h-5 text-black ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default hero