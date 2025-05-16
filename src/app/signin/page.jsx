import Image from "next/image"
import Link from "next/link"
import { DiscIcon as DiscordLogo, Apple, Chrome } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Login Form */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-red-50 to-yellow-50 flex flex-col items-center justify-center px-8 py-12">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-10">
                        <Link href="/" className="flex items-center gap-2 mb-2">
                            <Image src="/logo.jpg" alt="Pikera AI Logo" width={40} height={40} className="w-10 rounded-full h-10" />
                            <span className="font-bold text-2xl">Pikera AI</span>
                        </Link>
                        <h1 className="text-center text-xl text-gray-700 mt-4">
                            Log in to access the Thumbnail Generator
                            <br />& start creating.
                        </h1>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-4 mb-10">
                        <button className="flex items-center justify-center gap-3 w-full bg-[#5865F2] text-white py-3 px-4 rounded-full font-medium hover:bg-opacity-90 transition-all">
                            <svg width="20" height="20" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor" />
                            </svg>
                            Log in with Discord
                        </button>
                        <button className="flex items-center justify-center gap-3 w-full bg-white text-gray-700 py-3 px-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Log in with Google
                        </button>

                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-col items-center">
                        <div className="flex -space-x-2 mb-2">
                            <Image
                                src="/avatar-1.png"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                            <Image
                                src="/avatar-2.png"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                            <Image
                                src="/avatar-3.png"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                            <Image
                                src="/avatar-4.png"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                                <span className="text-xs font-medium text-gray-500">+5k</span>
                            </div>
                        </div>
                        <p className="text-center text-sm font-medium text-gray-700 mb-4">
                            Trusted by <span className="font-bold">10k+</span> creators
                        </p>

                        {/* Trustpilot Rating */}
                        <div className="flex items-center gap-1 mb-1">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-4 h-4 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm font-medium">Excellent</span>
                        </div>
                        <p className="text-xs text-gray-500">Based on 1,200+ reviews</p>
                    </div>

                    {/* Help Link */}
                    <div className="text-center mt-12">
                        <p className="text-sm text-gray-600">
                            Having trouble logging in?{" "}
                            <Link href="/help" className="text-red-500 hover:underline font-medium">
                                Click here
                            </Link>{" "}
                            so we can assist you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Video Preview */}
            <div className="hidden lg:block w-1/2 bg-gray-900 relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-10 right-10 z-10">
                    <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2 border border-gray-700">
                        <p className="text-white flex items-center gap-2">
                            <span className="text-yellow-500">✦</span> N°1 in AI Thumbnails
                        </p>
                    </div>
                </div>

                {/* Video Preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-lg w-full">
                        {/* Browser-like frame */}
                        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center border-b border-gray-700">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mx-auto text-sm text-gray-400 font-medium">Pikera AI Demo</div>
                        </div>

                        {/* YouTube Video */}
                        <div className="bg-gray-800 rounded-b-lg overflow-hidden">
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://www.youtube.com/embed/yBY5yYMUwhg?rel=0"
                                    title="Pikera AI Demo Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-yellow-500/10"></div>
            </div>
        </div>
    )
}
