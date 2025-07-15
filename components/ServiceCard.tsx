import Link from "next/link"

interface Service {
  title: string
  description: string
  features: string[]
  price: string
  popular: boolean
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={`bg-white p-8 relative ${service.popular ? "ring-1 ring-neutral-900" : ""}`}>
      {service.popular && (
        <div className="absolute -top-3 left-8">
          <div className="bg-neutral-900 text-white px-4 py-1 text-xs font-medium tracking-wide uppercase">
            Most Popular
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-light tracking-wide">{service.title}</h3>
          <p className="text-neutral-600 leading-relaxed">{service.description}</p>
        </div>

        <div className="space-y-3">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
              <span className="text-sm text-neutral-600">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-neutral-100 space-y-4">
          <div className="text-2xl font-light">{service.price}</div>
          <Link
            href="/book"
            className={`block w-full py-3 px-6 text-center text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
              service.popular
                ? "bg-neutral-900 text-white hover:bg-neutral-700"
                : "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
