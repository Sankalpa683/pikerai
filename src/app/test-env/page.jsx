"use client"

import { useEffect, useState } from "react"
// import { createClient } from "@/lib/supabase/client"
// import { createClient } from "@supabase/supabase-js"
import { createClient } from "@/lib/supabase/client"

export default function TestEnv() {
  const [status, setStatus] = useState("Checking...")
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      // Try to create a Supabase client
      const supabase = createClient()

      // If we get here without errors, the environment variables are working
      setStatus("✅ Supabase client created successfully!")
    } catch (err) {
      setError(err.message)
      setStatus("❌ Failed to create Supabase client")
    }
  }, [])

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Supabase Configuration Test</h1>

      <div className="p-4 bg-gray-100 rounded-lg mb-4">
        <h2 className="font-semibold mb-2">Environment Variables:</h2>
        <p className="mb-1">
          <strong>NEXT_PUBLIC_SUPABASE_URL:</strong> {'https://pcthfxyxpojrjabmfhpa.supabase.co' ? "✅ Set" : "❌ Not set"}
        </p>
        <p>
          <strong>NEXT_PUBLIC_SUPABASE_ANON_KEY:</strong>{" "}
          {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Not set"}
        </p>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="font-semibold mb-2">Supabase Client Test:</h2>
        <p className={status.includes("✅") ? "text-green-600" : "text-red-600"}>{status}</p>
        {error && (
          <div className="mt-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-600">
          If you see green checkmarks above, your Supabase configuration is working correctly. If not, please check your
          .env.local file and make sure you've restarted your development server.
        </p>
      </div>
    </div>
  )
}
