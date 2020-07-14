import React from "react";
import RouteItem from './RouteItem'

const RouteList = ({ routes, getBusSchedule }) => {
  if (!routes) {
    return null; //loading or something
  }
  console.log("this is routes", routes);

  const showRoutes = () => {
    if (routes.hasOwnProperty("dirTitleBecauseNoPredictions")) {
      return (
        <RouteItem routes={routes} getBusSchedule={getBusSchedule}/>
      );
    } else if (Array.isArray(routes)) {
      return routes.map((route) => (
        <RouteItem routes={route} getBusSchedule={getBusSchedule}/>
      ));
    } else if (routes && typeof routes === "object") {
      return (
        <RouteItem routes={routes} getBusSchedule={getBusSchedule}/>
      );
    }
  };

  return <ul>{showRoutes()}</ul>;
};

export default RouteList;
