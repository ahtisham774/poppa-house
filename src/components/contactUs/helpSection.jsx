import { MailOutlined, EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons"

export default function HelpSection() {
  const contactCards = [
    {
      icon: <MailOutlined className="text-gray-600" />,
      title: "Email Us",
      description: "We're here to help. Reach out to us anytime.",
      action: "info@proppahouse.com",
      actionType: "email",
    },
    {
      icon: <EnvironmentOutlined className="text-gray-600" />,
      title: "Visit Us",
      description: "Stop by our office. We'd love to meet you.",
      action: "View on Google Maps",
      actionType: "map",
    },
    {
      icon: <PhoneOutlined className="text-gray-600" />,
      title: "Call Us",
      description: "We're available Mon-Fri from 9 am to 5 pm.",
      action: "+44 7405 253088",
      actionType: "phone",
    },
  ]

  const handleAction = (type, value) => {
    switch (type) {
      case "email":
        window.location.href = `mailto:${value}`
        break
      case "map":
        window.open("https://maps.google.com", "_blank")
        break
      case "phone":
        window.location.href = `tel:${value.replace(/\s/g, "")}`
        break
      default:
        break
    }
  }

  return (
    <section className="my-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-[#1a1a4b] mb-2">How Can We Help You?</h2>
          <p className="text-muted-foreground text-base font-normal max-w-3xl mx-auto">
            Let us know your questions or needs, we're here to assist you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl min-h-[434px] border border-[#E3E3E3] p-8 flex flex-col items-center justify-center text-center drop-shadow-md shadow-[0px_4px_4px_0px_#00000040] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              <div className="w-[72px] h-[72px] bg-[#F6F6F6] drop-shadow-xl  shadow-[0px_4px_4px_0px_#00000040] border border-[#E3E3E3] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">{card.icon}</span>
              </div>

              <h3 className="text-[#1a1a4b] text-2xl font-semibold ">{card.title}</h3>

              <p className="text-muted-foreground font-normal my-6 text-sm">{card.description}</p>

              <button
                onClick={() => handleAction(card.actionType, card.action)}
                className="bg-[#F6F6F6] text-gray-800 px-6 py-3 w-full rounded-xl drop-shadow-lg shadow-[0px_4px_4px_0px_#00000040] hover:bg-gray-100 transition-colors duration-300"
              >
                {card.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

