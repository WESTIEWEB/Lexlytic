import type React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export function Products() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16 text-blue-800">
          Products
        </h2>

        <div className="space-y-16">
          <ProductCard
            title="Market Place for Layers"
            description={
              <>
                <p className="mb-6">
                  At Lexlytic, we bring the power of technology to your
                  fingertips by providing a seamless Marketplace for Lawyers.
                  Whether you're seeking expert legal advice, representation, or
                  consultation, our platform connects you to top-tier legal
                  professionals across various practice areas.
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Connect with the Right Lawyer;</li>
                  <li>Find Experts in Any Field;</li>
                  <li>Streamlined Legal Services;</li>
                  <li>AI-Powered Matching</li>
                </ul>
              </>
            }
            imageUrl="https://i.ytimg.com/vi/UAlKxl86Xlg/maxresdefault.jpg"
            imagePosition="right"
          />

          <ProductCard
            title="Legal Review"
            description={
              <>
                <p className="my-8">
                  At Lexlytic, our Legal Review process ensures that the
                  information, analysis, and recommendations provided by our AI
                  align with current legal standards, precedents, and best
                  practices.
                </p>
                <p>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    <li>Expert-Driven Validation</li>
                    <li>Case Law & Statute Accuracy</li>
                    <li>Intelligent Analysis</li>
                    <li>Risk Mitigation & Compliance</li>
                    <li>Continuous Updates</li>
                  </ul>
                </p>
              </>
            }
            imageUrl="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_900,h_421/https://kcrecruitment.com/wp-content/uploads/2019/02/Termination-of-Employment-img-min.jpg"
            imagePosition="left"
          />

          <ProductCard
            title="Compliance Report"
            description={
              <>
                <p className="my-8">
                  At Lexlytic, compliance is at the core of our technology and
                  operations. We are committed to ensuring our platform adheres
                  to the highest legal, regulatory, and ethical standards across
                  all jurisdictions in which we operate.
                </p>
                <p>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    <li>Regulatory Adherence</li>
                    <li>Data Protection & Privacy</li>
                    <li>Legal Database Integrity</li>
                    <li>Ethical AI Usage</li>
                  </ul>
                </p>
              </>
            }
            imageUrl="https://cdn.prod.website-files.com/66e3fb5d46d50c9bc17cbce1/6703dc99b17bcff1151ed72a_mockup%202.svg"
            imagePosition="right"
          />
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  imagePosition: "left" | "right";
}

function ProductCard({
  title,
  description,
  imageUrl,
  imagePosition,
}: ProductCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-blue-900 text-white">
      <div
        className={`flex flex-col ${
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
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

        <div
          className={`md:w-1/2 relative ${
            imagePosition === "right"
              ? "rounded-tr-[20px] rounded-bl-[20px]"
              : "rounded-tl-[20px] rounded-br-[20px]"
          }`}
        >
          <div className={`aspect-video md:aspect-auto md:h-full px-4`}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              layout="fill"
              className={`object-cover ${
                imagePosition === "right"
                  ? "rounded-tr-[150px] rounded-l-[150px] rounded-bl-[300px] rounded-bl-[200px]   p-10"
                  : "rounded-tr-[150px] rounded-bl-[150px] p-10"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
