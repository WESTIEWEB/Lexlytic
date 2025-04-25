"use client";

import type React from "react";
import { Globe, Building2, Filter, DollarSign, ClockArrowUp, Handshake, Cast, } from "lucide-react";
import { motion } from "framer-motion";

export function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 text-center mb-4">
          Why Lexlytic
        </h2>
        <div className="w-24 h-1 bg-[#102E50] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            icon={<Handshake className="w-8 h-8 text-white" />}
            title="Instant Clarity"
            description="Turn regulatory complexity into straightforward actions."
          />

          <BenefitCard
            icon={<ClockArrowUp className="w-8 h-8 text-white" />}
            title="Real-Time Updates"
            description="Stay compliant with alerts the moment laws change."
          />

          <BenefitCard
            icon={<Globe className="w-8 h-8 text-white" />}
            title="Global Scope"
            description="Navigate regulations seamlessly across borders."
          />

          <BenefitCard
            icon={<Cast className="w-8 h-8 text-white" />}
            title="Actionable Insights"
            description="Connect directly to verified legal professionals."
          />
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      className="flex flex-col items-start bg-white shadow-md rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mb-4 p-3 rounded-full bg-gradient-to-tr from-blue-800 to-blue-600 hover:scale-105 transition-all duration-200">
        {/* Smaller icon with a subtle background */}
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-[#27548A]">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}
