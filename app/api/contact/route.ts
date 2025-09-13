import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, location, projectType, description } = body

    if (!firstName || !lastName || !email || !location || !projectType) {
      return NextResponse.json({ message: "Vul alle verplichte velden in." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Voer een geldig e-mailadres in." }, { status: 400 })
    }

    console.log("[v0] Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      location,
      projectType,
      description,
      timestamp: new Date().toISOString(),
    })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    // 1. Send email notification to the company
    // 2. Send confirmation email to the customer
    // 3. Store in database/CRM
    // 4. Integrate with email service like SendGrid, Mailgun, etc.

    return NextResponse.json({ message: "Uw bericht is succesvol verzonden!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      { message: "Er is een serverfout opgetreden. Probeer het later opnieuw." },
      { status: 500 },
    )
  }
}
