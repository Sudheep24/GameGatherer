import React from 'react'
import './events.css'
import ER from '../Component/Eventrender/ER'
import SideNav from '../Component/sideNav/sideNav'
import Complist from '../Component/complist/Complist'

export default function Events() {
  return (
    <div>
      <ER/>
      <div className='conteve'>
      <SideNav/>
      <Complist/>
      </div>
    </div>
  )
}
