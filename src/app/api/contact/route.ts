import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  message: string;
}

async function saveInquiry(data: ContactPayload) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "inquiries.json");

  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true });
  }

  let inquiries: (ContactPayload & { submittedAt: string })[] = [];
  if (existsSync(filePath)) {
    const content = await readFile(filePath, "utf-8");
    inquiries = JSON.parse(content);
  }

  inquiries.push({ ...data, submittedAt: new Date().toISOString() });
  await writeFile(filePath, JSON.stringify(inquiries, null, 2));
}

async function sendEmails(data: ContactPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const toEmail = CONTACT_EMAIL || SMTP_USER;

  await transporter.sendMail({
    from: SMTP_USER,
    to: toEmail,
    subject: `New Booking Inquiry from ${data.name}`,
    html: `
      <h2>New Booking Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Event Type:</strong> ${data.eventType}</p>
      <p><strong>Event Date:</strong> ${data.eventDate}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Guest Count:</strong> ${data.guestCount}</p>
      <p><strong>Message:</strong> ${data.message || "N/A"}</p>
    `,
  });

  await transporter.sendMail({
    from: SMTP_USER,
    to: data.email,
    subject: "Thanks for your inquiry — DJ Hemanth",
    html: `
      <h2>Thank you, ${data.name}!</h2>
      <p>I've received your booking inquiry for your <strong>${data.eventType}</strong> on <strong>${data.eventDate}</strong>.</p>
      <p>I'll review the details and get back to you within 24 hours.</p>
      <p>In the meantime, feel free to reach out directly at ${toEmail}.</p>
      <p>Best regards,<br/>DJ Hemanth</p>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactPayload = await request.json();

    if (!data.name || !data.email || !data.phone || !data.eventType || !data.eventDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await saveInquiry(data);

    try {
      await sendEmails(data);
    } catch {
      // Email failure shouldn't block inquiry storage
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
