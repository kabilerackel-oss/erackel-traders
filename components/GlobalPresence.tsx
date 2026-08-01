export default function GlobalPresence() {
  const regions = [
    "Middle East",
    "Asia",
    "Europe",
    "Africa",
    "North America",
    "Oceania",
  ];

  const highlights = [
    {
      value: "25+",
      label: "Product Categories",
    },
    {
      value: "100%",
      label: "Quality Focus",
    },
    {
      value: "Global",
      label: "Sourcing Network",
    },
    {
      value: "End-to-End",
      label: "Export Support",
    },
  ];

  return (
    <section id="global" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Global Presence
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16 text-lg">
          Delivering trusted sourcing and export solutions to customers across the world.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-2xl text-gray-500 font-semibold">
              🌍 World Map (Coming Next)
            </p>
          </div>

          <div>

            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Regions We Serve
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {regions.map((region) => (
                <div
                  key={region}
                  className="bg-blue-50 rounded-lg p-4 text-center font-semibold text-blue-900"
                >
                  {region}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <h4 className="text-3xl font-bold text-blue-900">
                    {item.value}
                  </h4>

                  <p className="text-gray-600 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}