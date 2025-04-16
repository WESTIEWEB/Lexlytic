import Link from "next/link";

export function Products() {
  return (
    <section className="py-20 bg-[#1a2d52] relative overflow-hidden">
      {/* Space decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute h-2 w-2 bg-white rounded-full top-20 left-[10%] opacity-70"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-40 left-[20%] opacity-50"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-60 right-[15%] opacity-70"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-80 right-[25%] opacity-50"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full bottom-40 left-[30%] opacity-70"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full bottom-20 right-[35%] opacity-50"></div>

        {/* Shapes */}
        <div className="absolute h-6 w-6 border-2 border-[#4fd1c5] rotate-45 top-[15%] left-[5%] opacity-30"></div>
        <div className="absolute h-8 w-8 border-2 border-[#f6ad55] rotate-45 top-[25%] right-[10%] opacity-30"></div>
        <div className="absolute h-6 w-6 border-2 border-[#4fd1c5] rotate-45 bottom-[15%] right-[5%] opacity-30"></div>

        {/* Plus signs */}
        <div className="absolute text-white text-2xl top-[10%] left-[15%] opacity-30">
          +
        </div>
        <div className="absolute text-white text-2xl top-[20%] right-[20%] opacity-30">
          +
        </div>
        <div className="absolute text-white text-2xl bottom-[10%] left-[25%] opacity-30">
          +
        </div>
        <div className="absolute text-white text-2xl bottom-[20%] right-[15%] opacity-30">
          +
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-white">
          PRODUCTS
        </h2>
        <div className="w-24 h-1 bg-[#4fd1c5] mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <ProductCard
                icon="🏛️"
                title="Market Place for Lawyers"
                description="Connect legal professionals with clients seeking expert advice. Our marketplace brings together top-tier lawyers across various practice areas, making legal services accessible and efficient."
                learnMoreLink="/products/marketplace"
              />

              <ProductCard
                icon="📝"
                title="Legal Review"
                description="Ensure your legal documents meet the highest standards with our AI-powered review process. Validate against current legal standards, precedents, and best practices."
                learnMoreLink="/products/legal-review"
              />

              <ProductCard
                icon="✓"
                title="Compliance Report"
                description="Stay compliant with regulatory requirements across multiple jurisdictions. Our platform monitors changes in legislation and provides actionable insights to maintain compliance."
                learnMoreLink="/products/compliance"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md h-[500px] flex items-center justify-center">
              {/* Vector illustration of a globe with connections */}
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Main globe */}
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="#2a4580"
                  fillOpacity="0.5"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  stroke="#4fd1c5"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />

                {/* Continents */}
                <path
                  d="M150 150 C180 130, 200 180, 230 160 C260 140, 280 170, 310 150 C340 130, 360 160, 390 140"
                  fill="#f6ad55"
                  fillOpacity="0.3"
                />
                <path
                  d="M120 220 C150 200, 170 250, 200 230 C230 210, 250 240, 280 220 C310 200, 330 230, 360 210"
                  fill="#f6ad55"
                  fillOpacity="0.3"
                />
                <path
                  d="M170 300 C200 280, 220 330, 250 310 C280 290, 300 320, 330 300 C360 280, 380 310, 410 290"
                  fill="#f6ad55"
                  fillOpacity="0.3"
                />

                {/* Connection points */}
                <circle cx="180" cy="180" r="10" fill="#4fd1c5" />
                <circle cx="320" cy="220" r="10" fill="#4fd1c5" />
                <circle cx="220" cy="320" r="10" fill="#4fd1c5" />
                <circle cx="350" cy="150" r="10" fill="#4fd1c5" />
                <circle cx="150" cy="250" r="10" fill="#4fd1c5" />

                {/* Connection lines */}
                <line
                  x1="180"
                  y1="180"
                  x2="320"
                  y2="220"
                  stroke="#4fd1c5"
                  strokeWidth="2"
                />
                <line
                  x1="320"
                  y1="220"
                  x2="220"
                  y2="320"
                  stroke="#4fd1c5"
                  strokeWidth="2"
                />
                <line
                  x1="220"
                  y1="320"
                  x2="150"
                  y2="250"
                  stroke="#4fd1c5"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="250"
                  x2="350"
                  y2="150"
                  stroke="#4fd1c5"
                  strokeWidth="2"
                />
                <line
                  x1="350"
                  y1="150"
                  x2="180"
                  y2="180"
                  stroke="#4fd1c5"
                  strokeWidth="2"
                />

                {/* Location markers */}
                <path d="M180 160 L180 180 L190 170 Z" fill="white" />
                <path d="M320 200 L320 220 L330 210 Z" fill="white" />
                <path d="M220 300 L220 320 L230 310 Z" fill="white" />
                <path d="M350 130 L350 150 L360 140 Z" fill="white" />
                <path d="M150 230 L150 250 L160 240 Z" fill="white" />

                {/* Orbiting satellite */}
                <circle
                  cx="400"
                  cy="100"
                  r="15"
                  fill="#f6ad55"
                  fillOpacity="0.7"
                />
                <ellipse
                  cx="400"
                  cy="100"
                  rx="25"
                  ry="5"
                  fill="none"
                  stroke="#f6ad55"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  icon: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

function ProductCard({
  icon,
  title,
  description,
  learnMoreLink,
}: ProductCardProps) {
  return (
    <div className="bg-[#1e3464] rounded-xl p-6 transition-all duration-300 hover:bg-white group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-[#1a2d52] rounded-full flex items-center justify-center group-hover:bg-[#4fd1c5]">
          <div className="w-10 h-10 flex items-center justify-center text-2xl text-[#4fd1c5] group-hover:text-[#1a2d52]">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#1a2d52]">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 text-sm group-hover:text-[#1e3464]">
            {description}
          </p>
          <Link
            href={learnMoreLink}
            className="inline-flex items-center text-[#4fd1c5] text-sm font-medium group-hover:text-[#1a2d52] transition-colors"
          >
            <span className="mr-1 w-5 h-5 rounded-full bg-[#4fd1c5] text-[#1a2d52] flex items-center justify-center text-xs group-hover:bg-[#1a2d52] group-hover:text-white">
              →
            </span>
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
