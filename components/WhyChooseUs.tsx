export default function WhyChooseUs() {
  const features = [
    {
      title: "Quality Assured Products",
      description:
        "Every product undergoes strict quality checks before shipment to ensure international standards.",
      icon: "✅",
    },
    {
      title: "Reliable Global Sourcing",
      description:
        "Strong partnerships with trusted manufacturers and suppliers across India.",
      icon: "🌍",
    },
    {
      title: "Competitive Pricing",
      description:
        "Cost-effective sourcing without compromising on product quality.",
      icon: "💰",
    },
    {
      title: "On-Time Delivery",
      description:
        "Efficient logistics planning and shipment coordination for timely delivery.",
      icon: "🚢",
    },
    {
      title: "Export Documentation",
      description:
        "Complete assistance with export documentation and international compliance.",
      icon: "📄",
    },
    {
      title: "Dedicated Customer Support",
      description:
        "Responsive communication and personalized assistance throughout the sourcing journey.",
      icon: "🤝",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Why Choose Erackel Traders?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 text-lg">
          Delivering trust, quality, and value to customers across global markets.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8"
            >

              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
