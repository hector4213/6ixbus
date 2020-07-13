import React from "react";

const BusList = (props) => {
  console.log("this is BusList props", props);

  const showNoBus = () => {
    if (props.times.predictions.dirTitleBecauseNoPredictions) {
      return (
        <li>
          Sorry {props.times.predictions.dirTitleBecauseNoPredictions} is not
          running
        </li>
      );
    }
  };

  const showBus = () => {
    if (Array.isArray(props.times.predictions.direction.prediction)) {
      const nextThree = props.times.predictions.direction.prediction.slice(
        0,
        3
      );
      return nextThree.map((bus) => (
        <div className="card py-4 px-4" key={bus.tripTag}>
          <li className="level">
            <div className="level-item">Minutes {bus.minutes}</div>
          </li>
        </div>
      ));
    } else if (
      typeof props.times.predictions.direction.prediction === "object"
    ) {
      return (
        <li key={props.times.predictions.direction.prediction.tripTag}>
          Minutes {props.times.predictions.direction.prediction.minutes}
        </li>
      );
    }
  };

  const schedule = props.times.predictions.dirTitleBecauseNoPredictions
    ? showNoBus()
    : showBus();

  return (
    <div className="section">
      <div className="notification is-primary">
        <h1 className="title is-3">{props.times.predictions.routeTitle}</h1>
        <h2 className="title is-5">{props.times.predictions.stopTitle}</h2>
      </div>
      <ul>{schedule}</ul>
    </div>
  );
};

export default BusList;
