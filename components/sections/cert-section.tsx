import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CertSection() {
  return (
    <section
      className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://rad-witty-paper.media.strapiapp.com/Untitled_design_25_b27341191e_43694f563a.png')",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="font-medium mb-2">CERT citator</h3>
            <h2 className="text-3xl md:text-4xl font-regular mb-6">Authorities you can trust</h2>
            <p className="text-base mb-6">
              Our proprietary citator, built by expert legal editors, identifies negative treatment other tools miss.
              CERT identifies 100 different types of negative treatment, and validates citations across all 50 states.
            </p>
            <Link href="/technology" className="inline-flex items-center text-white font-medium hover:text-blue-200">
              Our technology <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <Image
              src="https://rad-witty-paper.media.strapiapp.com/Seeing_how_94fcd34316.gif"
              alt="CERT Citator"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
