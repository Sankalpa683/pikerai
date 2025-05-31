import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

const nav = () => {
    return (
        <>
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href='/'>
                    <div className="flex items-center justify-center gap-2">
                        <img src="/logo.jpg" alt="Pikera AI icon" width={40} height={40} className="w-10 rounded-full h-10" />
                        <span className="font-bold hidden text-xl">Pikera AI</span>
                        <img src='/pikeralogo.png' alt="Pikera AI icon" width={150} height={40} />
                    </div>
                </Link>
                <nav className="flex items-center gap-4">
                    <Link href="/pricing" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
                        Pricing
                    </Link>
                    <Link
                        href="/signin"
                        className="px-4 py-2 rounded-full border border-gray-200 font-medium hover:bg-gray-50 transition-all"
                    >
                        Sign in
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default nav