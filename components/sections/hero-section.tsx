import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-50">
        <Image
          src="https://rad-witty-paper.media.strapiapp.com/world_map_blue_a6363c646d_433b4572e4.jpg"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-regular mb-6">
              AI that knows the law
            </h1>
            <p className="text-base mb-8">
              Built for global firms and Fortune 500 counsel, vLex combines the
              largest legal database of statutes and caselaw with advanced
              engineering. Delivering more precise answers, with transparent
              citations, across 50 states and 17 countries.
            </p>
            <Link
              href="/discover"
              className="inline-flex items-center rounded-xl bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Discover Vincent AI
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="">
              <Image
                src="https://rad-witty-paper.media.strapiapp.com/Vincent_V3_accef3c935.png"
                alt="Vincent AI Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
