import React from 'react'

const RouteButton = ({ handleResult, children, route }) => {
  if (route)
    return (
      <button
        onClick={() => handleResult(route.tag, route.title)}
        className='button is-primary '
      >
        {children}
      </button>
    )
}

export default RouteButton
