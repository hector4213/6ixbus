import React from 'react'

const Loader = () => {
  return (
    <section className='section'>
      <progress className='progress is-large is-primary' max='100'>
        50%
      </progress>
    </section>
  )
}

export default Loader
