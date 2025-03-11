export function ServiceAudience() {
    const audiences = [
      {
        title: "Working professionals",
        image: "/assets/WP.jpg",
      },
      {
        title: "International students",
        image: "/assets/IS.jpg",
      },
      {
        title: "Busy individuals",
        image: "/assets/BI.jpg",
      },
      {
        title: "Investors & landlords",
        image: "/assets/II.png",
      },
    ]
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Who This Service Is For?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={audience.image || "/placeholder.svg"}
                  alt={audience.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-normal">{audience.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  