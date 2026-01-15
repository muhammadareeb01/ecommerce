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
    // Note: In Resend testing mode, emails can only be sent to verified email (syedareebali795@gmail.com)
    // In production with verified domain, this will work for any email
    const customerEmail = await resend.emails.send({
        from: 'Bulk Vapes USA <onboarding@resend.dev>',
        to: [email],
        subject: '✅ Order Received - Thank You!',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; background-color: #eff6e0; font-family: Arial, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #124559 0%, #01161e 100%); padding: 40px 20px; text-align: center;">
                        <h1 style="color: #eff6e0; margin: 0; font-size: 28px; font-weight: bold;">
                            ✅ Order Received!
                        </h1>
                        <p style="color: #aec3b0; margin: 10px 0 0 0; font-size: 16px;">
                            Thank you for choosing Bulk Vapes USA
                        </p>
                    </div>

                    <!-- Content -->
                    <div style="padding: 40px 30px;">
                        <p style="font-size: 16px; color: #01161e; margin: 0 0 20px 0;">
                            Hi <strong>${name}</strong>,
                        </p>
                        
                        <p style="font-size: 16px; color: #598392; line-height: 1.6; margin: 0 0 20px 0;">
                            We've successfully received your wholesale order request and our team is reviewing it now. You'll receive payment instructions within <strong>24 hours</strong>.
                        </p>

                        <!-- Important Notice -->
                        <div style="background: linear-gradient(135deg, #eff6e0 0%, #aec3b0 100%); padding: 20px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #124559;">
                            <p style="margin: 0; color: #01161e; font-size: 16px; font-weight: bold;">
                                💬 Speed Up Your Order
                            </p>
                            <p style="margin: 10px 0 0 0; color: #124559; font-size: 14px;">
                                Leave a message on our live chat or WhatsApp to expedite processing!
                            </p>
                        </div>

                        <!-- Order Summary -->
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 12px; margin: 30px 0;">
                            <h3 style="margin: 0 0 15px 0; color: #124559; font-size: 18px; border-bottom: 2px solid #aec3b0; padding-bottom: 10px;">
                                📦 Order Summary
                            </h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; color: #598392; font-size: 14px;">Total Amount:</td>
                                    <td style="padding: 8px 0; color: #01161e; font-size: 18px; font-weight: bold; text-align: right;">
                                        $${total.toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #598392; font-size: 14px;">Payment Method:</td>
                                    <td style="padding: 8px 0; color: #01161e; font-size: 14px; font-weight: bold; text-align: right;">
                                        ${paymentMethod.toUpperCase()}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #598392; font-size: 14px;">Order Date:</td>
                                    <td style="padding: 8px 0; color: #01161e; font-size: 14px; text-align: right;">
                                        ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <!-- What's Next -->
                        <div style="margin: 30px 0;">
                            <h3 style="color: #124559; font-size: 18px; margin: 0 0 15px 0;">
                                📋 What Happens Next?
                            </h3>
                            <div style="margin: 10px 0;">
                                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                                    <span style="color: #124559; font-size: 20px; margin-right: 10px;">1️⃣</span>
                                    <p style="margin: 0; color: #598392; font-size: 14px; line-height: 1.5;">
                                        Our team reviews your order (within 24 hours)
                                    </p>
                                </div>
                                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                                    <span style="color: #124559; font-size: 20px; margin-right: 10px;">2️⃣</span>
                                    <p style="margin: 0; color: #598392; font-size: 14px; line-height: 1.5;">
                                        You'll receive payment instructions via email
                                    </p>
                                </div>
                                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                                    <span style="color: #124559; font-size: 20px; margin-right: 10px;">3️⃣</span>
                                    <p style="margin: 0; color: #598392; font-size: 14px; line-height: 1.5;">
                                        Complete payment and we'll ship your order
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Contact Info -->
                        <div style="background-color: #01161e; padding: 20px; border-radius: 12px; margin: 30px 0; text-align: center;">
                            <p style="margin: 0 0 10px 0; color: #aec3b0; font-size: 14px;">
                                Questions? We're here to help!
                            </p>
                            <p style="margin: 0; color: #eff6e0; font-size: 16px; font-weight: bold;">
                                📱 WhatsApp: +44 7418 373634
                            </p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #f8f9fa; padding: 30px 20px; text-align: center; border-top: 1px solid #eee;">
                        <p style="margin: 0 0 10px 0; color: #124559; font-size: 16px; font-weight: bold;">
                            Bulk Vapes USA
                        </p>
                        <p style="margin: 0; color: #598392; font-size: 12px;">
                            Premium Wholesale Vape Distributor
                        </p>
                        <p style="margin: 15px 0 0 0; color: #999; font-size: 11px;">
                            This is an automated confirmation email. Please do not reply to this email.
                        </p>
                    </div>
                </div>
            </body>
            </html>
        `
    });

    if (customerEmail.error) {
        // Log error but don't fail the request
        console.error('Customer Email Error:', customerEmail.error);
        console.log('ℹ️  Note: In Resend testing mode, customer emails only work for verified addresses.');
        console.log('ℹ️  To send to any email, verify a domain at resend.com/domains');
    } else {
        console.log('✅ Customer confirmation email sent successfully to:', email);
    }

    return NextResponse.json({ success: true, data: adminEmail.data });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
