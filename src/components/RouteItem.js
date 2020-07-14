import React from 'react'

import ScheduleBtn from "./ScheduleBtn";

const RouteItem = ({routes, getBusSchedule}) => {
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
    )
}

export default RouteItem
