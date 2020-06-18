import React, { useEffect } from "react";
import ScheduleBtn from "./ScheduleBtn";

const RouteList = ({ routes, getBusSchedule }) => {
  if (!routes) {
    return null; //loading or something
  }
  console.log(routes);
  const mapArr = () => {
    return routes.map((route) => (
      <div className="card">
        <li className="level py-4 px-4" key={route.routeTag}>
          <div className="level-left">
            <div className="level-item ">{route.routeTitle}</div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <ScheduleBtn
                onClick={() => getBusSchedule(route.routeTag, route.stopTag)}
              />
            </div>
          </div>
        </li>
      </div>
    ));
  };

  const printSingleRoute = () => {
    if (routes.hasOwnProperty("dirTitleBecauseNoPredictions")) {
      return <li>Your {routes.routeTitle} is currently not running...</li>;
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
