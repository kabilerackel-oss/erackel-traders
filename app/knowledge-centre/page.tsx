import Link from "next/link";

export const metadata = {
  title: "Knowledge Centre | Export & Sourcing Guides",
  description:
    "Practical guides on oats, Vazhayila banana leaves, product sourcing, export procurement and international trade from Erackel Traders.",
};

const articles = [
  {
    category: "Oats",
    title: "What Are Rolled Oats? A Guide for Bulk Buyers",
    description:
      "Understand rolled oats, common applications, buying considerations and what bulk buyers should discuss with an oats supplier.",
    link: "/products/oats",
  },
  {
    category: "Vazhayila",
    title: "What Is Vazhayila? A Guide for Bulk Buyers",
    description:
      "Learn about fresh Vazhayila banana leaves, their commercial applications and important considerations when sourcing in bulk.",
    link: "/products/banana-leaves",
  },
  {
    category: "Oats",
    title: "How to Choose an Oats Supplier in India",
    description:
      "Key points buyers can consider when evaluating an Indian oats supplier for wholesale and export requirements.",
    link: "/products/oats",
  },
  {
    category: "Vazhayila",
    title: "How to Buy Fresh Vazhayila in Bulk",
    description:
      "A practical overview of sourcing fresh Vazhayila for restaurants, caterers, food businesses and international buyers.",
    link: "/products/banana-leaves",
  },
];

export default function KnowledgeCentrePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-blue-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-blue-300 font-semibold mb-5">
            Erackel Traders
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Knowledge Centre
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-8">
            Practical information for buyers looking to source products from
            India, understand product specifications and work with reliable
            export and sourcing partners.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-950">
            Export & Product Sourcing Guides
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Our Knowledge Centre brings together useful information about
            products we source and supply, including oats and fresh Vazhayila
            banana leaves. The goal is to help wholesalers, distributors,
            manufacturers, restaurants, caterers and international buyers make
            better sourcing decisions.
          </p>

        </div>
      </section>

      {/* Articles */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {articles.map((article, index) => (
              <article
                key={index}
                className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 bg-white"
              >

                <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-semibold">
                  {article.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-blue-950 leading-tight">
                  {article.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {article.description}
                </p>

                <Link
                  href={article.link}
                  className="inline-flex mt-6 text-blue-700 font-semibold hover:text-blue-900 transition"
                >
                  Explore related product →
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Product Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-950">
              Explore Our Products
            </h2>

            <p className="mt-4 text-gray-600">
              Looking for a supplier? Explore our product pages and send us
              your requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <Link
              href="/products/oats"
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-950 group-hover:text-blue-700">
                Bulk Oats
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Explore our oats sourcing and supply information for
                wholesalers, distributors, manufacturers and other bulk buyers.
              </p>

              <span className="inline-block mt-5 text-blue-700 font-semibold">
                View Oats →
              </span>
            </Link>

            <Link
              href="/products/banana-leaves"
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-950 group-hover:text-blue-700">
                Fresh Vazhayila Banana Leaves
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Explore our Vazhayila sourcing information, leaf types,
                commercial applications and bulk supply options.
              </p>

              <span className="inline-block mt-5 text-blue-700 font-semibold">
                View Vazhayila →
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Have a Specific Sourcing Requirement?
          </h2>

          <p className="mt-6 text-blue-100 text-lg leading-8">
            Tell us what you are looking for, including product,
            specifications, quantity and destination. We can review your
            requirement and discuss the sourcing options.
          </p>

          <Link
            href="/#contact"
            className="inline-flex mt-8 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-100 transition"
          >
            Request a Quote
          </Link>

        </div>
      </section>

    </main>
  );
}