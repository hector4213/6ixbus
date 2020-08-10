import React, { useState } from 'react'

import DropDownDetails from './DropDownDetails'
import RouteButton from './RouteButton'

import busService from '../api/nextbus'

const RouteResults = ({ results, changeSearch, getBusSchedule }) => {
  const [routeData, setRouteData] = useState([])
  const [showDropDown, setShowDropDown] = useState(false)

  const handleResult = async (routeTag, routeName) => {
    const response = await busService.getNearestStop(routeTag)
    setRouteData(response.data.route)
    setShowDropDown(true)
    changeSearch(routeName)
  }

  return (
    <div className='card'>
      {results.map((route) => (
        <div className='columns' key={route.tag}>
          <div className='column has-text-centered'>{route.title}</div>
          <div className='column has-text-centered'>
            <RouteButton handleResult={handleResult} route={route}>
              Show Direction
            </RouteButton>
          </div>
        </div>
      ))}
      {showDropDown ? (
        <DropDownDetails details={routeData} getBusSchedule={getBusSchedule} />
      ) : null}
    </div>
  )
}

export default RouteResults
