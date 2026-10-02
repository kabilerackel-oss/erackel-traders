export default function Products() {
  const products = [
    {
      title: "Food Products",
      image: "/products/food.png",
      description:
        "Premium grains, cereals, pulses and healthy food products sourced for international markets.",
      items: [
        "Oats",
        "Organic Protein Powders",
        "Millets",
        "Rice",
      ],
    },
    {
      title: "Premium Spices",
      image: "/products/spices.png",
      description:
        "Authentic Indian spices carefully selected for global export.",
      items: [
        "Black Pepper",
        "Cardamom",
        "Turmeric",
        "Cinnamon",
      ],
    },
    {
      title: "Electrical & Electronic Equipment",
      image: "/products/electrical.png",
      description:
        "Reliable industrial electrical and electronic equipment.",
      items: [
        "Industrial Components",
        "LED Lighting",
        "Power Equipment",
        "Control Panels",
      ],
    },
    {
      title: "Event Management Supplies",
      image: "/products/events.png",
      description:
        "Professional event and exhibition materials.",
      items: [
        "Stage Materials",
        "Display Systems",
        "Fabrication",
        "Event Accessories",
      ],
    },
    {
      title: "Industrial Supplies",
      image: "/products/industrial.png",
      description:
        "Packaging materials, safety equipment and industrial consumables.",
      items: [
        "Packaging Materials",
        "Industrial Safety",
        "General Trading",
        "Industrial Consumables",
      ],
    },
    {
      title: "Customized Global Sourcing",
      image: "/products/sourcing.png",
      description:
        "End-to-end sourcing and procurement solutions tailored to customer requirements.",
      items: [
        "OEM Products",
        "Private Label",
        "Export Procurement",
        "Supply Chain",
      ],
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-blue-900">
            Our Products
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We export premium-quality products sourced from trusted
            manufacturers and suppliers across India, delivering reliable
            solutions to customers worldwide.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-blue-900">
                  {product.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {product.description}
                </p>

                <ul className="mt-5 space-y-2 text-gray-700">
                  {product.items.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  Enquire Now
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Dedicated Product Pages */}
        <div className="mt-20">

          <div className="text-center mb-10">

            <h3 className="text-3xl font-bold text-blue-950">
              Explore Our Dedicated Supply Pages
            </h3>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Looking for specific products? Explore our dedicated sourcing
              pages for detailed product information and enquiry options.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Oats */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">

              <p className="text-sm uppercase tracking-[3px] text-blue-600 font-semibold">
                Bulk Food Supply
              </p>

              <h4 className="mt-3 text-3xl font-bold text-blue-950">
                Oats Supplier, Wholesaler & Exporter
              </h4>

              <p className="mt-4 text-gray-600 leading-7">
                Explore our bulk oats sourcing solutions for wholesalers,
                distributors, food manufacturers, retailers and international
                buyers.
              </p>

              <a
                href="/products/oats"
                className="inline-block mt-6 bg-blue-950 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
              >
                Explore Oats Supply
              </a>

            </div>

            {/* Vazhayila */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">

              <p className="text-sm uppercase tracking-[3px] text-green-700 font-semibold">
                Fresh Kerala Supply
              </p>

              <h4 className="mt-3 text-3xl font-bold text-blue-950">
                Vazhayila Banana Leaf Supplier
              </h4>

              <p className="mt-4 text-gray-600 leading-7">
                Explore our fresh Vazhayila sourcing and supply service for
                restaurants, caterers, wholesalers, distributors and
                international buyers.
              </p>

              <a
                href="/products/banana-leaves"
                className="inline-block mt-6 bg-blue-950 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
              >
                Explore Vazhayila Supply
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}