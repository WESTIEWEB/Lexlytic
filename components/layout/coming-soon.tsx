// pages/coming-soon.tsx (Next.js with TypeScript)

import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-extrabold">Coming Soon</h1>
        <p className="text-base">
          We're working hard to bring this page to you. Stay tuned!
        </p>
        <div>
          <Link href="/" passHref>
            <button className="mt-6 bg-white text-blue-600 py-2 px-6 rounded-lg text-lg font-semibold transition-colors hover:bg-blue-50">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
