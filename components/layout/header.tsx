"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set initial state explicitly
    setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-gray-200"
                }`}
              >
                English <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <NavItem title="Products" isScrolled={isScrolled} />
          <NavItem title="Coverage" isScrolled={isScrolled} />
          <NavItem title="Customers" isScrolled={isScrolled} />
          <NavItem title="Solutions" isScrolled={isScrolled} />
          <NavItem title="Company" isScrolled={isScrolled} />
          <NavItem title="Resources" isScrolled={isScrolled} />
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

        {/* Mobile Menu */}
        <MobileMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
}

function NavItem({
  title,
  isScrolled,
}: {
  title: string;
  isScrolled: boolean;
}) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
          isScrolled
            ? "text-gray-700 hover:text-blue-600"
            : "text-white hover:text-gray-200"
        }`}
      >
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
