"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`p-2 focus:outline-none transition ${
          isScrolled
            ? "text-gray-600 hover:text-[#102e50]"
            : "text-white hover:text-gray-200"
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-gray-50"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b shadow-sm">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <div className="text-[#102e50] text-2xl font-extrabold">
                  Lexlytic
                </div>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-[#102e50]"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="p-4 overflow-y-auto h-[calc(100vh-130px)]">
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

            {/* Footer CTA */}
            <div className="absolute bottom-0 w-full p-4 border-t bg-white shadow-inner">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/contact-us"
                  className="block text-center text-gray-700 hover:text-[#102e50]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/register-interest"
                  className="block text-center bg-[#102e50] hover:bg-blue-700 text-white py-2 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Register Interest
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile dropdown item
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
    <li className="border border-[#102e50] rounded-xl shadow-sm">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold text-[#102e50] hover:text-[#0e2440]"
      >
        <span>{title}</span>
        {isActive ? (
          <ChevronDown className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isActive && dropdownData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-3"
          >
            <div className="space-y-4">
              {dropdownData.map((section) => (
                <div
                  key={section.title}
                  className="border border-gray-300 rounded-xl p-3 bg-white/70"
                >
                  <p className="text-sm font-bold text-[#102e50] mb-1">
                    {section.title}
                  </p>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="block text-sm text-gray-600 hover:text-[#102e50]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
