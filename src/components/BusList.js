import React from "react";

const BusList = (props) => {
  console.log("this is BusList props", props);
  const nextThree = props.times.predictions.direction.prediction.slice(0,3)


  return (
    <div>
      <h1>{props.times.predictions.routeTitle}</h1>
      <h2>{props.times.predictions.stopTitle}</h2>
  <ul>{nextThree.map(bus => (<li key={bus.tripTag}>Minutes{bus.minutes} Seconds{bus.seconds}</li>))}</ul>
    </div>
  );
};

export default BusList;
