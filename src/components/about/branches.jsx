export function Branches() {
    const branches = [
      {
        name: "London",
        image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Hull",
        image: "https://images.unsplash.com/photo-1597051966392-4befbbc114bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Sheffield",
        image: "https://images.unsplash.com/photo-1604154315861-e1803bfcaf30?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Liverpool",
        image: "/assets/liverpool.jpg",
      },
      {
        name: "Doncaster",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Doncaster%2C_Minster_church_of_St_George_%28geograph_6371851%29.jpg/800px-Doncaster%2C_Minster_church_of_St_George_%28geograph_6371851%29.jpg",
      },
      {
        name: "Leeds",
        image: "https://images.unsplash.com/photo-1588671186197-7fb734e9c33a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Manchester",
        image: "/assets/manchester.jpg",
      },
      {
        name: "Derby",
        image: "/assets/derbey.jpg",
      },
    ]
  
    return (
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Our Branches</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Proppa House is proud to operate across multiple locations, ensuring that our services are accessible to
            individuals and families in various regions. Our current branches are located in:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img src={branch.image || "/placeholder.svg"} alt={branch.name} className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-[#00000026] flex items-end pb-4 justify-center">
                  <h3 className="text-white text-2xl font-bold">{branch.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  