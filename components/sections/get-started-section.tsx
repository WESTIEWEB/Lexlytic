"use client";

import type React from "react";
import Link from "next/link";
import { Globe, User, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function GetStartedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-2">Getting started</h3>
        <h2 className="text-2xl font-semibold text-gray-700 mb-12">
          Start your Lexlytic journey today
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GetStartedCard
            icon={<Globe className="w-6 h-6 text-white" />}
            title="Free trial"
            description="Sign-up for a free trial of Lexlytic and experience all the features and benefits of AI-powered legal research technology."
            linkText="Coming Soon"
            linkHref="/free-trial"
          />
          <GetStartedCard
            icon={<User className="w-6 h-6 text-white" />}
            title="Register Interest"
            description="Suitable for individuals and teams, request an online demo to discover how Lexlytic can support your firm."
            linkText="Register interest"
            linkHref="/register-interest"
          />
          <GetStartedCard
            icon={<Phone className="w-6 h-6 text-white" />}
            title="Contact us"
            description="Speak to your local office and learn more about Lexlytic technology, coverage and solutions."
            linkText="Contact us"
            linkHref="/contact-us"
          />
        </motion.div>
      </div>
    </section>
  );
}

function GetStartedCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.3 },
      }}
      className="bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 text-start shadow-sm hover:shadow-md"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-800 to-blue-600 text-white mb-5 shadow-lg">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Link */}
      <Link
        href={linkHref}
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
      >
        {linkText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
}


