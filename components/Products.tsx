export default function Products() {
  const products = [
    {
      title: "Food Products",
      image: "/products/food.png",
      description:
        "Premium grains, cereals, pulses and healthy food products sourced for international markets.",
      items: ["Oats", "Organic Protein Powders", "Millets", "Rice"],
    },
    {
      title: "Premium Spices",
      image: "/products/spices.png",
      description:
        "Authentic Indian spices carefully selected for global export.",
      items: ["Black Pepper", "Cardamom", "Turmeric", "Cinnamon"],
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
        "Decorative Paper",
        "Stage Materials",
        "Display Stands",
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
        "Safety Equipment",
        "Industrial Consumables",
        "General Trading",
      ],
    },
    {
      title: "Customized Global Sourcing",
      image: "/products/sourcing.png",
      description:
        "End-to-end sourcing and procurement tailored to buyer requirements.",
      items: [
        "OEM Products",
        "Private Label Manufacturing",
        "Buyer Procurement",
        "Export Solutions",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-blue-900">
          Our Products
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 text-lg">
          Delivering quality products to customers across international markets.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-5">
                  {product.description}
                </p>

                <ul className="space-y-2 text-gray-700">
                  {product.items.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>

                <button className="mt-6 bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                  View Products →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}