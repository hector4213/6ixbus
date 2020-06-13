import React from "react";

const BusInput = (props) => {

  return (
    <div>
      <form onSubmit={props.onBusStopSubmit}>
        <label>
          StopId:
          <input onChange={props.handleStopChange} value={props.stopSearch} type="text" />
        </label>
      </form>
    </div>
  );
};
export default BusInput;
