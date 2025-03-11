export function ViewingAgents() {
    const benefits = [
      {
        title: "They Understand Your Needs",
        description:
          "Whether you're an international student, an expat, or a first-time renter, our agents provide information in a way that resonates with you.",
        image: "/assets/TUYR.jpg",
      },
      {
        title: "They Share Your Perspective",
        description:
          "Our agents are carefully selected to align with your cultural background, values, and priorities, ensuring they understand your expectations.",
        image: "/assets/TSYP.jpg",
      },
      {
        title: "They Provide More Than Just a Viewing",
        description:
          "You'll get local insights, advice on rental agreements, and answers to concerns you may not even have thought about yet.",
        image: "/assets/TPMV.jpg",
      },
      {
        title: "They Help You Make an Informed Decision",
        description:
          "Unlike traditional agents who focus on sales, our agents are your representatives committed to giving you the picture, not just highlights.",
        image: "/assets/THYP.jpg",
      },
    ]
  
    return (
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Viewing Agents Make a Difference</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <img src={benefit.image || "/placeholder.svg"} alt={benefit.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-medium mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground text-base font-normal">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  