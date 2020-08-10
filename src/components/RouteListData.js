import React from 'react'

import RouteResults from './RouteResults'

const RouteListData = ({ filteredRoutes, changeSearch, getBusSchedule }) => {
  if (filteredRoutes.length > 10) {
    return null
  }
  if (filteredRoutes.length > 6) {
    return 'Please be more specific :)'
  }
  if (filteredRoutes.length > 0 && filteredRoutes.length < 7) {
    return (
      <div className='section'>
        <RouteResults
          results={filteredRoutes}
          changeSearch={changeSearch}
          getBusSchedule={getBusSchedule}
        />
      </div>
    )
  }
  return <div />
}

export default RouteListData
