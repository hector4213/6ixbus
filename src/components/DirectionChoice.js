import React, { useState } from 'react'

import Schedule from './Schedule'

const DirectionChoice = ({ directionData }) => {
  const [directionPredictions, setDirectionPredictions] = useState([]) // index of direction saved

  if (directionPredictions.length > 0) {
    return <Schedule schedule={directionPredictions} />
  }

  const handleSelection = (indexDirection) => {
    setDirectionPredictions(directionData[indexDirection].prediction)
  }

  return (
    <div className='card py-4 px-4'>
      <h1 className='card-header-title is-centered'>
        This stops has multiple directions please choose
      </h1>
      {directionData.map((direction, i) => (
        <div className='columns'>
          <div className='column'>{direction.title}</div>
          <div className='column has-text-centered'>
            <button
              className='button is-primary is-small'
              type='button'
              onClick={() => handleSelection(i)}
            >
              Show Next 3
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DirectionChoice
