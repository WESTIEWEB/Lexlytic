"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export function MobileMenu({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveSubmenu(null);
    }
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
                  vLex
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
              <MobileMenuItem
                title="Products"
                isActive={activeSubmenu === "products"}
                onClick={() => toggleSubmenu("products")}
              />
              <MobileMenuItem
                title="Coverage"
                isActive={activeSubmenu === "coverage"}
                onClick={() => toggleSubmenu("coverage")}
              />
              <MobileMenuItem
                title="Customers"
                isActive={activeSubmenu === "customers"}
                onClick={() => toggleSubmenu("customers")}
              />
              <MobileMenuItem
                title="Solutions"
                isActive={activeSubmenu === "solutions"}
                onClick={() => toggleSubmenu("solutions")}
              />
              <MobileMenuItem
                title="Company"
                isActive={activeSubmenu === "company"}
                onClick={() => toggleSubmenu("company")}
              />
              <MobileMenuItem
                title="Resources"
                isActive={activeSubmenu === "resources"}
                onClick={() => toggleSubmenu("resources")}
              />
              <li>
                <div className="relative group">
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                    English <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </li>
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/signin"
                className="block w-full py-2 text-center text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/get-started"
                className="block w-full py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Get Started
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
  isActive,
  onClick,
}: {
  title: string;
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

      {isActive && (
        <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
          <li>
            <Link
              href="#"
              className="block py-1 text-gray-600 hover:text-blue-600"
            >
              Option 1
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-1 text-gray-600 hover:text-blue-600"
            >
              Option 2
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-1 text-gray-600 hover:text-blue-600"
            >
              Option 3
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}
