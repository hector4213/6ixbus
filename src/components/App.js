import React, { useState } from "react";
import Nextbus from "../api/Nextbus";
import BusInput from "./BusInput";
import RouteList from "./RouteList";
import BusList from "./BusList";

const App = () => {
  const [stopSearch, setStopSearch] = useState(""); // stop id state
  const [busData, setBusData] = useState([]); // bus data that has routes
  const [selectedRoute, setSelectedRoute] = useState([]); //the routes user has clicked
  const [showBusTimes, setShowBusTimes] = useState(false); //shows bus schedule

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
  console.log("This is busData", busData);

  const getBusSchedule = async (routeTag, stopTag) => {
    const response = await Nextbus.get(null, {
      params: {
        command: "predictions",
        a: "ttc",
        r: `${routeTag}`,
        s: `${stopTag}`,
      },
    });
    setSelectedRoute(response.data);
    setShowBusTimes(!showBusTimes);
  };

  return (
    <div>
      <div className="panel is-primary">
        <h1 className="panel-heading has-text-centered">6ixBus</h1>
        <BusInput
          handleStopChange={handleStopChange}
          onBusStopSubmit={onBusStopSubmit}
          stopSearch={stopSearch}
        />
        <div>{showBusTimes && <BusList times={selectedRoute} />}</div>
        <div>
          <RouteList routes={predictions} getBusSchedule={getBusSchedule} />
        </div>
      </div>
    </div>
  );
};

export default App;
