import CardView from './cardView'

const NewMessages = () => {
  const messages = [
    {
      id: 1,
      title: 'New Message from John Doe',
      description:
        'You have a new message from John Doe regarding your recent job application.',
      date: '2/15/2025'
    },
    {
      id: 2,
      title: 'New Message from Jane Smith',
      description:
        'Jane Smith has sent you a message about the upcoming project meeting.',
      date: '2/15/2025'
    },
    {
      id: 3,
      title: 'New Message from HR',
      description:
        'HR has sent you a message regarding your job application status.',
      date: '2/15/2025'
    }
  ]
  return (
    <CardView
      title={'New Messages'}
      icon={
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M22.75 16.25C22.75 16.8246 22.5217 17.3757 22.1154 17.7821C21.7091 18.1884 21.158 18.4167 20.5833 18.4167H7.58333L3.25 22.75V5.41667C3.25 4.84203 3.47827 4.29093 3.8846 3.8846C4.29093 3.47827 4.84203 3.25 5.41667 3.25H20.5833C21.158 3.25 21.7091 3.47827 22.1154 3.8846C22.5217 4.29093 22.75 4.84203 22.75 5.41667V16.25Z'
            stroke='#131E47'
            strokeWidth='2.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      }
        list={messages}
        viewAll={"/client/chats"}
    />
  )
}

export default NewMessages
