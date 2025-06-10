import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/prompting"

  console.log("Auth callback - Origin:", origin)
  console.log("Auth callback - Code:", code)
  console.log("Auth callback - Next:", next)

  if (code) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      console.log("Auth successful, redirecting to:", `${origin}${next}`)
      return NextResponse.redirect(`${origin}${next}`)
    } else {
      console.error("Auth error:", error)
    }
  }

  // return the user to an error page with instructions
  console.log("Auth failed, redirecting to error page")
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
