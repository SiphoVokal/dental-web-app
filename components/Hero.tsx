import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                Precision
                <br />
                <span className="italic">Dentistry</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
                Experience exceptional dental care where artistry meets precision. Every detail crafted for your perfect
                smile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-primary">
                Book Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>

            <div className="pt-8 border-t border-neutral-100">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-light">15+</div>
                  <div className="text-sm text-neutral-600 tracking-wide">YEARS</div>
                </div>
                <div>
                  <div className="text-2xl font-light">5K+</div>
                  <div className="text-sm text-neutral-600 tracking-wide">PATIENTS</div>
                </div>
                <div>
                  <div className="text-2xl font-light">98%</div>
                  <div className="text-sm text-neutral-600 tracking-wide">SATISFACTION</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-50 overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Modern dental practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-sm border border-neutral-100">
              <div className="text-sm text-neutral-600 tracking-wide">NEXT AVAILABLE</div>
              <div className="text-lg font-medium">Today 2:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
