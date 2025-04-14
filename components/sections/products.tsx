import type React from "react"
import Image from "next/image"
import { Plus } from "lucide-react"

export function Products() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-800">Products</h2>

        <div className="space-y-16">
          <ProductCard
            title="Legal & Regulatory Intelligence"
            description={
              <>
                <p className="mb-6">
                  Get a 360° view of legal and regulatory intelligence across four key business areas:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Environment, Employment, Health & Safety;</li>
                  <li>Corporate & Commercial;</li>
                  <li>Commercial Crime;</li>
                  <li>ICT & Data Protection.</li>
                </ul>
                <p className="mb-6">
                  More than the law, you will get <strong>practical guidance</strong>, tailored comparison reports, the
                  ability to request <strong>clarifications</strong> from top law firms, and much more.
                </p>
              </>
            }
            imageUrl="https://cdn.prod.website-files.com/66e3fb5d46d50c9bc17cbce1/66e83d501e1cbccb8534e0f9_mockup%201%201.avif"
            imagePosition="right"
          />

          <ProductCard
            title="Lexlytic Laws & Monitoring"
            description={
              <>
                <p className="my-8">
                  Fully maintained local legal frameworks across essential areas of business and highly regulated
                  industries.
                </p>
                <p>
                  Get the overview of key laws and regulations in the countries covered across the globe, including:
                  descriptions, access to the official text (with English translations for non-English speaking
                  countries), and direct search in the full text of all primary sources of law.
                </p>
              </>
            }
            imageUrl="https://cdn.prod.website-files.com/66e3fb5d46d50c9bc17cbce1/6703dc99b17bcff1151ed72a_mockup%202.svg"
            imagePosition="left"
          />
        </div>
      </div>
    </section>
  )
}

interface ProductCardProps {
  title: string
  description: React.ReactNode
  imageUrl: string
  imagePosition: "left" | "right"
}

function ProductCard({ title, description, imageUrl, imagePosition }: ProductCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-blue-900 text-white">
      <div className={`flex flex-col ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
          <h3 className="text-[20px] md:text-2xl font-regular mb-6">{title}</h3>
          <div className="text-blue-50">{description}</div>
          <div className="mt-8">
            <button className="inline-flex items-center border border-yellow-400 text-blue-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors">
              <Plus className="mr-2 h-4 w-4" /> Special features
            </button>
          </div>
        </div>
        {/* <div className="md:w-1/2 relative">
          <div className="aspect-video md:aspect-auto md:h-full px-[30px] rounded-tr-[20px] rounded-bl-[20px]">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover rounded-tr-[300px] p-10 rounded-bl-[50px]" />
          </div>
        </div> */}

<div className={`md:w-1/2 relative ${imagePosition === "right" ? "rounded-tr-[20px] rounded-bl-[20px]" : "rounded-tl-[20px] rounded-br-[20px]"}`}>
          <div className={`aspect-video md:aspect-auto md:h-full px-4`}>
            <Image 
              src={imageUrl || "/placeholder.svg"} 
              alt={title} 
              layout="fill"
              className={`object-cover ${imagePosition === "right" ? "rounded-tr-[150px] rounded-l-[150px] rounded-bl-[300px] rounded-bl-[200px]   p-10" : "rounded-tr-[150px] rounded-bl-[150px] p-10"}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
