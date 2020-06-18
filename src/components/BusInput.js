import React from "react";

import '../styles/App.scss'

const BusInput = (props) => {
  return (
    <div className="field">
      <form onSubmit={props.onBusStopSubmit}>
          <label className="label has-text-centered my-5">Enter StopID</label>
          <div className="control">
            <input
              className="input"
              onChange={props.handleStopChange}
              value={props.stopSearch}
              type="text"
            />
          </div>
          <p className="help">Enter TTC Stop ID</p>
        <div className="has-text-centered">
        <button className="button is-primary is-rounded">Get Routes</button>
        </div>
      </form>
    </div>
  );
};
export default BusInput;
