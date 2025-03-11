import { Button } from 'antd'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
  return (
    <div className='flex items-center justify-center gap-5'>
      <Button
        icon={<FcGoogle size={25} className='mt-1' />}
        className='w-fit text-base border-[#D9D9D9] py-5 font-medium rounded-xl bg-white'
      >
        Sign in with Google
      </Button>
      <Button
        icon={<FaFacebook color='#1877F2' size={25} className='mt-1' />}
        className='w-fit text-base border-[#D9D9D9] py-5 font-medium rounded-xl bg-white'
      >
        Sign in with Facebook
      </Button>
    </div>
  )
}

export default SocialLogin
