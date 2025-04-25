"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, DollarSign, Flag, Globe, UserCheck } from "lucide-react";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function AfterLexlyticSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 content-center">
        <div className="flex flex-col md:flex-row md:justify-center items-center md:items-start gap-12">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 h-[420px] flex flex-col justify-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-blue-900 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              After Lexlytic: Compliance is Clear and Simple
            </motion.h2>

            <motion.ul
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <FeatureItem icon={<ClipboardList className="text-green-500" />} title="All regulations summarized in one place" />
              <FeatureItem icon={<CheckCircle className="text-green-500" />} title="Instantly understand your legal obligations" />
              <FeatureItem icon={<DollarSign className="text-green-500" />} title="Save money on legal consultations" />
              <FeatureItem icon={<Flag className="text-green-500" />} title="Clear deadlines and compliance tasks" />
              <FeatureItem icon={<Globe className="text-green-500" />} title="Easily manage regulations across borders" />
              <FeatureItem icon={<UserCheck className="text-green-500" />} title="Verified professionals just one click away" />
            </motion.ul>

            {/* <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link
                href="/explore"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
              >
                See Lexlytic in Action →
              </Link>
            </motion.div> */}
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center items-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[420px] grid grid-cols-2 gap-4">
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full z-10 transform -translate-x-1/2 -translate-y-1/2" />

            {/* Orbit lines */}
            <div className="absolute top-0 left-1/2 w-0.5 h-[50%] bg-gray-300 transform -translate-x-1/2 origin-bottom" />
            <div className="absolute top-1/2 right-0 h-0.5 w-[50%] bg-gray-300 transform -translate-y-1/2 origin-left" />
            <div className="absolute bottom-0 left-1/2 w-0.5 h-[50%] bg-gray-300 transform -translate-x-1/2 origin-top" />
            <div className="absolute top-1/2 left-0 h-0.5 w-[50%] bg-gray-300 transform -translate-y-1/2 origin-right" />
              <Image
                src="/solution1.webp"
                alt="Clear Summary"
                width={200}
                height={200}
                className="rounded-xl shadow-md absolute top-0 left-1/2 transform -translate-x-1/2"
              />
              <Image
                src="/legal-team.png"
                alt="Checklist"
                width={200}
                height={200}
                className="rounded-xl shadow-md absolute top-1/2 right-0 transform -translate-y-1/2"
              />
              <Image
                src="/solution3.jpg"
                alt="Compliance Pathway"
                width={200}
                height={200}
                className="rounded-xl shadow-md absolute bottom-0 left-1/2 transform -translate-x-1/2 "
              />
              <Image
                src="/solution4.webp"
                alt="Verified Help"
                width={200}
                height={200}
                className="rounded-xl shadow-md absolute top-1/2 left-0 transform -translate-y-1/2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, icon }: { title: string, icon?: React.ReactNode; }) {
  return (
    <motion.li
      className="flex items-start"
      variants={slideInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-shrink-0 mr-3 mt-1">
        {icon ? icon : <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>}
      </div>
      <div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
    </motion.li>
  );
}
