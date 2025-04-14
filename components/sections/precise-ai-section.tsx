import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function PreciseAISection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://rad-witty-paper.media.strapiapp.com/Lesotho_Law_Journal_7cb81a3e2e_1987921a15.jpg"
              alt="Woman using vLex"
              width={600}
              height={400}
              className="w-full rounded-none md:rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A more precise AI</h2>
            <p className="text-lg text-gray-600 mb-6">Powered by the world's largest collection of primary law.</p>
            <ul className="space-y-4">
              <BulletPoint text="Transparent links direct to primary legal sources." />
              <BulletPoint text="Expert legal editors tracking judicial treatment and citations." />
              <BulletPoint text="Updated daily caselaw and statutes direct from official sources." />
              <BulletPoint text="Hybrid pipeline of generative and rules-based AI to increase reliability." />
            </ul>
            <Link
              href="/learn-more"
              className="inline-flex items-center text-blue-500 font-medium mt-6 hover:text-blue-600"
            >
              Learn more about our primary law <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mr-2 mt-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <p className="text-gray-600">{text}</p>
    </li>
  )
}
