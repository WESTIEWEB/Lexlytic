"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Banknote, CalendarX, ChartScatter, Hourglass, ShieldAlert } from "lucide-react";

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

export function BeforeLexlyticSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 content-center">
        <div className="md:flex flex-col md:flex-row-reverse md:justify-center items-center md:items-start gap-12">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 h-[420px] md:flex md:flex-col md:justify-center"
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
              Before Lexlytic: Compliance is a Mess
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
              <FeatureItem icon={<ChartScatter className="text-red-300" />} title="Regulations scattered across websites" />
              <FeatureItem icon={<Hourglass className="text-red-300" />} title="Hours spent researching simple laws" />
              <FeatureItem icon={<Banknote className="text-red-300" />} title="Expensive lawyer fees for basic compliance" />
              <FeatureItem icon={<CalendarX className="text-red-300" />} title="Unclear deadlines and costly penalties" />
              <FeatureItem icon={<ShieldAlert className="text-red-300" />} title="Difficulty managing rules across multiple jurisdictions" />
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
                See how Lexlytic solves this
              </Link>
            </motion.div> */}
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center items-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <div className="relative w-full h-[420px]">
                {/* Center point */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full z-10 transform -translate-x-1/2 -translate-y-1/2" />

                {/* Orbit lines */}
                <div className="absolute top-0 left-1/2 w-0.5 h-[50%] bg-gray-300 transform -translate-x-1/2 origin-bottom" />
                <div className="absolute top-1/2 right-0 h-0.5 w-[50%] bg-gray-300 transform -translate-y-1/2 origin-left" />
                <div className="absolute bottom-0 left-1/2 w-0.5 h-[50%] bg-gray-300 transform -translate-x-1/2 origin-top" />
                <div className="absolute top-1/2 left-0 h-0.5 w-[50%] bg-gray-300 transform -translate-y-1/2 origin-right" />

                {/* Orbiting images */}
                <Image
                src="/mess1.jpg"
                alt="Chaos 1"
                width={200}
                objectFit="cover"
                height={200}
                className="absolute top-0 left-1/2 transform -translate-x-1/2"
                />
                <Image
                src="/mess2.webp"
                alt="Chaos 2"
                width={200}
                objectFit="cover"
                height={200}
                className="absolute top-1/2 right-0 transform -translate-y-1/2"
                />
                <Image
                src="/mess3.jpg"
                alt="Chaos 3"
                width={200}
                objectFit="cover"
                height={200}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
                <Image
                src="/mess4.jpg"
                alt="Chaos 4"
                width={200}
                objectFit="cover"
                height={200}
                className="absolute top-1/2 left-0 transform -translate-y-1/2"
                />
            </div>
          </motion.div>

          {/* <motion.div
            className="md:w-1/2 w-full"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/compliance-chaos.avif"
                alt="Chaotic legal situation illustration"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm opacity-0 hover:opacity-100 transition duration-500" />
            </div>
          </motion.div> */}
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
        {icon ? icon : <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>}
      </div>
      <div>
        <p className="text-gray-700 text-base font-medium">{title}</p>
      </div>
    </motion.li>
  );
}
