import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Play, Star } from "lucide-react"

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
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/start"
                        className="relative px-8 py-3 w-fit bg-black text-white font-bold rounded-full text-lg group overflow-hidden"
                    >
                        <span className="relative text-center md:text-left z-10 flex items-center gap-2">
                            Join Waitlist Now <span className="ml-1">→</span>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                        <span className="absolute inset-0 bg-black rounded-full group-hover:scale-[0.97] transition-transform duration-300"></span>
                    </Link>
                    <Link
                        href="/start"
                        className="relative px-8 py-3 w-fit bg-white border-black text-black font-bold rounded-full text-lg group overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Examples <span className="ml-1">→</span>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                        <span className="absolute inset-0 bg-white border-black rounded-full group-hover:scale-[0.97] transition-transform duration-300"></span>
                    </Link>
                </div>

                {/* Reviews Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                            ))}
                            <span className="ml-2 text-sm font-medium text-gray-700">4.9/5 from 1,200+ reviews</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Review 1 */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Pikera AI completely transformed my YouTube channel. My click-through rates increased by 300% in just
                                one month!"
                            </p>
                            <div className="flex items-center gap-3">
                                <Image src="/users/nischal.jpg" alt="Nischal Gautam" width={40} height={40} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-medium text-gray-900">Nischal Gautam</p>
                                    <p className="text-sm text-gray-500">Tech YouTuber & Content Creator, 250K subs</p>
                                </div>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "I used to spend hours on Reels Cover Photos. Now I create professional ones in minutes. This tool is a
                                game-changer!"
                            </p>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/users/krinzal.jpg"
                                    alt="Krinzal Karki"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-medium text-gray-900">Krinzal Karki</p>
                                    <p className="text-sm text-gray-500">Gaming Creator, 160+ followers</p>
                                </div>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "The AI understands exactly what makes thumbnails click-worthy. My views have doubled since I started
                                using Pikera AI."
                            </p>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/users/sumeet.jpg"
                                    alt="Sumeet Sharma"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-medium text-gray-900">Sumeet Sharma</p>
                                    <p className="text-sm text-gray-500">SEO Expert & Blog Writter, 3k+ followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
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