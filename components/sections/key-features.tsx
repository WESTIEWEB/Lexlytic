"use client";

import type React from "react";
import { motion } from "framer-motion";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-md text-start border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-900 to-blue-600 text-white shadow-sm mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-blue-900">{title}</h3>
      <div className="text-gray-600 text-sm leading-relaxed">{description}</div>
    </motion.div>
  );
}

export default function KeyFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
          Key Features
        </h2>
        <div className="w-24 h-1 bg-[#102E50] mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FeatureCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            }
            title="Seamless Integration"
            description="Integrates with Chrome, SharePoint, PowerPoint, Microsoft 365, and Word — making your workflow smoother without disruption."
          />

          <FeatureCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.512 9-5.458 9-3.947 0-6.734-4.943-8.008-9z"
                />
              </svg>
            }
            title="Language Translation"
            description="Translate from English to local languages — and vice versa — with high accuracy and legal context sensitivity."
          />
        </div>
      </div>
    </section>
  );
}
