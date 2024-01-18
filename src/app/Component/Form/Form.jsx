import React from 'react'
import './form.css'

export default function Form() {
  return (
    <div>
        <div className="form">
                <div className='formdet'>
                <label > Event Name</label>
                <input type="text" placeholder='Enter Event Name'   />
                </div>
                <div className='formdet'>
                <label >Event Address</label>
                <input type="text" placeholder='Enter Address'/>
                </div>
                <div className='formdet'>
                <label >Enter Event Image</label>
                <input type="file" />
                </div>
                <div className='formdet'>
                <label >Event Date</label>
                <input type="date" />
                </div>
                <div className='formdet'>
                <label >Entry Fee</label>
                <input type="number" />
                </div>
                
                <div >
                    <label >Total Slots</label>
                    <input type="number" />
                    <label >Available Slots</label>
                    <input type="number" />
                </div>
                <div className='formdet'>
                <label >Description</label>
                <input type="text" placeholder='Enter Description of the Event' />
                </div>
                <button>Upload</button>
        </div>

    </div>
  )
}
