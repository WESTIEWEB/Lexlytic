import type React from "react"
import { Globe, Building2, Filter, DollarSign } from "lucide-react"

export function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-800">
          Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon={<Globe className="w-8 h-8 text-blue-600" />}
            title="Act with Confidence"
            description="With Lexlytic, you will be certain of understanding and complying with the applicable laws, staying ahead of developments, and laying a solid foundation for future growth."
          />

          <BenefitCard
            icon={<Building2 className="w-8 h-8 text-blue-600" />}
            title="Build your Business on Trust"
            description="Operating your business on the right side of law is a daily duty. We bring the peace of mind that your legal intelligence is always up to date and that you'll know the requirements your business faces across the continent."
          />

          <BenefitCard
            icon={<Filter className="w-8 h-8 text-blue-600" />}
            title="Cut Through the Noise"
            description="Lexlytic gives you curated information, up to date and relevant to your needs. Make better decisions, faster, with the most trusted legal intelligence on the global market."
          />

          <BenefitCard
            icon={<DollarSign className="w-8 h-8 text-blue-600" />}
            title="Take Control of Your Budget"
            description="Reduce your external legal costs both through our authoritative answers and our legal-procurement tools. Get more value from your legal spend."
          />
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
    return (
      <div className="flex flex-col items-start bg-white shadow-md rounded-xl p-6 transform transition duration-300 hover:-translate-y-2 cursor-pointer">
        <div className="mb-4 p-2 rounded-full bg-blue-50">{icon}</div>
        <h3 className="text-[18px] font-regular mb-3 text-blue-500">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  
