"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Motion variants for sliding and fade-in effects
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

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
  },
};

export function PreciseAISection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center">
          {/* Image on the right */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
            viewport={{ once: true }}
          >
            <Image
              src="/ai2.jpg"
              alt="Woman using vLex"
              width={600}
              height={400}
              className="w-full h-[400px] rounded-none md:rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Text on the left */}
          <motion.div
            className="md:w-1/2 md:pr-12"
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              AI with Legal Accuracy at Its Core
            </h2>

            <motion.ul
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <BulletPoint text="Lexlytic is built on the world’s most comprehensive collection of primary law." />
              <BulletPoint text="Every insight is backed by direct links to official legal sources, so you’re never guessing." />
              <BulletPoint text="With daily updates from trusted official sources, you’ll never miss a change in the law." />
              <BulletPoint text="By blending generative models with rules-based systems, we deliver legal answers you can trust." />
              <BulletPoint text="Our editorial team monitors judicial treatment, updates citations, and ensures accuracy across jurisdictions." />
            </motion.ul>

            <Link
              href="/learn-more"
              className="inline-flex items-center text-blue-500 font-medium mt-6 hover:text-blue-600"
            >
              Learn more{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BulletPoint({ text }: { text: string }) {
  return (
    <motion.li
      className="flex items-start"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-shrink-0 mr-2 mt-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <p className="text-gray-600">{text}</p>
    </motion.li>
  );
}
