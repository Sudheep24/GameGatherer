import React from 'react'
import CricketCard from '../CricketCard/CricketCard'
import Link from 'next/link'

export const Cardlist = () => {
  return (
    <div> <button className='cricket'>Cricket</button>
      <div className='cardsec'>
        <CricketCard />
        <CricketCard />
        <CricketCard />
        <CricketCard />
        <CricketCard />
      </div>

      <div>
        <Link href='/Events'>
          <button className="view">View More</button>
        </Link>
      </div>
      
      </div>

  )
}
