"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// Define navItems with sample data
interface DropdownSection {
  title: string;
  items: string[];
}

const navItems: { title: string; dropdownData?: DropdownSection[] }[] = [
  {
    title: "Products",
    dropdownData: [
      {
        title: "Legal Research",
        items: ["Legal Review", "Docket Alarm", "Fastcase Legal Research"],
      },
      {
        title: "Legal AI",
        items: ["Lexlytic AI"],
      },
      {
        title: "Legal Analytics",
        items: ["Compliance Report", "Docket Alarm Analytics"],
      },
      {
        title: "Tools",
        items: ["Chrome Extension", "Word Plugin", "Share Point"],
      },
      {
        title: "Practice Management",
        items: ["NextChapter", "Quolaw", "Eunomia"],
      },
      {
        title: "Enterprise",
        items: [
          "Market Place for Lawyers",
          "Legal Data APIs",
          "Custom Solutions",
          "All Integrations",
        ],
      },
    ],
  },
  {
    title: "Coverage",
    dropdownData: [
      {
        title: "Northern Africa",
        items: ["Algeria", "Egypt", "Libya", "Morocco", "Tunisia"],
      },
      {
        title: "Western Africa",
        items: [
          "Côte d'Ivoire",
          "Ghana",
          "Guinea",
          "Mali",
          "Nigeria",
          "Senegal",
          "Togo",
        ],
      },
      {
        title: "Central Africa",
        items: [
          "Angola",
          "Cameroon",
          "Central African Republic",
          "Republic of the Congo",
          "Equatorial Guinea",
          "Gabon",
        ],
      },
      {
        title: "Eastern Africa",
        items: [
          "Ethiopia",
          "Kenya",
          "Malawi",
          "Rwanda",
          "South Sudan",
          "Tanzania",
          "Uganda",
          "Zambia",
        ],
      },
      {
        title: "Southern Africa",
        items: ["Botswana", "Namibia", "South Africa"],
      },
    ],
  },
  {
    title: "Company",
    dropdownData: [
      { title: "Who We Are", items: ["About Us", "Leadership", "Careers"] },
      { title: "Media", items: ["Press Releases", "In the News"] },
    ],
  },
  {
    title: "Resources",
    dropdownData: [
      { title: "Knowledge Base", items: ["Help Center", "Docs", "Training"] },
      { title: "Media", items: ["Blog", "Webinars", "Events"] },
    ],
  },
];

export function MobileMenu({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className={`p-2 focus:outline-none ${
          isScrolled
            ? "text-gray-600 hover:text-blue-600"
            : "text-white hover:text-gray-200"
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="text-4xl font-extrabold tracking-tight">
                  Lexlytic
                </div>
              </div>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
            <ul className="space-y-4">
              {navItems.map(({ title, dropdownData }) => (
                <MobileMenuItem
                  key={title}
                  title={title}
                  dropdownData={dropdownData}
                  isActive={activeSubmenu === title}
                  onClick={() => toggleSubmenu(title)}
                />
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/contact-us"
                className="block w-full py-2 text-center text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/register-interest"
                className="block w-full py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenuItem({
  title,
  dropdownData,
  isActive,
  onClick,
}: {
  title: string;
  dropdownData?: DropdownSection[];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-2 text-left text-gray-700 hover:text-blue-600"
      >
        <span className="font-medium">{title}</span>
        {isActive ? (
          <ChevronDown className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </button>

      {isActive && dropdownData && (
        <ul className="pl-4 mt-2 space-y-4 border-l-2 border-gray-200">
          {dropdownData.map((section) => (
            <li key={section.title}>
              <p className="font-semibold text-sm text-blue-600">
                {section.title}
              </p>
              <ul className="ml-2 mt-1 space-y-1">
                {section.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
