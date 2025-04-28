"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Banknote, CalendarX, ChartScatter, ChevronLeft, ChevronRight, Hourglass, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
    { icon: ChartScatter, title: "Regulations scattered across websites" },
    { icon: Hourglass, title: "Hours spent researching simple laws" },
    { icon: Banknote, title: "Expensive lawyer fees for basic compliance" },
    { icon: CalendarX, title: "Unclear deadlines and costly penalties" },
  { icon: ShieldAlert, title: "Difficulty managing rules across multiple jurisdictions" },
];

const painPoints = [
    {
        emoji: "📂",
        title: "Regulations everywhere",
        description: "Scattered rules across multiple websites. Nothing centralized. Everything confusing.",
},
{
    emoji: "⏳",
    title: "Hours wasted",
    description: "You spend your time Googling laws instead of building your business.",
},
{
    emoji: "💸",
    title: "Expensive lawyers",
    description: "Even a simple compliance question can cost hundreds in legal fees.",
},
{
    emoji: "😰",
    title: "Deadline anxiety",
    description: "Missed dates. No reminders. Penalties and panic follow quickly.",
},
{
    emoji: "🗺️",
    title: "Cross-border mess",
    description: "Every jurisdiction feels like its own puzzle with no guidebook.",
},
];


const container = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.2,
    },
},
};

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const chaosImages = [
    { src: "/mess1.jpg", alt: "Chaos 1" },
    { src: "/mess2.webp", alt: "Chaos 2" },
    { src: "/mess3.jpg", alt: "Chaos 3" },
    { src: "/mess4.jpg", alt: "Chaos 4" },
];


export function BeforeLexlyticSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % chaosImages.length);
        };
        
        const prevImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + chaosImages.length) % chaosImages.length);
        };
        
        useEffect(() => {
        const intervalId = setInterval(() => {
          nextImage();
        }, 3000);
        
        return () => clearInterval(intervalId);
    }, []);
    return (
        <section className="bg-[#fef9f6] py-20">
      <div className="container w-full mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Text and Pain Points */}
        <div className="space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2e2a27] text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Before Lexlytic, compliance felt like this 😵‍💫
          </motion.h2>

          <div className="grid md:grid-cols-1 gap-6 ">
            {painPoints.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <h4 className="text-lg font-semibold text-[#2e2a27] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#6b645f]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            className="mt-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/explore"
              className="inline-block bg-[#2e2a27] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#443e3b] transition"
            >
              See how Lexlytic makes it all better 💡
            </Link>
          </motion.div> */}
        </div>

        {/* Right - Images */}
        <div className="relative md:hidden">
            <div className="relative w-full aspect-w-1 aspect-h-1 rounded-xl shadow-md overflow-hidden">
              <Image
                src={chaosImages[currentImageIndex].src}
                alt={chaosImages[currentImageIndex].alt}
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
              {chaosImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-[#2e2a27]" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        <motion.div
          className="hidden md:grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/mess1.jpg" // Replace with your actual image path
              alt="Chaos 1"
              fill
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/mess2.webp" // Replace with your actual image path
              alt="Chaos 2"
              fill
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/mess3.jpg" // Replace with your actual image path
              alt="Chaos 3"
              fill
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/mess4.jpg" // Replace with your actual image path
              alt="Chaos 4"
              fill
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}