import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff0000;">New Message from Portfolio Contact Form: </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3 style="margin-top: 20px;">Message:</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; color: #333;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top: 20px; color: #666;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    // Email to USER (Thank You)
    const userMailOptions = {
      from: `"Ujjwal Neupane" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">Hello ${name},</h2>
          <p>Thank you for reaching out to me! 🙌</p>
          <p>I’ve received your message and will get back to you as soon as I can.</p>
          <p style="margin-top: 20px;">
            For urgent matters, you may reach out using the contact details in my verified digital signature below.
          </p>
          <img src="https://drive.google.com/uc?export=view&id=1lUMqWBuegFWAOWlsoC710g5NDLUMgNvH" alt="Ujjwal Neupane Digital Signature" style="margin-top: 10px; max-width: 400px; border-radius: 6px;" />
          <p style="margin-top: 20px;">Have a great day!<br/><strong>- Ujjwal Neupane</strong></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
