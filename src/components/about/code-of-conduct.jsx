
import Professionalism from '../svg/professionalism'
import Integrity from '../svg/integrity'
import Confidentiality from '../svg/confidentiality'

export function CodeOfConduct () {
  const codeItems = [
    {
      icon: <Professionalism />,
      title: 'Professionalism',
      description:
        'We Conduct Ourselves With Respect, Courtesy, And A Dedication To Excellence In Every Client Interaction.'
    },
    {
      icon: <Integrity />,
      title: 'Integrity',
      description:
        "We Adhere To Ethical Practices And Maintain Confidentiality, Ensuring That Our Clients' Trust Is Always Honored."
    },
    {
      icon: <Confidentiality />,
      title: 'Confidentiality',
      description:
        'We Respect Your Privacy And Handle All Client Information With The Highest Level Of Confidentiality.'
    }
  ]

  return (
    <section className='container'>
      <h2 className='text-4xl font-bold text-center mb-12'>
        Our Code Of Conduct
      </h2>
      <div className='py-16 bg-primary text-white '>
        <div className='grid md:grid-cols-3 gap-8'>
          {codeItems.map((item, index) => (
            <div
              key={index}
              className={`text-center flex flex-col items-center justify-center ${index < codeItems.length -1 ? "md:border-r":""} px-8`}
            >
              <div className='text-4xl mb-4'>{item.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
