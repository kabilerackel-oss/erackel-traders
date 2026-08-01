export default function Industries() {
  const industries = [
    {
      title: "Food & Beverage",
      description:
        "Supplying grains, spices, cereals, and specialty food products to importers and distributors worldwide.",
    },
    {
      title: "Retail & Wholesale",
      description:
        "Reliable sourcing for supermarkets, wholesalers, trading companies, and retail chains.",
    },
    {
      title: "Hospitality",
      description:
        "Products for hotels, resorts, restaurants, and catering businesses.",
    },
    {
      title: "Event Management",
      description:
        "Event materials, decorative products, exhibition supplies, and customized procurement.",
    },
    {
      title: "Industrial Procurement",
      description:
        "Industrial supplies, safety equipment, electrical products, and business sourcing solutions.",
    },
    {
      title: "Government & Institutions",
      description:
        "Supporting institutional buyers with quality products and dependable export services.",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Industries We Serve
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 text-lg">
          Delivering reliable sourcing solutions across multiple industries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8"
            >

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {industry.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}