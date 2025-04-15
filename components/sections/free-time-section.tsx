import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FreeTimeSection() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row-reverse items-start">
          {/* Text / Feature Content on the right */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Reclaim your time for strategic thinking
            </h2>
            <ul className="space-y-4">
              <FeatureItem
                title="Maximize Your Time for What Matters"
                description="Let AI handle the busywork. Automate research, draft summaries, extract key points, and generate timelines with over 20 tailored workflows."
              />
              <FeatureItem
                title="Smarter Legal Intelligence"
                description="Powered by real-time access to statutes and case law from 50 states and 17 countries.."
              />
              <FeatureItem
                title="Enterprise-Grade Security, Built for Law"
                description="Your data stays yours. From encryption to access controls, we safeguard your information to meet the strictest legal and privacy standards."
              />
            </ul>
            <Link
              href="/explore"
              className="inline-flex items-center text-blue-500 font-medium mt-4 hover:text-blue-600"
            >
              Explore Vincent <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Video on the left */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="time.jpg"
                alt="Woman using vLex"
                width={600}
                height={400}
                className="w-full h-[400px] rounded-none md:rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mr-2 mt-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}:</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
}
