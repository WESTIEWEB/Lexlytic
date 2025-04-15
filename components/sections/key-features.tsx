import type React from "react";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow text-start transform transition duration-300 hover:-translate-y-2">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-blue-200 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
      {/* Render description directly without wrapping it in a paragraph */}
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
}

export default function KeyFeatures() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <FeatureCard
            icon={
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            }
            title="Seamless integration into existing workflow"
            description="Chrome Browser, Share Point, Power Point, Microsoft 365, Word Plugin"
          />
          <FeatureCard
            icon={
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.512 9-5.458 9-3.947 0-6.734-4.943-8.008-9z"
                ></path>
              </svg>
            }
            title="Language Translation"
            description=" English to local language, Local anguage to English."
          />
        </div>
      </div>
    </section>
  );
}
