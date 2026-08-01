export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-bold text-blue-900 mb-8">
              About Erackel Traders
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Erackel Traders is a global sourcing and export company based in
              Kerala, India. We specialize in supplying premium-quality
              agricultural products, spices, industrial supplies, electrical &
              electronic equipment, event management materials, and customized
              procurement solutions to international buyers.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-8">
              We work directly with trusted manufacturers and suppliers,
              ensuring quality assurance, competitive pricing, timely delivery,
              and complete export documentation for clients across the globe.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-900">100%</h3>
                <p className="text-gray-600 mt-2">
                  Quality Inspection
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-900">Global</h3>
                <p className="text-gray-600 mt-2">
                  Export Network
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-900">Trusted</h3>
                <p className="text-gray-600 mt-2">
                  Supplier Network
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-900">End-to-End</h3>
                <p className="text-gray-600 mt-2">
                  Export Solutions
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}

          <div>
            <img
              src="/about/about-company.png"
              alt="Erackel Traders"
              className="rounded-3xl shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}