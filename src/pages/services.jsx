import Banner from '../components/banner'
import Services from '../components/services/services'
import Video from '../components/services/video'

const ServicesPage = () => {
  const img =
    '/assets/service_banner.png'
    const videoPoster = "/assets/sPoster.png"
    const videoSrc = "https://videos.pexels.com/video-files/7102266/7102266-hd_1920_1080_30fps.mp4"
  return (
    <div className='flex flex-col gap-10'>
      <Banner title='Our Services' img={img} />
      <Services />
      <div className='flex flex-col items-center justify-center gap-4 container'>
        <Video poster={videoPoster} src={videoSrc} />
      </div>
    </div>
  )
}

export default ServicesPage
