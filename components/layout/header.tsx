"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { MobileMenu } from "@/components/layout/mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="text-4xl font-extrabold tracking-tight">vLex</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                English <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <NavItem title="Products" />
          <NavItem title="Coverage" />
          <NavItem title="Customers" />
          <NavItem title="Solutions" />
          <NavItem title="Company" />
          <NavItem title="Resources" />
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="text-sm font-medium text-gray-700 hover:text-blue-600">
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
        <MobileMenu />
      </div>
    </header>
  )
}

function NavItem({ title }: { title: string }) {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
        {title} <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-1">
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 1
          </Link>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 2
          </Link>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 3
          </Link>
        </div>
      </div>
    </div>
  )
}
