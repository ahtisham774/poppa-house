

export function ServiceCards({ services = [] }) {
  const defaultServices = [
    {
      title: "Cleaning Services",
      description: "A clean home is a happy home. Our professional cleaning services cover:",
      image: "/assets/cleaning.jpg"
    },
    {
      title: "Gardening & Lawn Maintenance Services",
      description: "Enhance your property's outdoor appeal with our expert gardening services:",
      image: "/assets/gardening.jpg"
    },
    {
      title: "Property Repairs & Maintenance Services",
      description: "Minor issues can become major problems if left unattended. We handle:",
      image: "/assets/repair.jpg"
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-primary mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">
          At Proppa House, explore a variety of property management services to keep your property in top condition effortlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-[0px_4px_4px_0px_#00000040]  overflow-hidden border border-gray-200 p-6">
              <div className="grid grid-cols-1  gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <button className="bg-secondary text-primary w-full py-3 rounded-md font-medium hover:bg-secondary transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
