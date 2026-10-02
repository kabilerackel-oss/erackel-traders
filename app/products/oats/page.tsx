import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Oats Supplier, Wholesaler & Exporter in India",
  description:
    "Erackel Traders supplies bulk oats from India for food manufacturers, wholesalers, distributors, retailers and international buyers. Enquire for rolled oats, whole oats and customized bulk sourcing.",
  keywords: [
    "oats supplier India",
    "oats wholesaler India",
    "oats distributor India",
    "oats exporter India",
    "bulk oats supplier",
    "bulk oats exporter",
    "rolled oats supplier",
    "rolled oats exporter India",
    "whole oats supplier",
    "oats supplier for food manufacturers",
    "oats wholesale India",
    "oats supplier UAE",
    "oats supplier Bahrain",
    "oats supplier GCC",
  ],
  alternates: {
    canonical: "https://erackeltraders.com/products/oats",
  },
  openGraph: {
    title: "Bulk Oats Supplier, Wholesaler & Exporter in India",
    description:
      "Bulk oats sourcing and export solutions from India for wholesalers, distributors, food manufacturers and international buyers.",
    url: "https://erackeltraders.com/products/oats",
    siteName: "Erackel Traders",
    type: "website",
    images: [
      {
        url: "/logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "Erackel Traders Oats Supplier India",
      },
    ],
  },
};

