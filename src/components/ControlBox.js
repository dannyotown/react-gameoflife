import React from "react";
import "./css/ControlBox.css";

const ControlBox = ({
  run,
  setRun,
  runningRef,
  runSim,
  setUpdateTimer,
  colNum,
  setGrid,
  rowNum,
  presetGrid,
  randomGrid,
}) => {
  const onSelectChange = (e) => {
    setUpdateTimer(e.target.value);
  };
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
        {run ? "Stop" : "Start"}
      </button>
      <button
        style={{ minHeight: "20px", minWidth: "50px" }}
        onClick={() => {
          const rows = [];
          for (let i = 0; i < rowNum; i++) {
            rows.push(Array(colNum).fill(0));
          }
          setGrid(rows);
        }}
      >
        Clear
      </button>
      <button
        style={{ minHeight: "20px", minWidth: "50px" }}
        onClick={randomGrid}
      >
        Random
      </button>
      <div className="box">
        <select onChange={onSelectChange}>
          <option value="1000">1 second</option>
          <option value="500">0.5 a Second</option>
          <option value="250">0.25 a Second</option>
          <option value="100">0.1 a Second</option>
        </select>
      </div>
      <div className="box">
        <select onChange={presetGrid}>
          <option value="ten">10 Cells</option>
          <option value="block">block</option>
          <option value="exploder">exploder</option>
          <option value="spaceship">spaceship</option>
        </select>
      </div>
    </div>
  );
};

export default ControlBox;
