import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing Required Fields' }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-w-600px; margin: 0 auto;">
        <h2 style="color: #124559;">New Contact Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
            <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 0.9em; margin-top: 20px;">
           Sent from Bulk Vapes USA Website.
        </p>
      </div>
    `;

    // Production environment check for API Key
    if (!process.env.RESEND_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
            console.log('DEV: Mock Contact Email:', htmlContent);
            return NextResponse.json({ success: true, message: 'Mock Email Sent (Dev Mode)' });
        } else {
            console.error('SERVER ERROR: Missing RESEND_API_KEY in Production');
            return NextResponse.json({ success: false, error: 'Configuration Error' }, { status: 500 });
        }
    }

    const { data, error } = await resend.emails.send({
      from: 'Bulk Vapes Support <onboarding@resend.dev>',
      to: ['syedareebali795@gmail.com'], 
      replyTo: email,
      subject: `Contact Request: ${name}`,
      html: htmlContent,
    });

    if (error) {
        console.error('Resend Error:', error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
