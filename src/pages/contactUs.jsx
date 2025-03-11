import ContactForm from '../components/contactUs/contactForm'
import HelpSection from '../components/contactUs/helpSection'
import { Layout } from '../components/landingPage/layout'

export default function ContactUsPage () {
  return (
    <>
      <div className='flex flex-col gap-12'>
          <ContactForm />
          <HelpSection />
      </div>
    </>
  )
}
