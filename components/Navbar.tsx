"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-wider">
            SMILECARE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <Link href="/book" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-neutral-100 bg-white">
            <div className="py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
              <Link href="/book" className="block btn-primary text-center" onClick={() => setIsOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
