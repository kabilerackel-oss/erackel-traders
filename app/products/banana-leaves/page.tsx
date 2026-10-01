import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh Vazhayila Banana Leaf Supplier & Exporter from Kerala",
  description:
    "Erackel Traders sources and supplies fresh Vazhayila banana leaves from Kerala for restaurants, caterers, wholesalers, distributors and international buyers. Enquire for bulk banana leaf supply and export requirements.",
  keywords: [
    "vazhayila supplier",
    "vazhayila wholesaler",
    "vazhayila distributor",
    "vazhayila exporter",
    "vaazhayila supplier",
    "banana leaf supplier Kerala",
    "fresh banana leaf supplier",
    "banana leaf wholesaler",
    "banana leaf exporter India",
    "Kerala banana leaf exporter",
    "fresh vazhayila Kerala",
    "bulk banana leaf supplier",
    "banana leaf supplier UAE",
    "banana leaf supplier Bahrain",
  ],
  alternates: {
    canonical: "https://erackeltraders.com/products/banana-leaves",
  },
  openGraph: {
    title: "Fresh Vazhayila Banana Leaf Supplier & Exporter from Kerala",
    description:
      "Fresh Vazhayila banana leaf sourcing and supply from Kerala for wholesale, catering, food-service and international buyers.",
    url: "https://erackeltraders.com/products/banana-leaves",
    siteName: "Erackel Traders",
    type: "website",
    images: [
      {
        url: "/logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "Erackel Traders Fresh Vazhayila Banana Leaf Supply",
      },
    ],
  },
};

