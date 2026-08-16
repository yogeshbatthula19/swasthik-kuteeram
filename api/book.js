import { Resend } from 'resend';

// Vercel Serverless Function
export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, date, guests, message } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, phone, and email are required.' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const OWNER_EMAIL = process.env.OWNER_EMAIL || 'owner@swasthikkuteeram.com';

    // 1. Send email to the Owner
    const ownerRes = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: OWNER_EMAIL,
      subject: `New Booking Enquiry from ${name}`,
      html: `
        <h2>New Booking Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Check-in Date:</strong> ${date}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    if (ownerRes.error) {
      console.error('Owner Email Error:', ownerRes.error);
      return res.status(500).json({ error: ownerRes.error.message || 'Failed to send owner email.' });
    }

    // 2. Send confirmation email to the Client
    const clientRes = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Booking Enquiry Received - Swastik Kuteeram',
      html: `
        <h2>Thank you for your enquiry!</h2>
        <p>Hi ${name},</p>
        <p>We have received your booking request for ${date ? `check-in on ${date}` : 'Swastik Kuteeram'}.</p>
        <p>Our team will get back to you shortly at ${phone} or this email address to confirm your booking details.</p>
        <br/>
        <p>Warm Regards,</p>
        <p>Swastik Kuteeram Team</p>
      `
    });

    if (clientRes.error) {
      console.error('Client Email Error:', clientRes.error);
      return res.status(500).json({ error: clientRes.error.message || 'Failed to send client email.' });
    }

    return res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Server crashed while sending emails.' });
  }
}
