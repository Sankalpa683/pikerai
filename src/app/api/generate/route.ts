import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ success: false, error: "Prompt is required" }, { status: 400 })
    }

    //https://www.ni3.app/api/generateImage 
    
    const response = await fetch("https://www.ni3.app/api/generateimagesss", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reply: prompt,
        aspectRatio: "16:9",
        style: "relevant",
      }),
    })

    const data = await response.json()

    if (!data.success) {
      return NextResponse.json({ success: false, error: "We're working on Pikera AI, Stay Turned" }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error generating image:", error)
    return NextResponse.json({ success: false, error: "We're working on Pikera AI, Stay Turned" }, { status: 500 })
  }
}
