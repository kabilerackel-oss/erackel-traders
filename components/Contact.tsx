export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16 text-lg">
          We'd love to discuss your sourcing and export requirements.
        </p>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}
          <div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Office Address
              </h3>

              <p className="text-gray-600">
                Erackel Traders
                <br />
                Thiruvananthapuram
                <br />
                Kerala, India
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Phone
              </h3>

              <p className="text-gray-600">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Email
              </h3>

              <p className="text-gray-600">
                info@erackeltraders.com
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Business Hours
              </h3>

              <p className="text-gray-600">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>

          </div>

          {/* Right Side */}

          <form className="bg-white shadow-lg rounded-2xl p-8">

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-4"
              />
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-4"
              />
            </div>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-4"
              />
            </div>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-lg p-4"
              />
            </div>

            <div className="mb-5">
              <textarea
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full border rounded-lg p-4"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg w-full font-semibold hover:bg-blue-800 transition"
            >
              Request a Quote
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}