import { Card, Rate } from "antd"

const testimonials = [
  {
    id: 1,
    name: "David Miller",
    position: "CEO @ GrowthTech",
    rating: 5,
    comment:
      "Asare Viewing made our home-buying journey effortless. From the moment we started browsing listings to the final steps of closing the deal. They also helped us understand mortgage options and provided expert advice tailored to our needs. Thanks to Asare Viewing, we found our dream home without any stress. Highly recommend their service to anyone looking to buy or rent!",
    image: "/assets/u1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Sales Manager @ XYZ Corp.",
    rating: 4,
    comment:
      "We were first-time buyers and had so many questions, but Asare Viewing guided us through the entire process. Their market insights, mortgage assistance, and verified listings made everything smooth and stress-free. A great experience!",
    image: "/assets/u2.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl font-medium text-center mb-4">What Our Users Say</h2>
        <p className="text-center text-muted-foreground text-base mb-20">
          Authentic experiences shared by our valued customers. See their ratings and feedback at a glance!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-xl rounded-xl  drop-shadow-xl bg-[#F6F6F6]">
              <div className="flex flex-col gap-2 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl mr-4 "
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <Rate disabled defaultValue={testimonial.rating} className="mb-4" />
              <p className="text-gray-700 text-base font-light text-justify">{testimonial.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

