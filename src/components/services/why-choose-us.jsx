import {
  SearchOutlined,
  ClockCircleOutlined,
  UserOutlined,
  MessageOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { RiHourglassFill } from "react-icons/ri";
import { IoDocumentText, IoPersonSharp } from "react-icons/io5";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaMoneyBillWave, FaCog, FaShieldAlt, FaCheckCircle, FaSearch, FaChartLine } from "react-icons/fa";
import { MdOutlineDoNotDisturb, MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuDollarSign } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

export function WhyChooseUs({ benefits = [] }) {
  const defaultBenefits = [
    {
      icon: "handshake",
      title: "Trust & Transparency",
      description: "No more guessing! We provide an unbiased, and realistic view of the property.",
    },
    {
      icon: "search",
      title: "Matched Viewing Agents",
      description: "Get the right insights by working with an agent who understands your needs.",
    },
    {
      icon: "hourglass",
      title: "Time & Cost Savings",
      description: "Save time and money by avoiding unnecessary travel and hidden costs.",
    },
    {
      icon: "expert",
      title: "Expert Insights",
      description: "Our real estate and financial expertise, we guide you beyond a simple walkthrough.",
    },
    {
      icon: "chat",
      title: "Unlimited Q&A",
      description: "We're available to answer all your questions before, during, and after the viewing.",
    },
    {
      icon: "document",
      title: "Comprehensive Reports",
      description: "Our detailed checks, neighborhood insights, and billing keep you fully informed.",
    },
  ];

  const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "handshake":
        return <FaHandshake className="text-4xl text-secondary" />;
      case "search":
        return <SearchOutlined className="text-4xl text-secondary" />;
      case "hourglass":
        return <RiHourglassFill className="text-4xl text-secondary" />;
      case "expert":
        return <IoPersonSharp className="text-4xl text-secondary" />;
      case "chat":
        return <BsFillChatDotsFill className="text-4xl text-secondary" />;
      case "document":
        return <IoDocumentText className="text-4xl text-secondary" />;
      case "trust":
        return <AiOutlineSafetyCertificate  className="text-4xl text-secondary" />;
      case "tailor":
        return <svg width="40" height="39" className="text-4xl text-secondary" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9993 0.581055L1.10237 19.4784L0.580078 20.0003L1.62434 21.0446L2.1463 20.5223L19.9993 2.66932L37.8524 20.5223L38.3743 21.0446L39.4186 20.0003L38.8963 19.4783L19.9993 0.581055ZM6.87434 2.93781V11.7375L12.1243 6.48739V2.93781H6.87434ZM19.9993 4.63807L4.24934 20.3881V38.8675H9.49934V25.2503H17.3743V38.8675H35.7493V20.3881L19.9993 4.63807ZM22.6243 25.2503H30.4993V31.8128H22.6243V25.2503Z" fill="#44CCFF"/>
</svg>

       ;
      case "noScams":
        return <MdOutlineDoNotDisturb className="text-4xl text-secondary" />;
      case "seamless":
        return <svg width="50" height="50" className="text-4xl text-secondary" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.0007 12.4997V18.7497L33.334 10.4163L25.0007 2.08301V8.33301C20.5804 8.33301 16.3411 10.089 13.2155 13.2146C10.0899 16.3402 8.33398 20.5794 8.33398 24.9997C8.33398 28.2705 9.29232 31.3122 10.9173 33.8747L13.959 30.833C12.9974 29.0393 12.4963 27.0349 12.5007 24.9997C12.5007 21.6845 13.8176 18.505 16.1618 16.1608C18.506 13.8166 21.6854 12.4997 25.0007 12.4997ZM39.084 16.1247L36.0423 19.1663C36.959 20.9163 37.5006 22.9163 37.5006 24.9997C37.5006 28.3149 36.1837 31.4943 33.8395 33.8385C31.4953 36.1827 28.3159 37.4997 25.0007 37.4997V31.2497L16.6673 39.583L25.0007 47.9163V41.6663C29.4209 41.6663 33.6602 39.9104 36.7858 36.7848C39.9114 33.6592 41.6673 29.42 41.6673 24.9997C41.6673 21.7288 40.709 18.6872 39.084 16.1247Z" fill="#44CCFF"/>
        </svg>;
      case "simple":
        return <FaCheckCircle className="text-4xl text-secondary" />;
      case "budget":
        return <FaMoneyBillWave className="text-4xl text-secondary" />;
      case "noFees":
        return <FaCheckCircle className="text-4xl text-secondary" />;
      case "reliable":
        return <FaCheckCircle className="text-4xl text-secondary" />;
      case "flexible":
        return <LuDollarSign  className="text-4xl text-secondary" />;
      case "hassle":
        return <FaCog className="text-4xl text-secondary" />;
      case "tailored":
        return <FaCog className="text-4xl text-secondary" />;
      case "affordable":
        return <FaMoneyBillWave className="text-4xl text-secondary" />;
      case "support":
        return <BiSupport  className="text-4xl text-secondary" />;
      default:
        return <FaCheckCircle className="text-4xl text-secondary" />;
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl transition-all font-bold text-center text-primary mb-4">Why Choose Proppa House?</h2>
        <p className="text-center text-base text-muted-foreground mb-12">
          Your trusted partner for transparent, personalized, and hassle-free property solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {displayBenefits.map((benefit, index) => (
            <div key={index} className="text-center   shrink-0 max-w-[360px] flex flex-col items-center justify-center">
              <div className="mb-4">{getIcon(benefit.icon)}</div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground font-normal text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
