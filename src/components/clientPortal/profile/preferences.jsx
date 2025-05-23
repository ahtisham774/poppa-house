import Intentions from './intentions'
import UserCategory from './userCategory'

const Preferences = ({consent, category}) => {
  return (
    <div className='flex flex-col gap-8'>
      <UserCategory category={category} />
      <Intentions intentions={consent?.intentions} />
    </div>
  )
}

export default Preferences
