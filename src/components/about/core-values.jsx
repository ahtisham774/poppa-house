import HandShake from '../svg/handShake'
import Care from '../svg/care'
import Innovation from '../svg/innovation'
import Commitment from '../svg/commitment'
import Excellence from '../svg/excellence'

export function CoreValues () {
  const values = [
    { icon: <HandShake />, title: 'Trust' },
    { icon: <Care />, title: 'Care' },
    { icon: <Innovation />, title: 'Innovation' },
    { icon: <Commitment />, title: 'Commitment' },
    { icon: <Excellence />, title: 'Excellence' }
  ]

  return (
    <section className='py-16 bg-primary text-white'>
      <div className='container'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          Our Core Values
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {values.map((value, index) => (
            <div
              key={index}
              className='flex flex-col  min-w-[210px] items-center min-h-[208px] justify-center bg-white text-black p-6 rounded-lg'
            >
              <div className='text-4xl mb-4'>{value.icon}</div>
              <h3 className='text-xl font-semibold'>{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
