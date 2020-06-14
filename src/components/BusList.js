import React from "react";

const BusList = (props) => {
  console.log("this is BusList props", props);
  // const nextThree = props.times.predictions.direction.prediction.slice(0, 3);

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
    const nextThree = props.times.predictions.direction.prediction.slice(0, 3);
    return nextThree.map((bus) => (
      <li key={bus.tripTag}>
        Minutes {bus.minutes} Seconds {bus.seconds}
      </li>
    ));
  };

  const schedule = !Array.isArray(props.times.predictions)
    ? showNoBus()
    : showBus();

  return (
    <div>
      <h1>{props.times.predictions.routeTitle}</h1>
      <h2>{props.times.predictions.stopTitle}</h2>
      <ul>{schedule}</ul>
    </div>
  );
};

export default BusList;
