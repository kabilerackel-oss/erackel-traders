export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero/hero-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* Small Heading */}
        <p className="uppercase tracking-[5px] text-blue-200 font-semibold mb-6">
          Trusted Global Export Partner
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight">
          Connecting India
          <br />
          <span className="text-blue-400">
            To The World
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Erackel Traders specializes in sourcing and exporting premium food
          products, spices, industrial supplies, electrical & electronic
          equipment, event materials, and customized procurement solutions to
          customers across international markets.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="#products"
            className="bg-blue-700 hover:bg-blue-800 px-10 py-4 rounded-xl text-lg font-semibold shadow-xl transition duration-300"
          >
            Explore Products
          </a>

          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Request a Quote
          </a>

        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white text-sm md:text-base">

          <div>✅ IEC Registered</div>

          <div>🌍 Global Shipping</div>

          <div>🏆 Quality Assured</div>

          <div>🚢 End-to-End Export</div>

        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              25+
            </h2>

            <p className="text-gray-300 mt-2">
              Product Categories
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              100%
            </h2>

            <p className="text-gray-300 mt-2">
              Quality Focus
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Global
            </h2>

            <p className="text-gray-300 mt-2">
              Export Network
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              24/7
            </h2>

            <p className="text-gray-300 mt-2">
              Customer Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}