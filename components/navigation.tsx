"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Over ons" },
    { href: "/projects", label: "Projecten" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className="bg-background border-b border-border sticky top-0 z-50"
      role="navigation"
      aria-label="Hoofdnavigatie"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          >
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E+</span>
            </div>
            <span className="font-bold text-xl text-foreground">ExtensionsPlus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button size="sm" className="flex items-center gap-2" asChild>
              <Link href="tel:+31123456789" aria-label="Bel ExtensionsPlus op +31 123 456 789">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Telefoonnummer: </span>
                Bel ons
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Sluit menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background">
              <ul role="menu" aria-label="Mobiele navigatie">
                {navItems.map((item) => (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button size="sm" className="w-full flex items-center justify-center gap-2" asChild>
                  <Link href="tel:+31123456789" aria-label="Bel ExtensionsPlus op +31 123 456 789">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Telefoonnummer: </span>
                    Bel ons
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
