import React, { useState, useEffect } from 'react'

import Loader from './Loader'

const BusList = (props) => {
  const { predictions } = props.times

  const [timeout, updateTimeout] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      updateTimeout(true)
    }, 2000)
  }, [predictions])

  if (!predictions || !timeout) {
    return <Loader />
  }
  const showNoBus = () => {
    if (predictions.dirTitleBecauseNoPredictions) {
      return (
        <li>Sorry {predictions.dirTitleBecauseNoPredictions} is not running</li>
      )
    }
  }

  const showBus = () => {
    if (Array.isArray(predictions.direction.prediction)) {
      const nextThree = predictions.direction.prediction.slice(0, 3)
      return nextThree.map((bus) => (
        <div className='card py-4 px-4' key={bus.tripTag}>
          <li className='level'>
            <div className='level-item'>Minutes {bus.minutes}</div>
          </li>
        </div>
      ))
    } else if (typeof predictions.direction.prediction === 'object') {
      return (
        <li key={predictions.direction.prediction.tripTag}>
          Minutes {predictions.direction.prediction.minutes}
        </li>
      )
    }
  }

  const schedule = predictions.dirTitleBecauseNoPredictions
    ? showNoBus()
    : showBus()

  return (
    <div className='section'>
      <div className='notification is-primary'>
        <h1 className='title is-3'>{predictions.routeTitle}</h1>
        <h2 className='title is-5'>{predictions.stopTitle}</h2>
      </div>
      <ul>{schedule}</ul>
    </div>
  )
}

export default BusList
