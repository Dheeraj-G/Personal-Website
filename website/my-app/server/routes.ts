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

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const formData = contactFormSchema.parse(req.body);
      
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
      
      const { error } = await resend.emails.send({
        from: `${formData.firstName} ${formData.lastName} <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: "gosuladheeraj@gmail.com",
        subject: "Email Form Submission",
        react: React.createElement(EmailTemplate, {
          email: formData.email,
          message: formData.message,
        }),
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ success: false, error: "Failed to send email" });
      }

      return res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof Error) {
        return res.status(400).json({ success: false, error: error.message });
      }
      return res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
