import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend with the API key from .env
const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'swastik.kuteeram@gmail.com';

app.post('/api/book', async (req, res) => {
  const { name, phone, email, date, guests, message } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, phone, and email are required.' });
  }

  try {
    // 1. Send email to the Owner
    const ownerRes = await resend.emails.send({
      from: 'Swastik Kuteeram <booking@swastikkuteeram.com>', // This must be a verified domain in production
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
      from: 'Swastik Kuteeram <booking@swastikkuteeram.com>', // This must be a verified domain in production
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

    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Server crashed while sending emails.' });
  }
});

// Serve static frontend files from the 'dist' directory in production
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route to serve the React app for any unhandled routes (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
