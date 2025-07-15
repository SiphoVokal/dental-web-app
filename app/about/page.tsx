export const metadata = {
  title: "About — SMILECARE",
  description: "Learn about our philosophy of precision dentistry and commitment to exceptional care.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-light tracking-tight">Our Philosophy</h1>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  For over fifteen years, we have dedicated ourselves to the art and science of dentistry. Every
                  treatment is approached with meticulous attention to detail and genuine care for our patients.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
                <div className="text-center">
                  <div className="text-3xl font-light">15+</div>
                  <div className="text-sm text-neutral-600 tracking-wide">YEARS EXPERIENCE</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light">5000+</div>
                  <div className="text-sm text-neutral-600 tracking-wide">PATIENTS SERVED</div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/5] bg-neutral-50 overflow-hidden">
              <img src="/placeholder.svg?height=600&width=480" alt="Dr. Smith" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium tracking-wide">Precision</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every procedure executed with meticulous attention to detail
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium tracking-wide">Artistry</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Combining technical skill with aesthetic sensibility
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium tracking-wide">Care</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Compassionate treatment tailored to individual needs
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium tracking-wide">Excellence</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Unwavering commitment to the highest standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">Our Team</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="aspect-square bg-neutral-50 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Sarah Smith"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium tracking-wide">Dr. Sarah Smith</h3>
                <p className="text-sm text-neutral-600 tracking-wide">LEAD DENTIST</p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  DDS Harvard, 15+ years specializing in precision dentistry
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="aspect-square bg-neutral-50 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Michael Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium tracking-wide">Dr. Michael Johnson</h3>
                <p className="text-sm text-neutral-600 tracking-wide">ORAL SURGEON</p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Specialist in advanced surgical procedures and implants
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="aspect-square bg-neutral-50 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Lisa Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium tracking-wide">Lisa Rodriguez</h3>
                <p className="text-sm text-neutral-600 tracking-wide">DENTAL HYGIENIST</p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Expert in preventive care and patient education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
