"use client";

import React from "react";
import { motion } from "framer-motion";

export function WorkflowSection() {
  const regions = [
    {
      title: "Northern Africa",
      countries: ["Algeria", "Egypt", "Libya", "Morocco", "Tunisia"],
    },
    {
      title: "Western Africa",
      countries: [
        "Côte d'Ivoire",
        "Ghana",
        "Guinea",
        "Mali",
        "Nigeria",
        "Senegal",
        "Togo",
      ],
    },
    {
      title: "Central Africa",
      countries: [
        "Angola",
        "Cameroon",
        "Central African Republic",
        "Republic of the Congo",
        "Equatorial Guinea",
        "Gabon",
      ],
    },
    {
      title: "Eastern Africa",
      countries: [
        "Ethiopia",
        "Kenya",
        "Malawi",
        "Rwanda",
        "South Sudan",
        "Tanzania",
        "Uganda",
        "Zambia",
      ],
    },
    {
      title: "Southern Africa",
      countries: ["Botswana", "Namibia", "South Africa"],
    },

    {
      title: "UK + EU gateway for multinationals expanding into Africa",
      countries: [],
    },
  ];

  // Animations for regions and text
  const regionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-[#1a2d52] relative overflow-hidden text-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Existing Stars */}
        <div className="absolute h-2 w-2 bg-white rounded-full top-20 left-[10%] opacity-70"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-40 left-[20%] opacity-50"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-60 right-[15%] opacity-70"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-80 right-[25%] opacity-50"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full bottom-40 left-[30%] opacity-70"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full bottom-20 right-[35%] opacity-50"></div>

        {/* Glowing Circles */}
        <div className="absolute h-20 w-20 bg-cyan-400 opacity-20 rounded-full blur-3xl top-[30%] left-[40%]"></div>
        <div className="absolute h-32 w-32 bg-purple-400 opacity-10 rounded-full blur-2xl bottom-[20%] right-[20%]"></div>

        {/* Shapes */}
        <div className="absolute h-6 w-6 border-2 border-[#4fd1c5] rotate-45 top-[15%] left-[5%] opacity-30"></div>
        <div className="absolute h-8 w-8 border-2 border-[#f6ad55] rotate-45 top-[25%] right-[10%] opacity-30"></div>
        <div className="absolute h-6 w-6 border-2 border-[#4fd1c5] rotate-45 bottom-[15%] right-[5%] opacity-30"></div>

        {/* Circles */}
        <div className="absolute h-4 w-4 border-2 border-[#90cdf4] rounded-full top-[40%] left-[10%] opacity-30"></div>
        <div className="absolute h-5 w-5 border-2 border-[#fbd38d] rounded-full bottom-[30%] right-[10%] opacity-20"></div>

        {/* Plus signs */}
        <div className="absolute text-white text-2xl top-[10%] left-[15%] opacity-30">
          +
        </div>
        <div className="absolute text-white text-2xl top-[20%] right-[20%] opacity-30">
          +
        </div>
        <div className="absolute text-white text-2xl bottom-[10%] left-[25%] opacity-30">
          +
        </div>
        <div className="absolute text-white text-2xl bottom-[20%] right-[15%] opacity-30">
          +
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>

        {/* Optional: Light dotted grid lines (can be subtle with low opacity) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-12">
          {/* Left: Regions & Countries List */}
          {/* <motion.div
            className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            initial="hidden"
            whileInView="visible"
            variants={regionVariants}
            viewport={{ once: true }}
          >
            {regions.map((region) => (
              <motion.div
                key={region.title}
                className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <h4 className="text-[#4fd1c5] text-lg font-bold mb-3">
                  {region.title}
                </h4>
                <ul className="text-sm space-y-1 text-white/90">
                  {region.countries.map((country) => (
                    <motion.li
                      key={country}
                      className="before:content-['•'] before:text-[#4fd1c5] before:mr-2"
                      whileHover={{
                        color: "#fbd38d",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {country}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Right: Text Content */}
          {/* Right: Updated Text Content */}
          <motion.div
            className="w-full space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={regionVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-[#4fd1c5] text-3xl md:text-4xl font-semibold text-center">Local Insight, Continental Reach</h3>
            <h2 className="md:text-2xl text-xl font-semibold text-center">
              Lexlytic delivers jurisdiction-perfect compliance in every market we serve,
              because we build alongside the people who know the rules best.
            </h2>
            <p className="text-base">
              <strong>Ground-level partners, not surface-level data</strong><br />
              <span className="text-sm space-y-1 text-white/90">
                We work hand-in-hand with respected lawyers, notaries, and regulatory advisers in each country we enter.
                They supply the nuance behind every statute; our platform turns it into instant, actionable guidance.
              </span>
            </p>
            <p className="text-base">
              <strong>Coverage where complexity is highest</strong>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-3 text-[#4fd1c5] text-sm font-semibold mb-3" >
                <li>West Africa — Nigeria, Ghana, Côte d'voire, Guinea, Mali, Senegal, Togo</li>
                <li>East Africa — Kenya, Tanzania, Rwanda, Uganda, Ethiopia, Malawi, Zambia</li>
                <li>Southern Africa — South Africa, Botswana, Namibia, Zambia</li>
                <li>UK + EU gateway for multinationals expanding into Africa</li>
              </ul>
            </p>
            <p className="text-base">
              <strong>Trust earned, not assumed</strong><br />
              <span className="text-sm space-y-1 text-white/90">
                Relationships with a diverse range of local professionals mean real-time updates,
                faster execution, and culturally accurate advice — before, during, and after every legislative change.
              </span>
            </p>
            <p className="text-sm space-y-1 text-white/90">
              Operate in two, ten, or twenty jurisdictions? Lexlytic gives you the same certainty
              you'd expect from a single in-house counsel, scaled across the continent.
            </p>
          </motion.div>

          {/* <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={regionVariants}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-[#4fd1c5] text-xl mb-6">
              REGION
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Enjoy on-the-ground knowledge from the best local firms — on a
              pan-African scale
            </h2>
            <p className="text-base mb-6">
              Our platform is the result of years of trust building with over
              150 of Africa’s finest law firms. What better proof of our
              collaborative approach?
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
