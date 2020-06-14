import React, { useState } from "react";
import Nextbus from "../api/Nextbus";
import BusInput from "./BusInput";
import RouteList from "./RouteList";
import BusList from './BusList';

const App = () => {
  const [stopSearch, setStopSearch] = useState(""); // stop id state
  const [busData, setBusData] = useState([]); // bus data that has routes
  const [ selectedRoute, setSelectedRoute] = useState([]) //the routes user has clicked
  const [showBusTimes, setShowBusTimes] = useState(false);

  const handleStopChange = (e) => {
    setStopSearch(e.target.value);
  };

  const onBusStopSubmit = async (e) => {
    e.preventDefault();
    const response = await Nextbus.get(null, {
      params: { command: "predictions", a: "ttc", stopId: `${stopSearch}` },
    });
    setBusData(response.data);
    
  };

  const { predictions } = busData;
  console.log('This is busData', busData)
  console.log("this is selected route",selectedRoute)

  const getBusSchedule = async (routeTag, stopTag) => {
    const response = await Nextbus.get(null, {
      params: {
        command: "predictions",
        a: "ttc",
        r: `${routeTag}`,
        s: `${stopTag}`,
      },
    });
    setSelectedRoute(response.data)
    setShowBusTimes(!showBusTimes);
  
  };

  return (
    <div>
      <h1>6ixBus</h1>
      <BusInput
        handleStopChange={handleStopChange}
        onBusStopSubmit={onBusStopSubmit}
        stopSearch={stopSearch}
      />
      <div>
        <RouteList routes={predictions} getBusSchedule={getBusSchedule}/>
      </div>
      <div>
        {showBusTimes && <BusList times={selectedRoute}/>}
      </div>
    </div>
  );
};

export default App;
