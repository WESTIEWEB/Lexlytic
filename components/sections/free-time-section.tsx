import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FreeTimeSection() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Free time to focus on your clients</h2>
            <ul className="space-y-6">
              <FeatureItem
                title="Over 20 AI workflows"
                description="Summarize facts, contracts and other documents. Build timelines and arguments. Compare jurisdictions."
              />
              <FeatureItem
                title="More precise AI"
                description="Vincent delivers insights using live, comprehensive law from 50 states and 17 countries and precise citations."
              />
              <FeatureItem
                title="Security for global law firms"
                description="Every interaction protected by advanced encryption, with complete control over your data."
              />
            </ul>
            <Link
              href="/explore"
              className="inline-flex items-center text-blue-500 font-medium mt-6 hover:text-blue-600"
            >
              Explore Vincent <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video className="absolute inset-0 w-full h-full object-cover" controls>
                <source src="https://path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                00:45
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mr-2 mt-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}:</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  )
}
