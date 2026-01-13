import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_GYTGjk2U_N1LUK5nFR6UBve4B8UEcZzrZ'); 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, address, paymentMethod, items, total } = body;

    // Construct Email HTML
    const itemsHtml = items.map((item: any) => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px; font-weight: bold;">${item.product.name}</td>
            <td style="padding: 10px;">${item.quantity}</td>
            <td style="padding: 10px;">$${(item.product.price * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-w-600px; margin: 0 auto;">
        <h1 style="color: #124559;">New Wholesale Order Request</h1>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        
        <h3 style="border-bottom: 2px solid #aec3b0; padding-bottom: 10px; margin-top: 30px;">Order Details</h3>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr style="background-color: #f8f9fa;">
                    <th style="padding: 10px;">Product</th>
                    <th style="padding: 10px;">Qty</th>
                    <th style="padding: 10px;">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHtml}
            </tbody>
        </table>
        
        <div style="margin-top: 20px; font-size: 1.2em; text-align: right; padding: 10px; background-color: #eff6e0;">
            <strong>Total Estimate: $${total.toFixed(2)}</strong>
        </div>
        
        <p style="color: #666; font-size: 0.9em; margin-top: 30px; border-top: 1px solid #ddd; pt-2;">
           This is an automated notification from Bulk Vapes USA pilot.
        </p>
      </div>
    `;

    // Send Email (Mock success if no API key is actually present in env to prevent crash)
    if (!process.env.RESEND_API_KEY) {
        console.log('DEV: Mock Sending Email to syedareebali795@gmail.com:', htmlContent);
        return NextResponse.json({ success: true, message: 'Mock Email Sent' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Bulk Vapes Orders <onboarding@resend.dev>', // Update this domain once verified in Resend dashboard
      to: ['syedareebali795@gmail.com'], 
      replyTo: email, // This enables direct reply to customer
      subject: `New Order: ${name} - $${total.toFixed(2)}`,
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
