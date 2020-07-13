import React from "react";
import ScheduleBtn from "./ScheduleBtn";

const RouteList = ({ routes, getBusSchedule }) => {
  if (!routes) {
    return null; //loading or something
  }
  console.log("this is routes", routes);

  const showRoutes = () => {
    if (routes.hasOwnProperty("dirTitleBecauseNoPredictions")) {
      return (
        <div className="card">
          <li className="level py-4 px-4" key={routes.stopTag}>
            <div className="level-left">
              <div className="level-item ">{routes.routeTitle}</div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <ScheduleBtn
                  onClick={() =>
                    getBusSchedule(routes.routeTag, routes.stopTag)
                  }
                />
              </div>
            </div>
          </li>
        </div>
      );
    } else if (Array.isArray(routes)) {
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
    } else if (routes && typeof routes === "object") {
      return (
        <div className="card">
          <li className="level py-4 px-4" key={routes.stopTag}>
            <div className="level-left">
              <div className="level-item ">{routes.routeTitle}</div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <ScheduleBtn
                  onClick={() =>
                    getBusSchedule(routes.routeTag, routes.stopTag)
                  }
                />
              </div>
            </div>
          </li>
        </div>
      );
    }
  };

  return <ul>{showRoutes()}</ul>;
};

export default RouteList;
