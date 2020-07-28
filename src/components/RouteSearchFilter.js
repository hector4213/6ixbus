import React from 'react'

const RouteSearchFilter = ({ onChange, search }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='field'>
      <form onSubmit={handleSubmit}>
        <label className='label has-text-centered my-5'>
          Search by Route name
        </label>
        <div className='control'>
          <input
            className='input'
            onChange={onChange}
            value={search}
            type='text'
          />
        </div>
        <p className='help'>Enter a Route Name for Results</p>
      </form>
    </div>
  )
}

export default RouteSearchFilter
