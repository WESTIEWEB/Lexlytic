import type React from "react";
import { Globe, Bell, Bookmark } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Globe className="w-6 h-6 text-blue-500" />}
            number="2 million +"
            description="International users of Lexlytic products"
          />
          <StatCard
            icon={<Bell className="w-6 h-6 text-blue-500" />}
            number="8 out of 10"
            description="Top global law firms"
          />
          <StatCard
            icon={<Bookmark className="w-6 h-6 text-blue-500" />}
            number="2,500+"
            description="Sources of legal data"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  number,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  description: string;
}) {
  return (
    <div className="p-8  text-center transform transition duration-300 hover:-translate-y-2">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-blue-200 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
