"use client";

import type React from "react";

import { useState, useTransition } from "react";
import {
  submitInterestForm,
  type FormState,
} from "@/app/actions/interest-form";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";

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
    <div className="bg-white rounded-lg shadow-sm border p-8">
      {state.success ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="bg-green-100 rounded-full p-3 mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Thank you!</h2>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Your interest has been registered successfully. We've sent you a
            confirmation email and our team will be in touch with you shortly.
          </p>

          {/* Development mode notice */}
          {/* <div className="mb-6 p-4 bg-blue-50 rounded-md text-sm max-w-md">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-800 mb-1">
                  Development Mode
                </p>
                <p className="text-blue-700">
                  In this development environment, emails are not actually sent.
                  In a production environment, you would receive a confirmation
                  email at the address you provided.
                </p>
              </div>
            </div>
          </div> */}

          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Return to Home
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {state.errors?._form && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>{state.errors._form}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  state.errors?.firstName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your first name"
                required
              />
              {state.errors?.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.firstName[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  state.errors?.lastName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your last name"
                required
              />
              {state.errors?.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.lastName[0]}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
               Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                state.errors?.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. name@email.com"
              required
            />
            {state.errors?.email && (
              <p className="mt-1 text-sm text-red-600">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your phone number"
            />
          </div>

       


          <div>
            <label
              htmlFor="countries"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Countries of interest
            </label>
            <input
              type="text"
              id="countries"
              name="countries"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Nigeria, South Africa, Ghana"
            />
          </div>

          <div>
            <label
              htmlFor="help"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How can Lexlytic help?
            </label>
            <textarea
              id="help"
              name="help"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your needs"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="source"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How did you hear about Lexlytic?
            </label>
            <input
              type="text"
              id="source"
              name="source"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Google, Social Media, Colleague"
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="text-gray-600">
                Yes, I agree to receive other communications from Lexlytic.
              </label>
              {state.errors?.consent && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.consent[0]}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md font-medium transition-colors disabled:opacity-70"
            >
              {isPending ? "Submitting..." : "Register Interest"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
