import React from "react";

const BusList = (props) => {
  console.log("this is BusList props", props);

  const showNoBus = () => {
    if (props.times.predictions.dirTitleBecauseNoPredictions) {
      return (
        <li>
          Sorry {props.times.predictions.dirTitleBecauseNoPredictions}is not
          running
        </li>
      );
    }
  };

  const showBus = () => {
    if (props.times.predictions.direction.prediction.length < 0) {
      return (
        <li key={props.times.predictions.direction.prediction.tripTag}>
          Minutes {props.times.predictions.direction.prediction.minutes}
          Seconds {props.times.predictions.direction.prediction.seconds}
        </li>
      );
    }
    const nextThree = props.times.predictions.direction.prediction.slice(0, 3);
    return nextThree.map((bus) => (
      <div className="card py-4 px-4">
        <li className="level" key={bus.tripTag}>
          <div className="level-item">
            Minutes {bus.minutes} Seconds {bus.seconds}
          </div>
        </li>
      </div>
    ));
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
