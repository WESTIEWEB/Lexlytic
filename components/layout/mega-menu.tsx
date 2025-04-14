"use client";

import Link from "next/link";

interface MenuSection {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}

interface MegaMenuProps {
  isOpen: boolean;
  sections: MenuSection[];
  onClose: () => void;
  activeItem: string | null;
  position: number;
}

export function MegaMenu({
  isOpen,
  sections,
  onClose,
  activeItem,
  position,
}: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 mt-0 z-50" onMouseLeave={onClose}>
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Arrow pointing to the active menu item */}
        <div
          className="absolute w-4 h-4 bg-white transform rotate-45 top-0 -mt-2 z-10"
          style={{ left: `${position}px` }}
        ></div>

        {/* Mega menu content */}
        <div className="bg-white shadow-lg rounded-b-md overflow-hidden animate-fadeInDown">
          <div className="py-6 px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-blue-500 font-medium text-sm">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-blue-600 text-sm block py-1"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const productsSections: MenuSection[] = [
  {
    title: "Legal Research",
    items: [
      { name: "vLex Legal Research", href: "/legal-research" },
      { name: "Docket Alarm", href: "/docket-alarm" },
      { name: "Fastcase Legal Research", href: "/fastcase" },
    ],
  },
  {
    title: "Legal AI",
    items: [{ name: "Vincent AI", href: "/vincent-ai" }],
  },
  {
    title: "Legal Analytics",
    items: [
      { name: "vLex Analytics", href: "/analytics" },
      { name: "Docket Alarm Analytics", href: "/docket-alarm-analytics" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Chrome Extension", href: "/chrome-extension" },
      { name: "Word Plugin", href: "/word-plugin" },
      { name: "vLex Mobile", href: "/mobile" },
      { name: "vLex Cloud", href: "/cloud" },
    ],
  },
  {
    title: "Practice Management",
    items: [
      { name: "NextChapter", href: "/nextchapter" },
      { name: "Quolaw", href: "/quolaw" },
      { name: "Eunomia", href: "/eunomia" },
    ],
  },
  {
    title: "Enterprise",
    items: [
      { name: "Legal Data APIs", href: "/apis" },
      { name: "Iceberg AI", href: "/iceberg-ai" },
      { name: "Custom Solutions", href: "/custom-solutions" },
      { name: "All Integrations", href: "/integrations" },
    ],
  },
];

export const coverageSections: MenuSection[] = [
  {
    title: "By Region",
    items: [
      { name: "United States", href: "/coverage/us" },
      { name: "United Kingdom", href: "/coverage/uk" },
      { name: "Canada", href: "/coverage/canada" },
      { name: "Latin America", href: "/coverage/latin-america" },
      { name: "Spain", href: "/coverage/spain" },
      { name: "International", href: "/coverage/international" },
    ],
  },
  {
    title: "By Content Type",
    items: [
      { name: "Case Law", href: "/coverage/case-law" },
      { name: "Legislation", href: "/coverage/legislation" },
      { name: "Books & Journals", href: "/coverage/books-journals" },
      { name: "Forms & Precedents", href: "/coverage/forms" },
    ],
  },
];

export const customersSections: MenuSection[] = [
  {
    title: "By Segment",
    items: [
      { name: "Law Firms", href: "/customers/law-firms" },
      { name: "Corporate Legal", href: "/customers/corporate" },
      { name: "Government", href: "/customers/government" },
      { name: "Academic", href: "/customers/academic" },
    ],
  },
  {
    title: "Success Stories",
    items: [
      { name: "Case Studies", href: "/customers/case-studies" },
      { name: "Testimonials", href: "/customers/testimonials" },
    ],
  },
];

export const solutionsSections: MenuSection[] = [
  {
    title: "By Need",
    items: [
      { name: "Legal Research", href: "/solutions/legal-research" },
      { name: "AI-Powered Insights", href: "/solutions/ai-insights" },
      { name: "Practice Management", href: "/solutions/practice-management" },
      { name: "Analytics", href: "/solutions/analytics" },
    ],
  },
  {
    title: "By Industry",
    items: [
      { name: "Law Firms", href: "/solutions/law-firms" },
      { name: "Corporate Legal", href: "/solutions/corporate" },
      { name: "Government", href: "/solutions/government" },
      { name: "Academic", href: "/solutions/academic" },
    ],
  },
];

export const companySections: MenuSection[] = [
  {
    title: "About",
    items: [
      { name: "Our Story", href: "/company/story" },
      { name: "Leadership", href: "/company/leadership" },
      { name: "Careers", href: "/company/careers" },
      { name: "Press", href: "/company/press" },
    ],
  },
  {
    title: "Contact",
    items: [
      { name: "Contact Us", href: "/company/contact" },
      { name: "Support", href: "/company/support" },
      { name: "Offices", href: "/company/offices" },
    ],
  },
];

export const resourcesSections: MenuSection[] = [
  {
    title: "Learn",
    items: [
      { name: "Blog", href: "/resources/blog" },
      { name: "Webinars", href: "/resources/webinars" },
      { name: "Guides", href: "/resources/guides" },
      { name: "Videos", href: "/resources/videos" },
    ],
  },
  {
    title: "Support",
    items: [
      { name: "Help Center", href: "/resources/help" },
      { name: "Training", href: "/resources/training" },
      { name: "Documentation", href: "/resources/docs" },
    ],
  },
];
