import { Button } from "antd"
import { FaArrowRightLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const RegisterNow = () => {
  const navigate = useNavigate()
  const handleRegisterClick = () => {
    navigate('/register')
  }
  return (
    <section className='py-16 bg-[#40c7f4]'>
      <div className='container'>
        <div className='flex flex-col '>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5'>
          Register to advertise your property!
          </h2>

          <div className='flex items-center w-full justify-between flex-wrap gap-8'>
            <p className='text-muted-foreground text-base font-normal max-w-3xl'>
            Sign up with Proppa House to effortlessly connect with the right buyers and renters. List with confidence and rent with ease. Fill in your details, and our team will reach out to get you started!
            </p>
            <Button
              size='large'
              onClick={handleRegisterClick}
              icon={<FaArrowRightLong />}
              iconPosition='end'
              className='mt-4 px-8 md:mt-0 bg-accent flex max-w-[272px] flex-1  items-center gap-10 hover:!bg-accent font-medium text-base text-primary border-none'
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterNow
