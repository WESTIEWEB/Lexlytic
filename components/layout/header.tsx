"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "@/components/layout/mobile-menu";

interface DropdownSection {
  title: string;
  items: string[];
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Ref for dropdown items to detect clicks outside
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems: { title: string; dropdownData?: DropdownSection[] }[] = [
    {
      title: "Products",
      dropdownData: [
        {
          title: "Legal Research",
          items: [
            "vLex Legal Research",
            "Docket Alarm",
            "Fastcase Legal Research",
          ],
        },
        {
          title: "Legal AI",
          items: ["Vincent AI"],
        },
        {
          title: "Legal Analytics",
          items: ["vLex Analytics", "Docket Alarm Analytics"],
        },
        {
          title: "Tools",
          items: [
            "Chrome Extension",
            "Word Plugin",
            "vLex Mobile",
            "vLex Cloud",
          ],
        },
        {
          title: "Practice Management",
          items: ["NextChapter", "Quolaw", "Eunomia"],
        },
        {
          title: "Enterprise",
          items: [
            "Legal Data APIs",
            "Iceberg AI",
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
          title: "Regions",
          items: ["North America", "Europe", "Asia", "Latin America", "Africa"],
        },
        {
          title: "Jurisdictions",
          items: ["US Federal", "UK Courts", "EU Regulations"],
        },
      ],
    },
    {
      title: "Customers",
      dropdownData: [
        {
          title: "Industries",
          items: ["Law Firms", "Corporate Legal", "Academia"],
        },
        {
          title: "Success Stories",
          items: ["Case Studies", "Testimonials", "Client Reviews"],
        },
      ],
    },
    {
      title: "Solutions",
      dropdownData: [
        {
          title: "By Use Case",
          items: ["Compliance", "Due Diligence", "Litigation"],
        },
        { title: "By Role", items: ["Lawyers", "Researchers", "Students"] },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <div className="flex items-center space-x-2">
              <div
                className={`text-4xl font-extrabold tracking-tight ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                vLex
              </div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(({ title, dropdownData }) => (
            <NavItem
              key={title}
              title={title}
              dropdownData={dropdownData}
              isScrolled={isScrolled}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              dropdownRef={dropdownRef}
            />
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/signin"
            className={`text-sm font-medium ${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-gray-200"
            }`}
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>

        <MobileMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
}

function NavItem({
  title,
  dropdownData,
  isScrolled,
  activeDropdown,
  setActiveDropdown,
  dropdownRef,
}: {
  title: string;
  dropdownData?: DropdownSection[];
  isScrolled: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (val: string | null) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>; // Update ref type here
}) {
  const isActive = activeDropdown === title;
  const toggleDropdown = () => setActiveDropdown(isActive ? null : title);

  return (
    <div className="relative group">
      <button
        onClick={dropdownData ? toggleDropdown : undefined}
        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
          isScrolled
            ? "text-gray-700 hover:text-blue-600"
            : "text-white hover:text-gray-200"
        }`}
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {dropdownData && isActive && (
        <div
          ref={dropdownRef}
          className="absolute left-1/2 top-full z-50 mt-2 w-[700px] -translate-x-1/2 rounded-lg bg-white p-6 shadow-xl"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 bg-white shadow-md" />
          <div className="grid grid-cols-3 gap-6">
            {dropdownData.map((section) => (
              <div key={section.title}>
                <h4 className="mb-2 text-sm font-semibold text-blue-600">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-700 hover:text-blue-600"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
