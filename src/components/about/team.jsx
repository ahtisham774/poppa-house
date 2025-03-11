export function Team() {
    const teamMembers = [
      {
        name: "Sophia Reynolds",
        position: "Founder",
        image: "/assets/tm1.jpg",
      },
      {
        name: "Olivia Bennett",
        position: "Co-Founder",
        image: "/assets/tm2.jpg",
      },
      {
        name: "Jack Graham",
        position: "Real Estate Consultant",
        image: "/assets/tm3.jpg",
      },
      {
        name: "James Mitchell",
        position: "Lead Property Inspector",
        image: "/assets/tm5.jpg",
      },
      {
        name: "Albert Flores",
        position: "Head of Customer Support",
        image: "/assets/tm6.jpg",
      },
    ]
  
    return (
      <section className="py-16">
        <div className="container flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            The team behind Proppa House is the cornerstone of our success. We've carefully built a group of dedicated
            professionals who share our values and are committed to delivering exceptional property services.
          </p>
          <div className='flex overflow-x-auto  hide_scrollbar gap-8'>
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center shrink-0 ">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className=" size-32 lg:size-44 rounded-full object-cover object-top mx-auto mb-4"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  