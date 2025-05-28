import { useEffect, useState } from 'react'
import { useAuth } from '../../context/useAuth'

const ShowProfile = ({ image, variant = 'small', custom }) => {
  const { user } = useAuth()
  const variants = {
    small: 'w-8 h-8 text-xl',
    medium: 'w-10 h-10 text-2xl',
    large: 'w-12 h-12 text-4xl'
  }
  const [imgSrc, setImgSrc] = useState(null)

  useEffect(() => {
    if (user?.profilePicture || image) {
      setImgSrc(user?.profilePicture || image)
    } else {
      setImgSrc(null)
    }
  }, [])

  return (
    <div
      className={
        custom
          ? custom
          : `rounded-full bg-accent shrink-0 flex uppercase items-center justify-center text-black font-medium ${variants[variant]}`
      }
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          loading='lazy'
          alt='Profile'
          className='w-full h-full rounded-full'
        />
      ) : (
        user?.name[0] || user?.firstName[0]
      )}
    </div>
  )
}

export default ShowProfile
