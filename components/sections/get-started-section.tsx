import type React from "react"
import Link from "next/link"
import { Globe, User, Phone, ArrowRight } from "lucide-react"

export function GetStartedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-blue-500 font-medium mb-2">Getting started</h3>
        <h2 className="text-3xl md:text-4xl font-light mb-12">
          Start your Lexlytic journey today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GetStartedCard
            icon={<Globe className="w-6 h-6 text-blue-500" />}
            title="Free trial"
            description="Sign-up for a free trial of Lexlytic and experience all the features and benefits of AI-powered legal research technology."
            linkText="Coming Soon"
            linkHref="/free-trial"
          />
          <GetStartedCard
            icon={<User className="w-6 h-6 text-blue-500" />}
            title="Register Interest"
            description="Suitable for individuals and teams, request an online demo to discover how Lexlytic can support your firm."
            linkText="Register interest"
            linkHref="/register-interest"
          />
          <GetStartedCard
            icon={<Phone className="w-6 h-6 text-blue-500" />}
            title="Contact us"
            description="Speak to your local office and learn more about Lexlytic technology, coverage and solutions."
            linkText="Contact us"
            linkHref="/contact-us"
          />
        </div>
      </div>
    </section>
  );
}

function GetStartedCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
}: {
  icon: React.ReactNode
  title: string
  description: string
  linkText: string
  linkHref: string
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
  )
}
