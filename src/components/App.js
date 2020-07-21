import React, { useState, useEffect } from 'react'
import BusInput from './BusInput'
import RouteList from './RouteList'
import BusList from './BusList'
import busService from '../api/nextbus'

const App = () => {
  const [stopSearch, setStopSearch] = useState('') // stop id input state
  const [busData, setBusData] = useState([]) // bus data that has routes
  const [selectedRoute, setSelectedRoute] = useState([]) //the routes user has clicked if this changes useEffect?
  const [showBusTimes, setShowBusTimes] = useState(false) //shows bus schedule

  const handleStopChange = (e) => {
    setStopSearch(e.target.value)
  }

  const onBusStopSubmit = async (e) => {
    e.preventDefault()

    const response = await busService.getRoutes(stopSearch)
    setBusData(response.data)
  }

  const getBusSchedule = async (routeTag, stopTag) => {
    const response = await busService.getSchedule(routeTag, stopTag)
    setSelectedRoute(response.data)
    setShowBusTimes(true)

    console.log('this is selectedRoute', selectedRoute)
  }

  useEffect(() => {
    setShowBusTimes(false) //when user enters new busstop showbustimes goes back to normal and hides
  }, [busData])

  return (
    <div className='main-container'>
      <div className='panel is-primary ui'>
        <h1 className='panel-heading has-text-centered'>6ixBus</h1>
        <BusInput
          handleStopChange={handleStopChange}
          onBusStopSubmit={onBusStopSubmit}
          stopSearch={stopSearch}
        />
        <div>{showBusTimes && <BusList times={selectedRoute} />}</div>
        <div>
          <RouteList
            routes={busData.predictions}
            getBusSchedule={getBusSchedule}
          />
        </div>
      </div>
    </div>
  )
}

export default App
