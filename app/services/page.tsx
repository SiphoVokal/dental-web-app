import ServiceCard from "@/components/ServiceCard"

export const metadata = {
  title: "Services — SMILECARE",
  description: "Comprehensive dental services delivered with precision and artistry.",
}

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive oral health care and preventive treatments",
    features: [
      "Regular examinations",
      "Professional cleanings",
      "Preventive care",
      "Oral health education",
      "Early intervention",
    ],
    price: "From $150",
    popular: false,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Aesthetic enhancements for your perfect smile",
    features: ["Professional whitening", "Porcelain veneers", "Smile design", "Aesthetic bonding", "Gum contouring"],
    price: "From $300",
    popular: true,
  },
  {
    title: "Restorative Care",
    description: "Advanced solutions to restore function and beauty",
    features: [
      "Dental implants",
      "Crown and bridge",
      "Advanced fillings",
      "Full mouth restoration",
      "Precision prosthetics",
    ],
    price: "From $800",
    popular: false,
  },
  {
    title: "Emergency Care",
    description: "Immediate relief for urgent dental situations",
    features: ["Same-day appointments", "Pain management", "Trauma treatment", "Urgent repairs", "24/7 consultation"],
    price: "From $200",
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight">Our Services</h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Comprehensive dental care delivered with precision, artistry, and genuine attention to your individual
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">Begin Your Journey</h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Schedule your consultation and experience the difference of precision dental care.
            </p>
            <a
              href="/book"
              className="inline-block bg-white text-neutral-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-neutral-100 transition-colors duration-300"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
