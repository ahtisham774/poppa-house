import { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

const Video = ({ poster, src }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleToggle = () => {
    console.log("this is the video ref", videoRef.current.paused)
    if (videoRef?.current?.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
        setIsPlaying(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4 relative p-4 pb-10'>
      <video
        ref={videoRef}
        poster={poster}
        src={src}
        preload='none'
        autoPlay
        loop
        className='w-full rounded-xl'
      >
        <track kind='captions'></track>
      </video>

      <button
        className='bg-[#00000040] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full flex items-center justify-center'
        onClick={handleToggle}
      >
        {!isPlaying ? (
          <FaPlay className='text-[#ffffff40] size-16' />
        ) : (
          <FaPause className='text-[#ffffff40] size-16' />
        )}
      </button>
    </div>
  )
}

export default Video
