import React from 'react'

const SingleSchedule = ({ schedule }) => {
  return (
    <div className='card py-4 px-4' key={schedule.tripTag}>
      <li className='level'>
        <div className='level-item'>
          {schedule.minutes} Minutes until Arrival
        </div>
      </li>
    </div>
  )
}

export default SingleSchedule
