import React from 'react'
import './complist.css'
import Search from '../Search/Search'
import Eventcard from '../Eventcard/Eventcard'

export default function Complist() {
  return (
    <div className='grid'>
      <div className="find">
        <div className="fi">
            <Search/>
        </div>      
              <div className="sidenav">
            <div className="sear">
              <select id="dropdown" name="dropdown">
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Tennis">Tennis</option>
                <option value="Playmates">Playmates</option>
                <option value="Golf">Golf</option>
              </select>

              <select id="dropdown" name="priceDropdown">
                <option value="100">&#8377;100</option>
                <option value="200">&#8377;200</option>
                <option value="300">&#8377;300</option>
                <option value="400">&#8377;400</option>
                <option value="500">&#8377;500</option>
              </select>

              <select id="dropdown" name="locationDropdown">
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Salem">Salem</option>
              </select>
                <button>search</button>
              </div>
        </div>
      </div>
      <div className="c">
      <Eventcard/>
      <Eventcard/>
      <Eventcard/>
      <Eventcard/>
      <Eventcard/>
      <Eventcard/>
      <Eventcard/>
      <Eventcard/>
      <Eventcard/>
      </div>
    </div>
  )
}
