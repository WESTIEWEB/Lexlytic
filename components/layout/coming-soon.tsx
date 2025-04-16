// pages/coming-soon.tsx

import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Desktop Background Image (hidden on small screens) */}
      <div
        className="absolute inset-0 hidden sm:block bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/coming.jpg')",
        }}
      />

      {/* Mobile Text-only Background (shown on small screens only) */}
      <div className="absolute inset-0 block sm:hidden bg-[#1a2d52] z-0" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="block sm:hidden text-4xl font-extrabold">Coming Soon</h1>
        <p className="block sm:hidden text-base mt-4 max-w-md">
          We're working hard to bring this page to you. Stay tuned!
        </p>
      </div>

      {/* Button at Bottom */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center z-10">
        <Link href="/" passHref>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-xl text-lg font-semibold transition-colors hover:bg-blue-50">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
