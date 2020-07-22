import React from 'react'

const Loader = () => {
  return (
    <progress className='progress is-large is-primary' max='100'>
      50%
    </progress>
  )
}

export default Loader
