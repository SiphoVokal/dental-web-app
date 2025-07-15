import Link from "next/link"

const services = [
  {
    title: "General Care",
    description: "Comprehensive oral health maintenance and preventive treatments.",
    price: "From $150",
  },
  {
    title: "Cosmetic",
    description: "Aesthetic enhancements for your perfect smile transformation.",
    price: "From $300",
  },
  {
    title: "Restorative",
    description: "Advanced solutions to restore function and natural beauty.",
    price: "From $800",
  },
  {
    title: "Emergency",
    description: "Immediate care for urgent dental situations and pain relief.",
    price: "From $200",
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive dental care tailored to your individual needs, delivered with precision and artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 group hover:shadow-sm transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-medium tracking-wide">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{service.description}</p>
                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-sm font-medium tracking-wide">{service.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
