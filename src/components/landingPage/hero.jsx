import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Filter from '../svg/filter'

export function Hero ({ bg, title, description, onFilterClick }) {
  return (
    <section
      className='relative min-h-screen py-20 flex flex-col items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url('${bg}')`
      }}
    >
      <div className='absolute inset-0 ' />
      <div className='container relative z-10 text-center text-foreground'>
        <h1 className='text-4xl md:text-6xl font-medium mb-4'>{title}</h1>
        <p className='text-base  font-normal mb-8'>{description}</p>

        <div className='max-w-3xl mx-auto'>
        <div className='flex justify-center mb-4 space-x-8 font-medium'>
            <button className='text-primary hover:text-black hover:underline hover:underline-offset-8'>Sale/Buy</button>
            <button className='text-primary hover:text-black hover:underline hover:underline-offset-8'>Rent</button>
          </div>
          <div className='flex items-center flex-col justify-center sm:flex-row gap-5 bg-white rounded-lg p-4 px-6'>
            <Input
              placeholder='Search by Location, Price, or Property Type...'
              className='flex-1  border-none !outline-none !ring-0'
              size='large'
            />
            <div className='flex items-center gap-5'>
              <Button
                onClick={onFilterClick}
                icon={<Filter />}
                size='large'
                className='text-foreground font-medium'
              >
                Filter
              </Button>
              <Button
                type='primary'
                size='large'
                className='bg-accent text-foreground px-8 font-medium'
              >
                Search
              </Button>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
