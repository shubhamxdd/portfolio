"use server";

import React from "react";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { validateString, getErrorMessage } from "@/lib/utils";

import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 2525,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const mail = render(
      <ContactFormEmail message={message} senderEmail={senderEmail} />
    );
    const mailOptions = {
      from: `Contact Form <${process.env.GMAIL_USER}>`,
      to: process.env.USER_EMAIL,
      subject: `Message from contact form from ${senderEmail}`,

      html: mail,
    };

    const mailers = await transporter.sendMail(mailOptions);

    console.log(mailers);

    return mailers;
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
