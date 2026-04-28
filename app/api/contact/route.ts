import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, number, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Ssquad Global" <${process.env.SMTP_USER}>`, // Sender address must be authenticated user to avoid spam flags
      replyTo: email,
      to: process.env.COMPANY_ALERT_EMAIL || 'sales@ssquad.com',
      subject: `New Contact Inquiry: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Inquiry from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // 1. Send the alert email to the company
    await transporter.sendMail(mailOptions);

    // 2. Send the confirmation email to the user
    const userConfirmationOptions = {
      from: `"Ssquad Global" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting Ssquad Global`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 24px;">Ssquad Global</h2>
          </div>
          <div style="padding: 32px 24px;">
            <p style="font-size: 16px; line-height: 1.6;">Dear ${name},</p>
            <p style="font-size: 16px; line-height: 1.6;">Thank you for getting in touch with us. We have successfully received your inquiry regarding <strong>"${subject || 'your message'}"</strong>.</p>
            <p style="font-size: 16px; line-height: 1.6;">One of our global experts will review your request and get back to you shortly.</p>
            <br/>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 8px;">Best regards,</p>
            <p style="font-size: 16px; font-weight: bold; margin-top: 0;">The Ssquad Global Team</p>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #64748b; margin: 0;">&copy; ${new Date().getFullYear()} Ssquad Global. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(userConfirmationOptions);

    return NextResponse.json(
      { message: 'Transmission successful. We will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
