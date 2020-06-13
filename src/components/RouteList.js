import React, { useEffect } from "react";
import ScheduleBtn from "./ScheduleBtn";

const RouteList = ({ routes, getBusSchedule }) => {
  if (!routes) {
    return null; //loading or something
  }
  console.log(routes);
  const mapArr = () => {
    return routes.map((route) => (
      <li key={route.routeTag}>
        {route.routeTitle}
        <ScheduleBtn
          onClick={() => getBusSchedule(route.routeTag, route.stopTag)}
        />
      </li>
    ));
  };

  const printSingleRoute = () => {
    if(routes.hasOwnProperty("dirTitleBecauseNoPredictions")){
      return (
      <li>Your {routes.routeTitle} is currently not running...</li>
      )
    }
    return (
      <li key={routes.routeTag}>
        {routes.routeTitle}
        <ScheduleBtn
          onClick={() => getBusSchedule(routes.routeTag, routes.stopTag)}
        />
      </li>
    );
  };
  const routesToShow = !Array.isArray(routes) ? printSingleRoute() : mapArr();

  return <ul>{routesToShow}</ul>;
};

export default RouteList;
