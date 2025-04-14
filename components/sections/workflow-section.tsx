import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function WorkflowSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://rad-witty-paper.media.strapiapp.com/WORD_42_ce3c4e3670_708198c4d5.jpg"
              alt="Integration Screenshot"
              width={500}
              height={300}
              className="w-[600px] rounded-xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-blue-500 font-medium mb-2">Integrated to your Workflow</h3>
            <h2 className="text-4xl font-thin mb-6">Connected to your content and your tools</h2>
            <p className="mb-6">
              Connect Vincent directly to Microsoft Word, iManage, SharePoint, and Chrome. Save time with one-click
              integration to your essential tools, keeping your research and documents synchronized.
            </p>
            <Link
              href="/integrations"
              className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600"
            >
              See all integrations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
