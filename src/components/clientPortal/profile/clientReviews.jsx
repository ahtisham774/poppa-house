import { useEffect, useState } from 'react'
import { useAuth } from '../../../context/useAuth'
import clientProfileService from '../../../api/services/clientProfileService'
import Reviews from './reviews'

const ClientReviews = () => {
  const [reviews, setReviews] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await clientProfileService.getReviews(user?.id)
        
        // Map the API response to match the Reviews component's expected structure
        const mappedReviews = response?.data?.map(review => ({
          id: review?.id,
          rating: review?.clientRating?.rating || 0, // Using clientRating.rating from the API
          comment: review?.clientRating?.comment || '',
          date: new Date(review?.clientRating?.timestamp?._seconds * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          reviewer: {
            name: review?.worker?.name || 'Anonymous',
            profile:review?.worker?.profilePicture, // Default profile image
            initials: review?.worker?.name?.slice(0,1)?.toUpperCase() || 'A',
          },
          serviceType: review?.type || 'Service',
          location: review?.clientRating?.cityName  // You might want to add this to your API if needed
        }))
        
        setReviews(mappedReviews || [])
      } catch (error) {
        console.error('Error fetching reviews:', error)
        setReviews([])
      }
    }

    if (user) {
      fetchReviews()
    }
  }, [user])

  return <Reviews data={reviews}/>
}

export default ClientReviews