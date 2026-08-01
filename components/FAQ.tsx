export default function FAQ() {
  const faqs = [
    {
      question: "Which countries do you export to?",
      answer:
        "We serve customers across Asia, the Middle East, Europe, Africa, North America, and Oceania.",
    },
    {
      question: "Can you provide customized sourcing solutions?",
      answer:
        "Yes. We specialize in sourcing products based on your specific business requirements.",
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "MOQ depends on the product category. Please contact us for product-specific details.",
    },
    {
      question: "Do you assist with export documentation?",
      answer:
        "Yes. We handle all necessary export documentation to ensure a smooth international shipping process.",
    },
    {
      question: "How can I request a quotation?",
      answer:
        "Simply fill out the contact form above or reach out to us by email or phone. Our team will respond promptly.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 text-lg">
          Answers to common questions about our export services.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow p-6"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {faq.question}
              </h3>

              <p className="text-gray-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}