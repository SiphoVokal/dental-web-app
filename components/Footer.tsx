import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-light tracking-wider">SMILECARE</div>
            <p className="text-sm text-neutral-600 leading-relaxed">Precision dentistry with artistry and care.</p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Navigation</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                About
              </Link>
              <Link
                href="/services"
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Services
              </Link>
              <Link href="/book" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Book
              </Link>
              <Link href="/contact" className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Services</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div>General Care</div>
              <div>Cosmetic Dentistry</div>
              <div>Restorative Treatment</div>
              <div>Emergency Care</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Contact</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div>
                123 Dental Street
                <br />
                City, State 12345
              </div>
              <div>(123) 456-7890</div>
              <div>info@smilecare.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-100 mt-16 pt-8 text-center">
          <p className="text-sm text-neutral-500">© 2024 SmileCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
