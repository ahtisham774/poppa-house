
import { Collapse, Button } from "antd"
import { RightOutlined } from "@ant-design/icons"
import RightArrow from "../svg/rightArrow"

const { Panel } = Collapse

const faqs = [
  {
    question: "How do I start the home-buying process?",
    answer:
      "Begin by browsing our verified property listings. Use our smart filters to find a home that suits your budget and needs.",
  },
  {
    question: "How do I list my property on your platform?",
    answer:
      "Contact our team to get started. We'll guide you through the process of creating an attractive listing and connecting with potential buyers or renters.",
  },
  {
    question: "What are the best mortgage options available?",
    answer:
      "We partner with various lenders to offer competitive mortgage rates. Our experts can help you compare options and choose the best one for your situation.",
  },
  {
    question: "How do I ensure my rental income is secure?",
    answer:
      "We offer comprehensive rent insurance plans to protect your income. Our team can help you select the right coverage for your property.",
  },
  {
    question: "What documents do I need to sell my home?",
    answer:
      "Typically, you'll need proof of ownership, recent tax statements, and a property disclosure form. Our agents can provide a detailed checklist based on your specific situation.",
  },
]

export function FAQ() {
  return (
    <section
      className="py-16 my-20 bg-cover container bg-center relative flex flex-col items-center justify-center lg:justify-end w-full  lg:items-end"
      style={{
        backgroundImage:
          "url('/assets/faq.jpg')",
      }}
    >
      
      <div className=" relative z-10 lg:self-end rounded-xl bg-primary p-4 max-w-xl">
        <h2 className="text-3xl lg:text-4xl font-normal text-white mb-8">Frequently Asked Questions</h2>
        <Collapse
        bordered={false}
          expandIconPosition="end"
          expandIcon={({ isActive }) => <RightOutlined className="!text-white" rotate={isActive ? -90 : 90} />}
          className="bg-transparent !text-white"
        >
          {faqs.map((faq, index) => (
            <Panel  header={  <p className="text-white ">{faq.question}</p>} key={index} className="mb-4 bg-transparent  !text-white overflow-hidden">
              <p className="text-white">{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>
        <div className="text-center mt-8 flex items-center w-full justify-center">
          <Button size="large" className="bg-accent text-primary border-none hover:!bg-accent hover:!text-primary text-base font-semibold flex items-center gap-2">
            CONNECT US
            <span className=" shrink-0 -rotate-45">
                <RightArrow/>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

