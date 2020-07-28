import React, { useState, useEffect } from 'react'

const DropDownDetails = ({ details, getBusSchedule }) => {
  const [directionIndex, setDirectionIndex] = useState(0) // holds index of selected data array
  const [stopList, setStopList] = useState([])

  const handleSelect = (e) => {
    e.preventDefault()
    setDirectionIndex(Number(e.target.value))
  }

  useEffect(() => {
    const result = details.stop.filter((item) => {
      return details.direction[directionIndex].stop.find(
        (stp) => stp.tag === item.tag
      )
    })
    setStopList(result)
  }, [details.direction, details.stop, directionIndex])

  const onStopSelect = async (e) => {
    await getBusSchedule(details.tag, e.target.value)
  }

  return (
    <div className='columns'>
      <div className='column'>
        <div className='control'>
          <div className='select'>
            <select onChange={handleSelect} onSubmit={(e) => e.preventDefault}>
              {details.direction.map((dir, i) => (
                <option key={dir.tag} value={i}>
                  {dir.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='control'>
          <div className='select'>
            <select onChange={onStopSelect}>
              {stopList.map((stop) => (
                <option key={stop.tag} value={stop.tag}>
                  {stop.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDownDetails
