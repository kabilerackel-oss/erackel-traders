export default function ExportProcess() {
  const steps = [
    {
      number: "01",
      title: "Receive Inquiry",
      description:
        "Understand customer requirements, specifications, quantities and destination country.",
    },
    {
      number: "02",
      title: "Product Sourcing",
      description:
        "Source products from trusted manufacturers and verified suppliers across India.",
    },
    {
      number: "03",
      title: "Quality Inspection",
      description:
        "Inspect products to ensure quality standards before packaging and dispatch.",
    },
    {
      number: "04",
      title: "Packaging & Documentation",
      description:
        "Prepare export-grade packaging along with complete export documentation.",
    },
    {
      number: "05",
      title: "Global Shipping",
      description:
        "Ship products safely through reliable logistics partners with shipment tracking.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Our Export Process
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16 text-lg">
          A simple, transparent, and reliable export workflow.
        </p>

        <div className="grid md:grid-cols-5 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-blue-900 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}