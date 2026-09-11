export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We'd love to discuss your sourcing and export requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Contact Information */}
          <div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Office Address
              </h3>

              <p className="text-gray-600 leading-7">
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

              <a
                href="tel:+918078795699"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                +91 8078795699
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Email
              </h3>

              <a
                href="mailto:erackeltraders@gmail.com"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                erackeltraders@gmail.com
              </a>
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

            {/* Google Map */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Find Us
              </h3>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=8.5506485,76.9727244&z=17&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Erackel Traders Location"
                ></iframe>
              </div>

              <a
                href="https://maps.app.goo.gl/rfu3cJbyBqTDhSe69"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-700 font-semibold hover:text-blue-900 transition"
              >
                Open in Google Maps →
              </a>
            </div>

          </div>

          {/* Enquiry Form */}
          <form
            action="https://formsubmit.co/erackeltraders@gmail.com"
            method="POST"
            className="bg-white shadow-lg rounded-2xl p-8"
          >

            <input
              type="hidden"
              name="_subject"
              value="New Enquiry - Erackel Traders Website"
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
              value="https://erackeltraders.com/#contact"
            />

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Company Name
              </label>

              <input
                type="text"
                name="company"
                placeholder="Company name"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Product / Requirement
              </label>

              <input
                type="text"
                name="requirement"
                placeholder="What are you looking for?"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your requirement..."
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg w-full font-semibold hover:bg-blue-800 hover:shadow-lg transition"
            >
              Send Enquiry
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Your enquiry will be sent to our team.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}