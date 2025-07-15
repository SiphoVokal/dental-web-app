import Link from "next/link"

export default function CTASection() {
  return (
    <section className="section-padding bg-neutral-900 text-white">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">Ready to Begin?</h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Schedule your consultation and discover the difference of precision dental care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/book"
              className="bg-white text-neutral-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-neutral-100 transition-colors duration-300"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+1234567890"
              className="border border-white text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-neutral-900 transition-colors duration-300"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
