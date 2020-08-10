import React from 'react'

import SingleSchedule from './SingleSchedule'

const Schedule = ({ schedule }) => {
  if (!Array.isArray(schedule)) {
    return <SingleSchedule schedule={schedule} />
  }

  const nextThree = schedule.slice(0, 3)

  return (
    <div>
      <div>
        {nextThree.map((bus) => (
          <div className='card py-4 px-4' key={bus.tripTag}>
            <li className='level'>
              <div className='level-item'>{bus.minutes} Mins Until Arrival</div>
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
