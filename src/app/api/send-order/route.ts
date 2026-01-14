import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY); 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, address, contactMethod, notes, paymentMethod, items, total } = body;

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
        <p><strong>Preferred Contact:</strong> ${contactMethod ? contactMethod.toUpperCase() : 'N/A'}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</p>
        
        <div style="background-color: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 0; font-weight: bold;">Special Notes:</p>
            <p style="margin-top: 5px;">${notes || 'None'}</p>
        </div>

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

    // Check for API Key
    if (!process.env.RESEND_API_KEY) {
        if (process.env.NODE_ENV === 'development') {
            console.log('DEV: Mock Sending Email to syedareebali795@gmail.com:', htmlContent);
            return NextResponse.json({ success: true, message: 'Mock Email Sent (Dev Mode)' });
        } else {
            console.error('SERVER ERROR: Missing RESEND_API_KEY in Production');
            return NextResponse.json({ success: false, error: 'Configuration Error: Missing Email API Key' }, { status: 500 });
        }
    }

    // 1. Send Admin Notification
    const adminEmail = await resend.emails.send({
      from: 'Bulk Vapes Orders <onboarding@resend.dev>',
      to: ['syedareebali795@gmail.com'], 
      replyTo: email,
      subject: `New Order: ${name} - $${total.toFixed(2)}`,
      html: htmlContent,
    });

    if (adminEmail.error) {
        console.error('Admin Email Error:', adminEmail.error);
        return NextResponse.json({ success: false, error: adminEmail.error }, { status: 500 });
    }

    // 2. Send Customer Auto-Response
    try {
        await resend.emails.send({
            from: 'Bulk Vapes USA <onboarding@resend.dev>',
            to: [email],
            subject: 'Order Received - Next Steps',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-w-600px; margin: 0 auto;">
                    <h2 style="color: #124559;">Thank You for Your Order!</h2>
                    <p>Hi ${name},</p>
                    <p>We’ve received your order request and will contact you shortly with payment instructions.</p> 
                    <p style="background-color: #eff6e0; padding: 15px; border-radius: 8px; border: 1px solid #aec3b0; color: #124559; font-weight: bold;">
                        Kindly leave a text on live chat to speed up the process.
                    </p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 0.9em; color: #666;">
                        <strong>Order Summary:</strong><br>
                        Total Estimated: $${total.toFixed(2)}<br>
                        Payment Method: ${paymentMethod.toUpperCase()}
                    </p>
                </div>
            `
        });
    } catch (customerError) {
        console.error('Customer Email Error (Non-blocking):', customerError);
        // We don't fail the request if customer email fails, just log it
    }

    return NextResponse.json({ success: true, data: adminEmail.data });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
