export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>
            <h3 className="text-3xl font-bold mb-5">
              Erackel Traders
            </h3>

            <p className="text-gray-300 leading-7">
              Your trusted partner for global sourcing and export solutions,
              delivering quality products with reliability and professionalism.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Products */}

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Food Products</li>
              <li>Premium Spices</li>
              <li>Oats</li>
              <li>Electrical Equipment</li>
              <li>Industrial Products</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                📍 Thiruvananthapuram, Kerala, India
              </p>

              <p>
                📞 +91 XXXXX XXXXX
              </p>

              <p>
                📧 info@erackeltraders.com
              </p>

              <p>
                🌐 www.erackeltraders.com
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-blue-800 mt-14 pt-8 text-center text-gray-400">

          © 2026 Erackel Traders. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}