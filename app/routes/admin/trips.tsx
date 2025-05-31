import { Header } from 'components'
import React from 'react'

const trips = () => {
  return (
    
       <main className='all-users wrapper'>
        <Header
        title={'Trips 🕌'}
        description="View and edit AI_generated travel plans"
        ctaText="create a Trip"
        ctaUrl="/trips/Create"
      />
       </main>
  )
}

export default trips