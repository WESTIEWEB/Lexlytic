"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

const initialState: {
  errors: { _form?: string[]; fullName?: string[]; email?: string[] };
  message: string;
  success: boolean;
} = {
  errors: {},
  message: "",
  success: false,
};

export function RegisterInterestForm() {
  const [state, setState] = useState(initialState);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL!;

    // Map form field names to Google Form entry IDs
    const googleFormData = new FormData();
    googleFormData.append("entry.234875870", formData.get("fullName") as string); // Correct "Full Name" entry ID
    googleFormData.append("entry.93917136", formData.get("email") as string); // Replace XXXXXXX with the actual "Email" entry ID

    startTransition(async () => {
      console.log(googleFormUrl)
      try {
        const response = await fetch(googleFormUrl, {
          method: "POST",
          body: googleFormData,
          mode: "no-cors", // Required for Google Forms submission
        });

        // Since 'no-cors' mode doesn't allow reading the response, assume success if no error
        setState({
          errors: {},
          message: "Form submitted successfully!",
          success: true,
        });
      } catch (error) {
        console.error("Form submission error:", error);
        setState({
          errors: {
            _form: ["An unexpected error occurred. Please try again."],
          },
          success: false,
          message: "An unexpected error occurred. Please try again.",
        });
      }
    });
  };

  return (
    <div className="bg-blue-900/40 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-8 text-white">
      {state.success ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="bg-green-100 rounded-full p-3 mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
          <p className="text-white/80 text-center max-w-md mb-6">
            Your interest has been registered successfully. We've sent you a
            confirmation email and our team will be in touch with you shortly.
          </p>
          <a
            href="/"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Return to Home
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {state.errors?._form && (
            <div className="bg-red-100 text-red-800 px-4 py-3 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>{state.errors?._form}</span>
            </div>
          )}

          <InputField
            id="fullName"
            label="Full Name*"
            error={state.errors?.fullName}
            required
          />

          <InputField
            id="email"
            type="email"
            label="Email*"
            error={state.errors?.email}
            required
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-md font-medium transition-all disabled:opacity-70"
          >
            {isPending ? "Submitting..." : "Register Interest"}
          </button>
        </form>
      )}
    </div>
  );
}

function InputField({
  id,
  label,
  type = "text",
  required,
  placeholder,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white/80 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-md bg-white/10 placeholder:text-white/50 text-white border ${
          error ? "border-red-500" : "border-white/30"
        } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error[0]}</p>}
    </div>
  );
}