export default function BananaLeavesPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative bg-blue-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 opacity-95" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-blue-200 font-semibold mb-5">
            Kerala • India • Global Supply
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Fresh Vazhayila
            <br />
            <span className="text-blue-300">
              Banana Leaf Supplier & Exporter
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-8">
            Erackel Traders sources and supplies fresh Kerala Vazhayila
            banana leaves for restaurants, caterers, wholesalers, distributors,
            food-service businesses and international buyers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#quote"
              className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-blue-100 transition"
            >
              Request a Quote
            </a>

            <a
              href="tel:+918078795699"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-950 transition"
            >
              Call +91 8078795699
            </a>

          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold text-blue-950">
              Fresh Vazhayila Sourcing from Kerala
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Kerala has a strong tradition of using banana leaves for food
              serving, traditional meals, catering and food presentation.
              Erackel Traders connects buyers with sourcing opportunities for
              fresh Vazhayila according to their required quantity,
              specifications and delivery requirements.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              We work with sourcing partners to arrange fresh banana leaves
              for wholesale and commercial requirements, with a focus on
              dependable procurement and export coordination.
            </p>

          </div>

        </div>
      </section>

      {/* Vazhayila Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-950">
              Vazhayila Types
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Buyers can enquire about locally sourced Vazhayila types
              according to availability and specific requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-2xl font-bold text-blue-900">
                Kathil Vazhayila
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Fresh banana leaves sourced according to buyer requirements
                and seasonal availability. Suitable for traditional food
                service, catering and commercial requirements.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-2xl font-bold text-blue-900">
                Theanvaalai Vazhayila
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                A locally used Vazhayila type that can be sourced according
                to availability and buyer specifications.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-950">
              Fresh Banana Leaves for Commercial Requirements
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our sourcing service is suitable for businesses requiring
              fresh banana leaves for food service and related applications.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Restaurants",
              "Hotels",
              "Catering Companies",
              "Traditional Sadya",
              "Food Service Businesses",
              "Wholesale Distributors",
              "Retail Buyers",
              "Events & Functions",
              "International Buyers",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center"
              >
                <h3 className="font-semibold text-lg text-blue-900">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Supply Advantages */}
      <section className="py-20 bg-blue-950 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Our Vazhayila Sourcing Approach
            </h2>

            <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
              We coordinate sourcing based on the buyer's requirements
              rather than treating every order as a standard product.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Fresh Sourcing",
                text: "Fresh banana leaves sourced according to order requirements.",
              },
              {
                title: "Bulk Requirements",
                text: "Sourcing support for wholesale and commercial quantities.",
              },
              {
                title: "Buyer Specifications",
                text: "Requirements can be discussed for leaf type, quantity and presentation.",
              },
              {
                title: "Export Coordination",
                text: "Support for international buyers seeking Kerala-sourced banana leaves.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-blue-700 rounded-2xl p-6"
              >

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-blue-100 leading-7">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Export Markets */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-950">
            Kerala Banana Leaf Supply for International Buyers
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Erackel Traders can work with international buyers looking to
            source fresh Vazhayila from Kerala. Share your required quantity,
            destination, preferred specifications and delivery timeline so
            we can evaluate the sourcing and logistics requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {[
              "UAE",
              "Bahrain",
              "Qatar",
              "Oman",
              "Saudi Arabia",
              "Other GCC Markets",
            ].map((market) => (
              <span
                key={market}
                className="bg-gray-100 px-5 py-3 rounded-full font-semibold text-blue-900"
              >
                {market}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* Buyer Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-blue-950">
              Tell Us Your Vazhayila Requirement
            </h2>

            <p className="mt-4 text-gray-600">
              To prepare a sourcing quotation, please share as much
              information as possible.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">

            {[
              "Required quantity",
              "Preferred Vazhayila type",
              "Whole or cut leaves",
              "Packaging requirement",
              "Delivery destination",
              "Required delivery date",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <span className="text-blue-900 font-semibold">
                  ✓ {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-24 bg-white">

        <div className="max-w-3xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-950">
              Request a Vazhayila Quote
            </h2>

            <p className="mt-4 text-gray-600">
              Tell us what you need and our team will review your sourcing
              requirement.
            </p>

          </div>

          <form
            action="https://formsubmit.co/erackeltraders@gmail.com"
            method="POST"
            className="bg-gray-50 rounded-2xl shadow-lg p-8"
          >

            <input
              type="hidden"
              name="_subject"
              value="New Vazhayila Enquiry - Erackel Traders"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_next"
              value="https://erackeltraders.com/products/banana-leaves"
            />

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Phone / WhatsApp
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91..."
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>

            </div>

            <div className="mt-5">

              <label className="block font-semibold text-gray-700 mb-2">
                Vazhayila Requirement
              </label>

              <textarea
                name="requirement"
                rows={5}
                required
                placeholder="Quantity, type, whole/cut leaves, destination, packaging or any other requirement..."
                className="w-full border border-gray-300 rounded-lg p-4"
              ></textarea>

            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-950 text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition"
            >
              Request Quote
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Your requirement will be sent to Erackel Traders.
            </p>

          </form>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-950">
              Vazhayila Supplier FAQ
            </h2>

          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Where do you source fresh Vazhayila?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Erackel Traders sources fresh banana leaves from Kerala based
                on buyer requirements, quantity and availability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Do you supply Vazhayila in bulk?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Yes. We are available to discuss wholesale and bulk sourcing
                requirements for restaurants, caterers, distributors and
                international buyers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can I request a specific Vazhayila type?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Yes. Buyers can specify their preferred type, including
                Kathil or Theanvaalai, and we can evaluate sourcing based on
                availability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can you supply banana leaves for export?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We can evaluate export enquiries based on destination,
                quantity, packaging, freshness requirements and applicable
                logistics considerations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Looking for a Vazhayila Supplier?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Send us your quantity, preferred type and destination.
            We'll review your requirement and coordinate sourcing from Kerala.
          </p>

          <a
            href="#quote"
            className="inline-block mt-8 bg-white text-blue-950 px-9 py-4 rounded-xl font-bold hover:bg-blue-100 transition"
          >
            Request a Quote
          </a>

        </div>

      </section>

    </main>
  );
}