import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "c2505b75-fe87-4e20-bd97-81e924d5cec9";

    // If access key is not set, return error so the admin knows it is missing in Vercel
    if (!accessKey || accessKey.trim() === "") {
      console.error("WEB3FORMS_ACCESS_KEY environment variable is missing on this server/Vercel.");
      return NextResponse.json(
        { 
          error: "Email service is not configured. Please add WEB3FORMS_ACCESS_KEY to your Vercel Environment Variables." 
        },
        { status: 500 }
      );
    }

    // Forward to Web3Forms API to deliver directly to ahireharshada495@gmail.com
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name: name,
        email: email,
        message: message,
        subject: `New Portfolio Inquiry from ${name}`,
        from_name: "Harshada Ahire Portfolio",
      }),
    });

    const data = await web3Response.json();

    if (web3Response.ok && data.success) {
      return NextResponse.json(
        { success: true, message: "Email delivered to your inbox!" },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms error response:", data);
      return NextResponse.json(
        { error: data.message || "Failed to deliver email. Please try again." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
