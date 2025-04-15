import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/video/africa1-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 text-white text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            AI that knows the law
          </h1>
          <p className="text-base mb-8">
            Built for global firms and Fortune 500 counsel, Lexlytic combines
            the largest legal database of statutes and caselaw with advanced
            engineering. Delivering more precise answers, with transparent
            citations, across 50 states and 17 countries.
          </p>
          <Link
            href="/discover"
            className="inline-flex items-center rounded-xl bg-white text-blue-600 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
          >
            Discover Lexlytic AI
          </Link>
        </div>
      </div>
    </section>
  );
}
