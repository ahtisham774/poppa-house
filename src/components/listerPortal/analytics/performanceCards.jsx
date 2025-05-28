import PerformanceCard from './performanceCard'

const PerformanceCards = () => {
  const cards = [
    {
      title: 'Top Performance',
      items: [
        { title: 'Contemporary 3-Bed Townhouse', amount: 5000, views: 150 },
        { title: 'Contemporary 3-Bed Townhouse', amount: 3000, views: 100 },
        { title: 'Contemporary 3-Bed Townhouse', amount: 2000, views: 80 }
      ]
    },
    {
      title: 'Under Performing',
      items: [
        { title: 'Cozy 1-Bed Apartment', amount: 800, views: 20 },
        { title: 'Spacious Studio', amount: 600, views: 15 },
        { title: 'Modern Loft', amount: 500, views: 10 }
      ]
    }
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {cards.map((card, index) => (
        <PerformanceCard key={index} title={card.title} items={card.items} />
      ))}
    </div>
  )
}

export default PerformanceCards
