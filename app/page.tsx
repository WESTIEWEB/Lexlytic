import type React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FreeTimeSection } from "@/components/sections/free-time-section";
import { PreciseAISection } from "@/components/sections/precise-ai-section";
import { AwardSection } from "@/components/sections/award-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ResearchSection } from "@/components/sections/research-section";
import { RevolutionarySection } from "@/components/sections/revolutionary-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { CertSection } from "@/components/sections/cert-section";
import { ReducingTimeSection } from "@/components/sections/reducing-time-section";
import { GetStartedSection } from "@/components/sections/get-started-section";
import { Benefits } from "@/components/sections/benefits";
import { Products } from "@/components/sections/products";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <FreeTimeSection />
        <PreciseAISection />
        <Products />
        {/* <AwardSection /> */}
        <StatsSection />
        {/* <ResearchSection /> */}
        <Benefits />
        <RevolutionarySection />
        <PartnersSection />
        <WorkflowSection />
        {/* <CertSection /> */}
        {/* <ReducingTimeSection /> */}
        <GetStartedSection />
      </main>

      <Footer />
    </div>
  );
}

function NavItem({ title }: { title: string }) {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
        {title} <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-1">
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Option 1
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Option 2
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Option 3
          </Link>
        </div>
      </div>
    </div>
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
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-blue-200 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
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
  );
}

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mr-2 mt-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <p className="text-gray-600">{text}</p>
    </li>
  );
}

function GetStartedCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm text-start border border-gray-100">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-blue-200 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        href={linkHref}
        className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
      >
        {linkText} <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-blue-200 hover:text-white transition-colors"
      >
        {text}
      </Link>
    </li>
  );
}
