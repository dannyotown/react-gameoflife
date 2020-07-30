import React, { useState } from "react";
import "./css/ControlBox.css";
import randomGrid from "./RandomGrid";
import PresetGrid from "./PresetGrids";
import Header from "./Header";
import Counter from "./Counter";

const ControlBox = ({
  run,
  setRun,
  runningRef,
  runSim,
  onSelectChange,
  colNum,
  setGrid,
  rowNum,
  count,
}) => {
  const [boxView, setBoxView] = useState(true);

  return (
    <>
      <Header />
      <Counter count={count} />
      <div className="absoluteControlBox">
        <button className="upDown" onClick={() => setBoxView(!boxView)}>
          {!boxView ? "↑" : "↓"}
        </button>
        {boxView ? (
          <div className="controlBox">
            <button
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
              onClick={() => {
                const rows = [];
                for (let i = 0; i < rowNum; i++) {
                  rows.push(Array(colNum).fill(0));
                }
                count.current = 0;
                setGrid(rows);
              }}
            >
              Clear
            </button>
            <button
              onClick={() => {
                count.current = 0;
                setGrid(randomGrid);
              }}
            >
              Random
            </button>

            <select
              onChange={(e) => {
                onSelectChange(e);
              }}
            >
              <option value="1000">1 second</option>
              <option value="500">0.5 a Second</option>
              <option value="250">0.25 a Second</option>
              <option value="100">0.1 a Second</option>
            </select>
            <select
              onChange={(e) => {
                count.current = 0;
                setGrid(PresetGrid(e.target.value));
              }}
            >
              <option value="ten">10 Cells</option>
              <option value="block">block</option>
              <option value="exploder">exploder</option>
              <option value="spaceship">spaceship</option>
            </select>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ControlBox;
