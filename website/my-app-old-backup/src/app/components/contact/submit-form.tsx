"use server";

import { EmailTemplate } from "./email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    // TODO: Add this emailFormData to some database

    const { error } = await resend.emails.send({
      from: `${emailFormData.firstName} ${emailFormData.lastName} <${process.env.RESEND_FROM_EMAIL}>`,
      to: "gosuladheeraj@gmail.com",
      subject: "Email Form Submission",
      react: React.createElement(EmailTemplate, {email: emailFormData.email, message: emailFormData.message }),
    });

    if (error) {
      throw error;
    }
    return {success: true};
  } catch (e) {
    throw e;
  }
};
