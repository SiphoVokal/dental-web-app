const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The attention to detail and level of care exceeded every expectation. A truly exceptional experience.",
    treatment: "Cosmetic Enhancement",
  },
  {
    name: "Michael Chen",
    text: "Professional excellence combined with genuine care. The results speak for themselves.",
    treatment: "Restorative Treatment",
  },
  {
    name: "Emily Rodriguez",
    text: "Seamless process from consultation to completion. Highly recommend their expertise.",
    treatment: "General Care",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">Patient Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-700 italic">"{testimonial.text}"</p>
              <div className="space-y-1">
                <div className="font-medium tracking-wide">{testimonial.name}</div>
                <div className="text-sm text-neutral-600 tracking-wide">{testimonial.treatment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
