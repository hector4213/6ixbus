import React from 'react'
import RouteItem from './RouteItem'

const RouteList = ({ routes, getBusSchedule, routeSearch }) => {
  if (!routes || routeSearch) {
    return null
  }
  console.log('these are the routes that serve that stop', routes) // set a loader here while fetching data

  const showRoutes = () => {
    if (routes.hasOwnProperty('dirTitleBecauseNoPredictions')) {
      return <RouteItem routes={routes} getBusSchedule={getBusSchedule} />
    } else if (Array.isArray(routes)) {
      return routes.map((route) => (
        <RouteItem routes={route} getBusSchedule={getBusSchedule} />
      ))
    } else if (routes && typeof routes === 'object') {
      return <RouteItem routes={routes} getBusSchedule={getBusSchedule} />
    }
  }

  return <ul>{showRoutes()}</ul>
}

export default RouteList
