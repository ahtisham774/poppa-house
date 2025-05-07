import Intentions from './intentions'
import UserCategory from './userCategory'

const Preferences = () => {
  return (
    <div className='flex flex-col gap-8'>
      <UserCategory />
      <Intentions />
    </div>
  )
}

export default Preferences
