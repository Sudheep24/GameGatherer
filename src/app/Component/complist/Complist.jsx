import React from 'react'
import './complist.css'
import Search from '../Search/Search'
import Eventcard from '../Eventcard/Eventcard'

export default function Complist() {
  return (
    <div className='grid'>
      <div className="find">
      <Search/>
      <button>Search</button>
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
