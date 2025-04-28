"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardList,
  CheckCircle,
  DollarSign,
  Flag,
  Globe,
  UserCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const images = [
    { src: "/solution1.webp", alt: "Summary" },
    { src: "/legal-team.png", alt: "Legal Team" },
    { src: "/solution3.jpg", alt: "Compliance Made Easy" },
    { src: "/solution4.webp", alt: "Verified Help" },
  ];

const solutions = [
  {
    emoji: "📘",
    title: "Everything in one place",
    description: "All regulations summarized and organized in a clean dashboard.",
  },
  {
    emoji: "⚡",
    title: "Clear, instant answers",
    description: "Understand your legal obligations without endless research.",
  },
  {
    emoji: "💰",
    title: "Save on legal costs",
    description: "Skip costly consultations — get expert-verified guidance on demand.",
  },
  {
    emoji: "📅",
    title: "Never miss a deadline",
    description: "Stay ahead of compliance with reminders and tracked tasks.",
  },
  {
    emoji: "🌍",
    title: "Global compliance made simple",
    description: "Easily manage laws across borders with jurisdiction-aware insights.",
  },
];

export function AfterLexlyticSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds (adjust as needed)

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <section className="bg-[#f4fbf8] py-20">
      <div className="w-full container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Text and Solutions */}
        <div className="space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1f3c2e] text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            After Lexlytic, everything feels like this 😌
          </motion.h2>

          <div className="grid md:grid-cols-1 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1f3c2e] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#4c6659]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
{/* 
          <motion.div
            className="mt-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/explore"
              className="inline-block bg-[#1f3c2e] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#355d47] transition"
            >
              Explore the Lexlytic advantage 🚀
            </Link>
          </motion.div> */}
        </div>

        <div className="relative md:hidden">
            <div className="relative w-full aspect-w-1 aspect-h-1 rounded-xl shadow-lg overflow-hidden">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover transition-opacity duration-500 ease-in-out"
                style={{ opacity: 1 }}
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 backdrop-blur-sm text-gray-700 rounded-full p-2 hover:bg-white/80 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 backdrop-blur-sm text-gray-700 rounded-full p-2 hover:bg-white/80 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-[#1f3c2e]" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

        {/* Right - Images */}
        <motion.div
          className="hidden md:grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/solution1.webp"
              alt="Summary"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/legal-team.png"
              alt="Legal Team"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/solution3.jpg"
              alt="Compliance Made Easy"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/solution4.webp"
              alt="Verified Help"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}