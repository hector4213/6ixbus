import React, { useState, useEffect } from 'react'
import BusInput from './BusInput'
import RouteList from './RouteList'
import BusList from './BusList'
import RouteSearchFilter from './RouteSearchFilter'
import RouteListData from './RouteListData'

import busService from '../api/nextbus'

const App = () => {
  const [stopSearch, setStopSearch] = useState('') // stop id form input term
  const [busRoutes, setBusRoutes] = useState([]) // bus data that has routes
  const [predictions, setPredictions] = useState([]) // the routes user has clicked if this changes useEffect?
  const [showBusTimes, setShowBusTimes] = useState(false) // shows bus schedule
  const [allRoutes, setAllRoutes] = useState([])
  const [routeSearch, setRouteSearch] = useState('')

  const searchReset = () => {
    setStopSearch('')
    setBusRoutes([])
    setPredictions([])
    setShowBusTimes(false)
    setRouteSearch('')
  }

  const handleStopChange = (e) => {
    setStopSearch(e.target.value)
  }

  const handleRouteSearch = (e) => {
    setRouteSearch(e.target.value)
  }

  const onBusStopSubmit = async (e) => {
    e.preventDefault()

    const response = await busService.getRoutes(stopSearch)
    setBusRoutes(response.data)
  }

  const getBusSchedule = async (routeTag, stopTag) => {
    setShowBusTimes(true)
    const response = await busService.getSchedule(routeTag, stopTag)
    setPredictions(response.data) // try catch

    console.log('this is predictions', predictions)
  }

  const filteredRoutes = allRoutes.filter(
    (route) =>
      route.title.toLowerCase().indexOf(routeSearch.toLowerCase()) !== -1
  )

  useEffect(() => {
    const fetchData = async () => {
      const response = await busService.getallServiceRoutes()
      setAllRoutes(response.data.route)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setShowBusTimes(false) // when user enters new busstop showbustimes goes back to normal and hides
  }, [busRoutes])

  return (
    <div className='main-container'>
      <div className='panel is-primary ui'>
        <h1 className='panel-heading has-text-centered'>6ixBus</h1>
        <div>{showBusTimes ? <BusList times={predictions} /> : null}</div>
        <BusInput
          handleStopChange={handleStopChange}
          onBusStopSubmit={onBusStopSubmit}
          stopSearch={stopSearch}
        />
        <RouteSearchFilter
          onChange={handleRouteSearch}
          routeSearch={routeSearch}
        />
        <RouteListData
          filteredRoutes={filteredRoutes}
          changeSearch={setRouteSearch}
          getBusSchedule={getBusSchedule}
        />
        <div>
          <RouteList
            routes={busRoutes.predictions}
            getBusSchedule={getBusSchedule}
            routeSearch={routeSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default App
