import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ResearchSection() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Faster research, smarter workflows</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Vincent can automate drafting, answer research questions, build arguments and compare points of law from
          multiple jurisdictions.
        </p>
        <Link href="/explore" className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600">
          Explore Vincent <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <div className="mt-12">
          <div className="relative">
            <Image
              src="https://rad-witty-paper.media.strapiapp.com/R2_Screen_Redline_Analysis_1_93a8c03cc2.png"
              alt="vLex Platform"
              width={1000}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
