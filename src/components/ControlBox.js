import React from "react";
import "./css/ControlBox.css";

const ControlBox = ({ run, setRun, runningRef, runSim }) => {
  return (
    <div className="controlBox">
      <button
        style={{ minHeight: "20px", minWidth: "50px" }}
        onClick={() => {
          setRun(!run);
          if (!run) {
            runningRef.current = true;
            runSim();
          }
        }}
      >
        {run ? "stop" : "start"}
      </button>
      <div className="selectBox">
        <label className="label">Speed</label>
        <select>
          <option value="1000">1 second</option>
          <option value="500">1/2 a Second</option>
          <option value="250">1/4 a Second</option>
        </select>
      </div>
    </div>
  );
};

export default ControlBox;
