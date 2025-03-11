import { CheckCircleFilled } from "@ant-design/icons"
import { FaCheck } from "react-icons/fa"

export function WhyJoin() {
  const benefits = [
    {
      title: "Competitive Pay",
      description: "Earn based on the jobs you complete with opportunities for growth in a fast-expanding company.",
    },
    {
      title: "Flexible Work Schedule",
      description: "Choose jobs that fit your availability, with both full-time and part-time options.",
    },
    {
      title: "Ongoing Training & Support",
      description:
        "No experience? We'll teach you! Receive continuous support, especially in property consultancy roles.",
    },
    {
      title: "Join a Thriving Startup",
      description:
        "Become part of a fast-growing company dedicated to simplifying property search and maintenance for clients.",
    },
    {
      title: "Work in Growing Locations",
      description:
        "Be part of our expansion across top UK cities: London, Hull, Sheffield, Liverpool, Doncaster, Manchester, Leeds, Derby – and more coming soon!",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Join Proppa House Ltd?</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
               <div className="size-8 rounded bg-primary shrink-0 text-white flex items-center justify-center">
                <FaCheck className="shrink-0"/>
               </div>
                <p className="text-justify">
                  <span className="font-bold text-primary">{benefit.title}</span> {` - `}
                {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/assets/join.png"
              alt="Team members"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

