export default function Services() {
  const services = [
    {
      title: "Global Product Sourcing",
      description:
        "Connecting buyers with reliable Indian manufacturers and suppliers.",
      icon: "🌍",
    },
    {
      title: "Export Documentation",
      description:
        "Complete export documentation and compliance support.",
      icon: "📄",
    },
    {
      title: "Quality Inspection",
      description:
        "Strict quality checks before shipment to ensure international standards.",
      icon: "✅",
    },
    {
      title: "Packaging Solutions",
      description:
        "Professional export packaging for safe international transportation.",
      icon: "📦",
    },
    {
      title: "Logistics Coordination",
      description:
        "Sea freight, air freight and shipment coordination.",
      icon: "🚢",
    },
    {
      title: "Custom Procurement",
      description:
        "Customized sourcing based on customer specifications.",
      icon: "🤝",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-blue-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Comprehensive export services designed to simplify international
            trade and deliver reliable business solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-8 text-center"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}