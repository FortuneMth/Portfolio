// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    console.log('Received form data:', { name, email, phone, message });

    // Check if values are being received correctly
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New contact from ${name}`,
      text: `Phone: ${phone}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Email not sent' }), { status: 500 });
  }
}