export default function OatsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://erackeltraders.com/#organization",
        name: "Erackel Traders",
        url: "https://erackeltraders.com",
        logo: "https://erackeltraders.com/logo/Logo.png",
        telephone: "+918078795699",
        email: "erackeltraders@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://erackeltraders.com/#website",
        url: "https://erackeltraders.com",
        name: "Erackel Traders",
        publisher: {
          "@id": "https://erackeltraders.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://erackeltraders.com/products/oats#webpage",
        url: "https://erackeltraders.com/products/oats",
        name: "Bulk Oats Supplier, Wholesaler & Exporter in India",
        description:
          "Erackel Traders supplies bulk oats from India for food manufacturers, wholesalers, distributors, retailers and international buyers.",
        isPartOf: {
          "@id": "https://erackeltraders.com/#website",
        },
        about: {
          "@type": "Thing",
          name: "Bulk Oats Supply",
        },
        breadcrumb: {
          "@id": "https://erackeltraders.com/products/oats#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://erackeltraders.com/products/oats#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://erackeltraders.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Oats",
            item: "https://erackeltraders.com/products/oats",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://erackeltraders.com/products/oats#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you supply oats in bulk?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can discuss bulk oats sourcing requirements for wholesalers, distributors, food manufacturers and international buyers.",
            },
          },
          {
            "@type": "Question",
            name: "Can you supply rolled oats?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rolled oats can be sourced according to the required specification, quantity, packaging and destination.",
            },
          },
          {
            "@type": "Question",
            name: "Do you supply oats to wholesalers and distributors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our sourcing service is available for wholesale, distribution and commercial procurement requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can you export oats from India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can evaluate international oats enquiries based on product specifications, quantity, packaging, destination and applicable logistics requirements.",
            },
          },
          {
            "@type": "Question",
            name: "How can I request an oats quotation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Send us your required quantity, oats specification, packaging preference and destination through the enquiry form on this page.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero */}
      <section className="relative bg-blue-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 opacity-95" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-blue-200 font-semibold mb-5">
            India • Bulk Supply • Global Sourcing
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Bulk Oats Supplier,
            <br />
            <span className="text-blue-300">
              Wholesaler & Exporter in India
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-8">
            Erackel Traders connects international buyers with reliable
            sourcing opportunities for bulk oats from India, serving food
            manufacturers, wholesalers, distributors, retailers and
            commercial buyers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#quote"
              className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-blue-100 transition"
            >
              Request an Oats Quote
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
              Oats Supplier for Bulk and Commercial Requirements
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Erackel Traders supports buyers looking to source oats from
              India for wholesale, distribution, food manufacturing,
              retail and international trade requirements.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              We coordinate with suitable suppliers based on the buyer's
              required product specification, quantity, packaging,
              destination and delivery requirements.
            </p>

          </div>

        </div>
      </section>

      {/* Oats Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-950">
              Oats Products We Can Source
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Product availability and specifications depend on the buyer's
              requirements and supplier availability.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Rolled Oats",
                text: "Bulk rolled oats sourcing for food businesses, distributors and commercial buyers.",
              },
              {
                title: "Old-Fashioned Rolled Oats",
                text: "Sourcing support for buyers requiring traditional rolled oats specifications.",
              },
              {
                title: "Whole Oats",
                text: "Whole oat sourcing for suitable food and processing applications.",
              },
              {
                title: "Bulk Oats",
                text: "Commercial quantities arranged according to buyer requirements.",
              },
              {
                title: "Private Label Oats",
                text: "Sourcing and procurement support for businesses exploring private-label opportunities.",
              },
              {
                title: "Customized Oats Supply",
                text: "Product, packaging and sourcing requirements can be discussed for specific orders.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-lg p-7"
              >

                <h3 className="text-2xl font-bold text-blue-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Buyer Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-950">
              Who We Supply
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our oats sourcing service is designed for businesses with
              wholesale, manufacturing, distribution and export requirements.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Food Manufacturers",
              "Oats Wholesalers",
              "Food Distributors",
              "Importers",
              "Retailers",
              "Supermarkets",
              "Private Label Businesses",
              "Food Service Companies",
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

      {/* Why Source From Us */}
      <section className="py-20 bg-blue-950 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Oats Sourcing from India
            </h2>

            <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
              We focus on matching buyer requirements with suitable
              sourcing and supply options rather than treating every order
              as a standard product.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Supplier Sourcing",
                text: "We identify suitable sourcing options based on your product requirements.",
              },
              {
                title: "Bulk Procurement",
                text: "Commercial quantities can be discussed based on order requirements.",
              },
              {
                title: "Packaging Options",
                text: "Packaging requirements can be discussed according to the product and destination.",
              },
              {
                title: "Export Coordination",
                text: "We coordinate sourcing and export requirements for international buyers.",
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
            Oats Export from India
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Erackel Traders works with international buyers interested in
            sourcing oats from India. Share your required quantity,
            product specification, packaging preference and destination
            so we can evaluate the sourcing and logistics requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {[
              "UAE",
              "Bahrain",
              "Qatar",
              "Oman",
              "Saudi Arabia",
              "Other GCC Markets",
              "Other International Markets",
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
              Tell Us Your Oats Requirement
            </h2>

            <p className="mt-4 text-gray-600">
              The more information you provide, the easier it is for us
              to evaluate the sourcing requirement.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">

            {[
              "Required quantity",
              "Oats product type",
              "Product specification",
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
              Request an Oats Quote
            </h2>

            <p className="mt-4 text-gray-600">
              Tell us your oats requirement and destination.
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
              value="New Oats Enquiry - Erackel Traders"
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
              value="https://erackeltraders.com/products/oats"
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
                Oats Requirement
              </label>

              <textarea
                name="requirement"
                rows={5}
                required
                placeholder="Quantity, product type, specification, packaging, destination and any other requirement..."
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
              Oats Supplier FAQ
            </h2>

          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Do you supply oats in bulk?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Yes. We can discuss bulk oats sourcing requirements for
                wholesalers, distributors, food manufacturers and
                international buyers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can you supply rolled oats?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Rolled oats can be sourced according to the required
                specification, quantity, packaging and destination.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Do you supply oats to wholesalers and distributors?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Yes. Our sourcing service is available for wholesale,
                distribution and commercial procurement requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can you export oats from India?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We can evaluate international oats enquiries based on
                product specifications, quantity, packaging, destination
                and applicable logistics requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                How can I request an oats quotation?
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Send us your required quantity, oats specification,
                packaging preference and destination through the enquiry
                form on this page.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-blue-950">
              Explore Erackel Traders
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="/"
                className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
              >
                Home
              </a>

              <a
                href="/products/banana-leaves"
                className="bg-gray-100 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Vazhayila Banana Leaf Supply
              </a>

              <a
                href="/#products"
                className="bg-gray-100 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                All Products
              </a>

              <a
                href="/#contact"
                className="bg-gray-100 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Contact Erackel Traders
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Looking for a Bulk Oats Supplier?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Share your product specification, quantity and destination.
            We'll review your requirement and coordinate sourcing options.
          </p>

          <a
            href="#quote"
            className="inline-block mt-8 bg-white text-blue-950 px-9 py-4 rounded-xl font-bold hover:bg-blue-100 transition"
          >
            Request an Oats Quote
          </a>

        </div>

      </section>

    </main>
  );
}