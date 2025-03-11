import { LaptopOutlined, TeamOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons"
import HandShake from "../svg/handShake"
import Tis from "../svg/tis"
import Bcs from "../svg/bcs"
import Pe from "../svg/pe"
import Cfm from "../svg/cfm"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Tis />,
      title: "Tailored Insurance Solutions",
      description: "We provide insurance options for both rentals and properties based on your needs and preferences.",
    },
    {
      icon: <Bcs />,
      title: "Bills Consolidation Support",
      description:
        "We partner with trusted estate agents to streamline property viewings and ensure smooth, client-focused transactions.",
    },
    {
      icon: <Pe />,
      title: "Personalized Experiences",
      description:
        "We tailor our services to meet your unique needs, ensuring a seamless and satisfying experience every time.",
    },
    {
      icon: <Cfm />,
      title: "Commission-Free Model",
      description:
        "We offer honest, unbiased services without commissions, ensuring a transparent experience for every client.",
    },
    {
      icon: <HandShake className="size-8" />,
      title: "Collaborative Relationships with Estate Agents",
      description:
        "We partner with trusted estate agents to streamline property viewings and ensure smooth, client-focused transactions.",
    },
  ]

  return (
    <section className="py-16 ">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/WCU.jpg"
            alt="Modern house"
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start mb-6">
                <div className="flex items-center justify-center size-16 shrink-0 bg-[#F7F7F7] rounded-full mr-6">
                    <div className=" text-primary shrink-0">{reason.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

