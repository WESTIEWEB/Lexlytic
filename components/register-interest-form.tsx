"use client";

import type React from "react";
import { useState, useTransition } from "react";
import {
  submitInterestForm,
  type FormState,
} from "@/app/actions/interest-form";
import { CheckCircle2, AlertCircle } from "lucide-react";

const initialState: FormState = {
  errors: {},
  message: "",
  success: false,
};

export function RegisterInterestForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      try {
        const result = await submitInterestForm(state, formData);
        setState(result);
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
              <span>{state.errors._form}</span>
            </div>
          )}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              id="firstName"
              label="First Name*"
              error={state.errors?.firstName}
              required
            />
            <InputField
              id="lastName"
              label="Last Name*"
              error={state.errors?.lastName}
              required
            />
          </div> */}

          <InputField
            id="email"
            type="email"
            label="Email*"
            error={state.errors?.email}
            required
          />

          <InputField id="phone" type="tel" label="Mobile phone number" />

          <InputField
            id="countries"
            label="Countries of interest"
            placeholder="e.g. Nigeria, South Africa, Ghana"
          />

          <TextAreaField id="help" label="How can Lexlytic help?" />

          <InputField
            id="source"
            label="How did you hear about Lexlytic?"
            placeholder="e.g. Google, Social Media, Colleague"
          />

          <div className="flex items-start">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="h-4 w-4 text-cyan-500 focus:ring-cyan-400 border-white/30 rounded mt-1"
              required
            />
            <label
              htmlFor="consent"
              className="ml-3 text-sm text-white/80 leading-5"
            >
              Yes, I agree to receive other communications from Lexlytic.
            </label>
            {state.errors?.consent && (
              <p className="mt-1 text-sm text-red-500">
                {state.errors.consent[0]}
              </p>
            )}
          </div>

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

function TextAreaField({ id, label }: { id: string; label: string }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white/80 mb-1"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={3}
        className="w-full px-4 py-2 rounded-md bg-white/10 placeholder:text-white/50 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Tell us about your needs"
      ></textarea>
    </div>
  );
}
