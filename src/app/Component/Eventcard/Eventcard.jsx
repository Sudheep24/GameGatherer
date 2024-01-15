import React from 'react'
import './Eventcard.css'
import Link from 'next/link'

export default function Eventcard() {
  return (
    <div className="cards">
    <div className="cardz">
    <div className="card_load"></div>
    <div className="card_load_extreme_title"></div>
    <div className="card_load_extreme_descripion"></div>
    <Link href='singlepost'>
      
    
    <button className='book'>View More</button>
    </Link>
    </div>
</div>
  )
}
