import React from 'react'

import RouteResults from './RouteResults'

const RouteListData = ({ filteredRoutes, changeSearch, getBusSchedule }) => {
  if (filteredRoutes.length > 10) {
    return null
  } else if (filteredRoutes.length > 6) {
    return 'Please be more specific :)'
  } else if (filteredRoutes.length > 0 && filteredRoutes.length < 7) {
    return (
      <RouteResults
        results={filteredRoutes}
        changeSearch={changeSearch}
        getBusSchedule={getBusSchedule}
      />
    )
  }
  return <div></div>
}

export default RouteListData
