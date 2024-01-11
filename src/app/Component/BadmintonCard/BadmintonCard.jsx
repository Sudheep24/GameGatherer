import React from 'react'
import './card.css'

export default function BadmintonCard() {
  return (
    <div>
        <div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
        

        
        <strong>BAD tournament</strong>
      </div>
    </div>
    <div className="front">
      
      <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>

      <div className="front-content">
        <small className="badge">Events</small>
        <img src="https://imgs.search.brave.com/FtmGZZwxS-jH8JmuXM9Mo7RJKaT7-qji4TA__knxT84/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/amFncmFuam9zaC5j/b20vaW1hZ2VzLzIw/MjMvTWF5LzMwNTIw/MjMvaXBsLTIwMjMt/d2lubmVyLWNoZW5u/YWktc3VwZXIta2lu/Z3MtY3NrLndlYnA" className='cardimg' />
        <div className="description">
          
          <div className="title">
            <p>Entry Cost : Rs. 100</p>
            
            <p>Address</p>
            <p>Event Name</p>
          </div>
          <p className="card-footer">
            Slots : 11 &nbsp; | &nbsp; Total Slots : 5
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
