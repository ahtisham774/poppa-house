import {
    SearchOutlined,
    ClockCircleOutlined,
    UserOutlined,
    MessageOutlined,
    FileTextOutlined,
  } from "@ant-design/icons"
import HandShake from "../svg/handShake"
import { RiHourglassFill } from "react-icons/ri"
import { IoDocumentText, IoPersonSharp } from "react-icons/io5"
import { BsFillChatDotsFill } from "react-icons/bs"
import { FaHandshake } from "react-icons/fa"
  
  export function WhyChooseUs() {
    const benefits = [
      {
        icon: <FaHandshake className="text-4xl text-secondary" />,
        title: "Trust & Transparency",
        description: "No more guessing! We provide an unbiased, and realistic view of the property.",
      },
      {
        icon: <SearchOutlined className="text-4xl text-secondary" />,
        title: "Matched Viewing Agents",
        description: "Get the right insights by working with an agent who understands your needs.",
      },
      {
        icon: <RiHourglassFill className="text-4xl text-secondary" />,
        title: "Time & Cost Savings",
        description: "Save time and money by avoiding unnecessary travel and hidden costs.",
      },
      {
        icon: <IoPersonSharp className="text-4xl text-secondary" />,
        title: "Expert Insights",
        description: "Our real estate and financial expertise, we guide you beyond a simple walkthrough.",
      },
      {
        icon: <BsFillChatDotsFill className="text-4xl text-secondary" />,
        title: "Unlimited Q&A",
        description: "We're available to answer all your questions before, during, and after the viewing.",
      },
      {
        icon: <IoDocumentText className="text-4xl text-secondary" />,
        title: "Comprehensive Reports",
        description: "Our detailed checks, neighborhood insights, and billing keep you fully informed.",
      },
    ]
  
    return (
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl lg:text-5xl transition-all font-bold text-center text-primary mb-4">Why Choose Proppa House?</h2>
          <p className="text-center text-base text-muted-foreground mb-12">
            Your trusted partner for transparent, personalized, and hassle-free property solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center flex flex-col items-center justify-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground font-normal text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  