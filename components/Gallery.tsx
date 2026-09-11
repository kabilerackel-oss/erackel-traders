export default function Gallery() {
  const images = [
    {
      src: "/gallery/gallery-1.jpg",
      title: "Global Trade & Export",
    },
    {
      src: "/gallery/gallery-2.jpg",
      title: "Quality Products",
    },
    {
      src: "/gallery/gallery-3.jpg",
      title: "Product Sourcing",
    },
    {
      src: "/gallery/gallery-4.jpg",
      title: "Packaging & Logistics",
    },
    {
      src: "/gallery/gallery-5.jpg",
      title: "International Shipping",
    },
    {
      src: "/gallery/gallery-6.jpg",
      title: "Business & Trade",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-blue-900">
            Our Gallery
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            A glimpse into our products, sourcing activities, export operations,
            packaging and international trade solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}