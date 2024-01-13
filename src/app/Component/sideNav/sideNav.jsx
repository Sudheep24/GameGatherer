import React from 'react'
import './sidenav.css'
import Search from '../Search/Search'

export default function SideNav() {
  return (
    <div> 
        <div className="sidenav">
          <div className="sear">
          <select id="dropdown" name="dropdown">
            <option value="option1">Cricket</option>
            <option value="option2">Tennis</option>
            <option value="option3">Football</option>
        </select>
            </div>
        </div>
      
    </div>
  )
}
