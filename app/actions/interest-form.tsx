"use server";

import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  countries: z.string().optional(),
  help: z.string().optional(),
  source: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive communications",
  }),
});

export type FormState = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    countries?: string[];
    help?: string[];
    source?: string[];
    consent?: string[];
    _form?: string[];
  };
  message?: string;
  success?: boolean;
};

// Mock email templates
function generateUserEmailContent(data: any) {
  return {
    subject: "Your Lexlytic Interest Registration",
    text: `
      Dear ${data.firstName} ${data.lastName},

      Thank you for registering your interest in Lexlytic. We have received your request and a member of our team will be in touch with you shortly to discuss how we can help.

      Here's a summary of the information you provided:
      - Name: ${data.firstName} ${data.lastName}
      - Email: ${data.email}
      - Phone: ${data.phone || "Not provided"}
      - Countries of interest: ${data.countries || "Not provided"}

      If you have any questions in the meantime, please don't hesitate to contact us.

      Best regards,
      The Lexlytic Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0c8ee9;">Your Lexlytic Interest Registration</h2>
        <p>Dear ${data.firstName} ${data.lastName},</p>
        <p>Thank you for registering your interest in Lexlytic. We have received your request and a member of our team will be in touch with you shortly to discuss how we can help.</p>
        <h3 style="color: #0c8ee9;">Information Provided:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
          <li><strong>Countries of interest:</strong> ${
            data.countries || "Not provided"
          }</li>
        </ul>
        <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>
        <p>Best regards,<br>The Lexlytic Team</p>
      </div>
    `,
  };
}

function generateAdminEmailContent(data: any) {
  return {
    subject: "New Interest Registration",
    text: `
      New interest registration from ${data.firstName} ${data.lastName}
      
      Details:
      - Email: ${data.email}
      - Phone: ${data.phone || "Not provided"}
      - Company: ${data.company || "Not provided"}
      - Countries of interest: ${data.countries || "Not provided"}
      - How can Lexlytic help: ${data.help || "Not provided"}
      - How they heard about Lexlytic: ${data.source || "Not provided"}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0c8ee9;">New Interest Registration</h2>
        <p>New interest registration from <strong>${data.firstName} ${
      data.lastName
    }</strong></p>
        <h3 style="color: #0c8ee9;">Details:</h3>
        <ul>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
          <li><strong>Countries of interest:</strong> ${
            data.countries || "Not provided"
          }</li>
          <li><strong>How can Lexlytic help:</strong> ${
            data.help || "Not provided"
          }</li>
          <li><strong>How they heard about Lexlytic:</strong> ${
            data.source || "Not provided"
          }</li>
        </ul>
      </div>
    `,
  };
}

// Mock email sending function
async function mockSendEmail(
  to: string,
  subject: string,
  text: string,
  html: string
) {
  // In a real application, this would send an actual email
  // For now, we'll just log it and return a mock response
  console.log(`Mock email sent to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Text content: ${text.substring(0, 100)}...`);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    messageId: `mock-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 11)}`,
    previewUrl: `https://example.com/email-preview/${Date.now()}`,
  };
}

export async function submitInterestForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log("Form submission started");

  // Validate form data
  const validatedFields = formSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    countries: formData.get("countries"),
    help: formData.get("help"),
    source: formData.get("source"),
    consent: formData.get("consent") === "on",
  });

  // Return errors if validation fails
  if (!validatedFields.success) {
    console.log(
      "Validation failed:",
      validatedFields.error.flatten().fieldErrors
    );
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
      success: false,
    };
  }

  const data = validatedFields.data;
  console.log("Validation successful:", data);

  try {
    // Generate email content
    const userEmail = generateUserEmailContent(data);
    const adminEmail = generateAdminEmailContent(data);

    // Mock sending emails
    const userEmailResult = await mockSendEmail(
      data.email,
      userEmail.subject,
      userEmail.text,
      userEmail.html
    );

    const adminEmailResult = await mockSendEmail(
      "interest@lexlytic.com", // This would be your actual admin email in production
      adminEmail.subject,
      adminEmail.text,
      adminEmail.html
    );

    console.log("User email sent with ID:", userEmailResult.messageId);
    console.log("Admin email sent with ID:", adminEmailResult.messageId);

    // In a real application, you would store the form submission in a database here

    return {
      errors: {},
      message: "Thank you for your interest! We'll be in touch soon.",
      success: true,
    };
  } catch (error) {
    console.error("Error in form submission:", error);
    return {
      errors: {
        _form: ["Failed to send your request. Please try again later."],
      },
      message: "Failed to send your request. Please try again later.",
      success: false,
    };
  }
}
