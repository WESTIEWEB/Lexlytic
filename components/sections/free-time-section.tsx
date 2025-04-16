"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Motion variants for sliding effects
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

export function FreeTimeSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Reclaim your time for strategic thinking
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
              <FeatureItem
                title="Maximize Your Time for What Matters"
                description="Let AI handle the busywork. Automate research, draft summaries, extract key points, and generate timelines with over 20 tailored workflows."
              />
              <FeatureItem
                title="Smarter Legal Intelligence"
                description="Powered by real-time access to statutes and case law from 50 states and 17 countries."
              />
              <FeatureItem
                title="Enterprise-Grade Security, Built for Law"
                description="Your data stays yours. From encryption to access controls, we safeguard your information to meet the strictest legal and privacy standards."
              />
            </motion.ul>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link
                href="/explore"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
              >
                Explore Lexlytic
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 w-full"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/time.jpg"
                alt="Legal AI illustration"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              {/* Optional floating effect */}
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm opacity-0 hover:opacity-100 transition duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.li
      className="flex items-start"
      variants={slideInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-shrink-0 mr-3 mt-1">
        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.li>
  );
}
