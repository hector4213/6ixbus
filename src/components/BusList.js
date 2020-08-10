import React, { useState, useEffect } from 'react'

import Loader from './Loader'
import DirectionChoice from './DirectionChoice'
import Schedule from './Schedule'
import SingleSchedule from './Schedule'

const BusList = ({ times: { predictions } }) => {
  const [timeout, updateTimeout] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      updateTimeout(true)
    }, 2000)
  }, [predictions])

  if (!predictions || !timeout) {
    return <Loader />
  }

  const showBus = () => {
    if (predictions.dirTitleBecauseNoPredictions) {
      return (
        <li>
          Bus data not available for {predictions.dirTitleBecauseNoPredictions}
        </li>
      )
    }
    if (Array.isArray(predictions.direction.prediction)) {
      return <Schedule schedule={predictions.direction.prediction} />
    }
    if (typeof predictions.direction.prediction === 'object') {
      return <SingleSchedule schedule={predictions.direction.prediction} />
    }
    if (Array.isArray(predictions.direction)) {
      return <DirectionChoice directionData={predictions.direction} />
    }
  }

  return (
    <div className='section'>
      <div className='notification is-primary'>
        <h1 className='title is-3'>{predictions.routeTitle}</h1>
        <h2 className='title is-5'>{predictions.stopTitle}</h2>
      </div>
      <ul>{showBus()}</ul>
    </div>
  )
}

export default BusList
