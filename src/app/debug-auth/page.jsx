"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function DebugAuth() {
  const [debugInfo, setDebugInfo] = useState({})
  const supabase = createClient()

  useEffect(() => {
    setDebugInfo({
      currentOrigin: window.location.origin,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  }, [])

  const testGoogleAuth = async () => {
    const redirectTo = `${window.location.origin}/auth/callback?next=/prompting`
    console.log("Attempting Google auth with redirect:", redirectTo)

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    })

    console.log("Auth response:", { data, error })
  }

  const testDiscordAuth = async () => {
    const redirectTo = `${window.location.origin}/auth/callback?next=/prompting`
    console.log("Attempting Discord auth with redirect:", redirectTo)

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo,
      },
    })

    console.log("Auth response:", { data, error })
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Auth Debug Page</h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2">Debug Info:</h2>
        <pre className="text-sm">{JSON.stringify(debugInfo, null, 2)}</pre>
      </div>

      <div className="space-y-4">
        <button
          onClick={testGoogleAuth}
          className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Test Google Auth
        </button>

        <button
          onClick={testDiscordAuth}
          className="block w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Test Discord Auth
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>Check the browser console for detailed logs.</p>
        <p>Current URL: {typeof window !== "undefined" ? window.location.href : "Loading..."}</p>
      </div>
    </div>
  )
}
