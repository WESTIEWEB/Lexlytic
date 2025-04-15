import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-white mb-8">
              <div className="text-4xl font-extrabold tracking-tight">Lexlytic</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/careers" text="Careers" />
              <FooterLink href="/terms" text="Terms & Conditions" />
              <FooterLink href="/privacy" text="Privacy Policy" />
              <FooterLink href="/press" text="Press" />
              <FooterLink href="/fastcase" text="Fastcase 50" />
              <FooterLink href="/contact" text="Contact Us" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/guides" text="User Guides" />
              <FooterLink href="/walkthroughs" text="Video Walkthroughs" />
              <FooterLink href="/librarian" text="Librarian Resources" />
              <FooterLink href="/training" text="Training" />
              <FooterLink href="/knowledge" text="Knowledge Base" />
              <FooterLink href="/branding" text="Branding & Logos" />
              <FooterLink href="/partners" text="Publishing Partners" />
              <FooterLink href="/integrations" text="Integrations" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Who We Work With</h3>
            <ul className="space-y-2">
              <FooterLink href="/small-firms" text="Solo & Small Firms" />
              <FooterLink href="/large-firms" text="Large Law Firms" />
              <FooterLink href="/in-house" text="In-House Counsel" />
              <FooterLink href="/law-schools" text="Law Schools" />
              <FooterLink href="/government" text="Government" />
              <FooterLink href="/investigations" text="Investigations" />
              <FooterLink href="/bar-associations" text="Bar Associations" />
              <FooterLink href="/librarians" text="Law Librarians" />
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-200 mb-4 md:mb-0">© 2024 Lexlytic, LLC</p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="text-blue-200 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="text-blue-200 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://linkedin.com" className="text-blue-200 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href} className="text-blue-200 hover:text-white transition-colors">
        {text}
      </Link>
    </li>
  )
}
