import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PreciseAISection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Image on the right */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="ai2.jpg"
              alt="Woman using vLex"
              width={600}
              height={400}
              className="w-full h-[400px] rounded-none md:rounded-xl shadow-lg"
            />
          </div>

          {/* Text on the left */}
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              AI with Legal Accuracy at Its Core
            </h2>

            <ul className="space-y-4">
              <BulletPoint text="Lexlytic is built on the world’s most comprehensive collection of primary law." />
              <BulletPoint text="Every insight is backed by direct links to official legal sources, so you’re never guessing." />
              <BulletPoint text="With daily updates from trusted official sources, you’ll never miss a change in the law." />
              <BulletPoint text="By blending generative models with rules-based systems, we deliver legal answers you can trust." />
              <BulletPoint text="Our editorial team monitors judicial treatment, updates citations, and ensures accuracy across jurisdictions." />
            </ul>
            <Link
              href="/learn-more"
              className="inline-flex items-center text-blue-500 font-medium mt-6 hover:text-blue-600"
            >
              Learn more about our primary law{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mr-2 mt-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <p className="text-gray-600">{text}</p>
    </li>
  );
}
