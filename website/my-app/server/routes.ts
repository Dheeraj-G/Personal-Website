import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { contactFormSchema, type ContactFormData } from "@shared/contact-schema";
import { EmailTemplate } from "./email-template";
import React from "react";

// Lazy initialization of Resend - only create when needed
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export async function registerRoutes(app: Express): Promise<Server | null> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form submission received");
      const formData = contactFormSchema.parse(req.body);
      console.log("Form data validated:", { email: formData.email, firstName: formData.firstName });
      
      const resend = getResend();
      if (!resend) {
        console.warn("Resend API key not configured. Email not sent.");
        // In development, return success even without API key for testing
        if (process.env.NODE_ENV === "development") {
          console.log("Development mode: Simulating successful email send");
          return res.json({ success: true, message: "Email would be sent in production" });
        }
        return res.status(500).json({ success: false, error: "Email service not configured" });
      }
      
      // Create HTML email content directly (more reliable in serverless environments)
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${formData.message}</p>
        </div>
      `;
      
      console.log("Sending email via Resend...");
      const { error, data } = await resend.emails.send({
        from: `${formData.firstName} ${formData.lastName} <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: "gosuladheeraj@gmail.com",
        subject: "Email Form Submission",
        html: htmlContent,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ success: false, error: "Failed to send email" });
      }

      console.log("Email sent successfully:", data);
      return res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
      if (error instanceof Error) {
        return res.status(400).json({ success: false, error: error.message });
      }
      return res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Only create HTTP server if not in Vercel serverless environment
  if (process.env.VERCEL) {
    return null;
  }

  const httpServer = createServer(app);
  return httpServer;
}
