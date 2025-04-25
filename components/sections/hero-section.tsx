// import Link from "next/link";

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden min-h-screen">
//       {/* Background Video with Dark Overlay */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover object-center"
//         >
//           <source src="/africa.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-[#102E50] bg-opacity-80" />
//       </div>

//       {/* Centered Content Container */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 text-white text-center">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
//             AI that knows the law
//           </h1>
//           <p className="text-base mb-8">
//             Built for global firms and Fortune 500 counsel, Lexlytic combines
//             the largest legal database of statutes and caselaw with advanced
//             engineering. Delivering more precise answers, with transparent
//             citations, across 50 states and 17 countries.
//           </p>
//           <Link
//             href="/discover"
//             className="inline-flex items-center rounded-xl bg-white text-blue-600 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
//           >
//             Discover Lexlytic AI
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"; // add this if using app directory

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/hero2.jpg')" }}>
  {/* Video Background Layer */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover object-center"
    >
      <source src="/globalmap.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    {/* Optional: Add a darker overlay over the video if needed */}
    <div className="absolute inset-0 bg-[#09122C] bg-opacity-70" />
  </div>

  {/* Rest of your content */}
  <div className="absolute inset-0 overflow-hidden z-10">
    {/* Stars, Shapes, Plus Signs, etc. */}
    {/* Keep everything you already have here */}
  </div>

  <div className="relative z-20 flex items-center justify-center min-h-screen px-4 md:px-6 text-white text-center">
    <motion.div
      className="max-w-4xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight drop-shadow-xl">
        One Platform for Every Law—Instant Clarity, Zero Confusion.
      </h1>
      <p className="text-xl font-semibold mb-8 text-[#4fd1c5] drop-shadow leading-tight">
        Lexlytic's AI ingests any regulation, anywhere. See clear obligations,
        deadlines and risks at a glance, and connect with a vetted professional
        in a single click.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href="/discover"
          className="inline-flex items-center rounded-xl bg-[#4fd1c5] text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors shadow-md"
        >
          Discover Lexlytic AI
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>

    // <section
    //   className="relative overflow-hidden min-h-screen bg-no-repeat bg-cover bg-center"
    //   style={{ backgroundImage: "url('/hero2.jpg')" }}
    // >
    //   {/* Dark Overlay */}
    //   <div className="absolute inset-0 bg-[#09122C] bg-opacity-70 z-0" />
    //   {/* Space decorations */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     {/* Stars */}
    //     <div className="absolute h-2 w-2 bg-white rounded-full top-20 left-[10%] opacity-70"></div>
    //     <div className="absolute h-1 w-1 bg-white rounded-full top-40 left-[20%] opacity-50"></div>
    //     <div className="absolute h-2 w-2 bg-white rounded-full top-60 right-[15%] opacity-70"></div>
    //     <div className="absolute h-1 w-1 bg-white rounded-full top-80 right-[25%] opacity-50"></div>
    //     <div className="absolute h-2 w-2 bg-white rounded-full bottom-40 left-[30%] opacity-70"></div>
    //     <div className="absolute h-1 w-1 bg-white rounded-full bottom-20 right-[35%] opacity-50"></div>

    //     {/* Shapes */}
    //     <div className="absolute h-6 w-6 border-2 border-[#4fd1c5] rotate-45 top-[15%] left-[5%] opacity-30"></div>
    //     <div className="absolute h-1 w-1 bg-white rounded-full top-80 right-[25%] opacity-50"></div>
    //     <div className="absolute h-2 w-2 bg-white rounded-full bottom-40 left-[30%] opacity-70"></div>
    //     <div className="absolute h-1 w-1 bg-white rounded-full bottom-20 right-[35%] opacity-50"></div>
    //     <div className="absolute h-6 w-6 border-2 border-[#4fd1c5] rotate-45 top-[15%] left-[5%] opacity-30"></div>
    //     <div className="absolute h-1 w-1 bg-white rounded-full bottom-20 right-[35%] opacity-50"></div>

    //     <div className="absolute h-1 w-1 bg-white rounded-full top-80 right-[25%] opacity-50"></div>
    //     <div className="absolute h-2 w-2 bg-white rounded-full bottom-40 left-[30%] opacity-70"></div>
    //     <div className="absolute h-1 w-1 bg-white rounded-full bottom-20 right-[35%] opacity-50"></div>

    //     {/* Plus signs */}
    //     <div className="absolute text-white text-2xl top-[10%] left-[15%] opacity-30">
    //       +
    //     </div>
    //     <div className="absolute text-white text-2xl top-[20%] right-[20%] opacity-30">
    //       +
    //     </div>
    //     <div className="absolute text-white text-2xl bottom-[10%] left-[25%] opacity-30">
    //       +
    //     </div>
    //     <div className="absolute text-white text-2xl bottom-[20%] right-[15%] opacity-30">
    //       +
    //     </div>
    //     <div className="absolute text-white text-2xl top-[20%] right-[20%] opacity-30">
    //       +
    //     </div>
    //     <div className="absolute text-white text-2xl bottom-[10%] left-[25%] opacity-30">
    //       +
    //     </div>
    //   </div>
    //   {/* Animated Content */}
    //   <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 text-white text-center">
    //     <motion.div
    //       className="max-w-4xl"
    //       initial={{ opacity: 0, y: 40 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1.2, ease: "easeOut" }}
    //     >
    //       <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight drop-shadow-xl">
    //       One Platform for Every Law—Instant Clarity, Zero Confusion.
    //       </h1>
    //       <p className="text-base mb-8 text-gray-200 drop-shadow">
    //       Lexlytic's AI ingests any regulation, anywhere. See clear obligations, deadlines and risks at a glance, and connect with a vetted professional in a single click.
    //       </p>
    //       <motion.div
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.98 }}
    //         transition={{ type: "spring", stiffness: 300 }}
    //       >
    //         <Link
    //           href="/discover"
    //           className="inline-flex items-center rounded-xl bg-white text-blue-600 px-6 py-3 font-medium hover:bg-gray-100 transition-colors shadow-md"
    //         >
    //           Discover Lexlytic AI
    //         </Link>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </section>
  );
}
