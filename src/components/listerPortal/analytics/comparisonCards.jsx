import ComparisonProgress from './comparisonProgress'

const ComparisonCards = () => {
  const cards = [
    {
      item1: {
        title: 'Published',
        value: 2
      },
      item2: {
        title: 'Archived',
        value: 0
      }
    },
    {
      item1: {
        title: 'Featured',
        value: 2
      },
      item2: {
        title: 'Regular',
        value: 10
      },
      note: 'Featured listings get 100% more views on average'
    }
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {cards.map((card, index) => (
        <ComparisonProgress
          key={index}
          item1={card.item1}
          item2={card.item2}
          total={12}
          note={card.note}
        />
      ))}
    </div>
  )
}

export default ComparisonCards
