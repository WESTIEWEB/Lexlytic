"use client";

import type React from "react";
import { Globe, Building2, Filter, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-[#102E50]">
          Why Lexlytic
        </h2>
        <div className="w-24 h-1 bg-[#102E50] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            icon={<Globe className="w-8 h-8 text-white" />}
            title="Act with Confidence"
            description="With Lexlytic, you will be certain of understanding and complying with the applicable laws, staying ahead of developments, and laying a solid foundation for future growth."
          />

          <BenefitCard
            icon={<Building2 className="w-8 h-8 text-white" />}
            title="Build your Business on Trust"
            description="Operating your business on the right side of law is a daily duty. We bring the peace of mind that your legal intelligence is always up to date and that you'll know the requirements your business faces across the continent."
          />

          <BenefitCard
            icon={<Filter className="w-8 h-8 text-white" />}
            title="Cut Through the Noise"
            description="Lexlytic gives you curated information, up to date and relevant to your needs. Make better decisions, faster, with the most trusted legal intelligence on the global market."
          />

          <BenefitCard
            icon={<DollarSign className="w-8 h-8 text-white" />}
            title="Take Control of Your Budget"
            description="Reduce your external legal costs both through our authoritative answers and our legal-procurement tools. Get more value from your legal spend."
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
      <h3 className="text-[18px] font-semibold mb-3 text-[#27548A]">{title}</h3>
      <p className="text-gray-700 text-base">{description}</p>
    </motion.div>
  );
}
