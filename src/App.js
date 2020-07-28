import React, { useState, useCallback, useRef } from "react";
import { colNum, rowNum, moves } from "./components/GridConfig";
import teninrow from "./components/Presets";
import Grid from "./components/Grid";
import produce from "immer";
import ControlBox from "./components/ControlBox";

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < rowNum; i++) {
      rows.push(Array(colNum).fill(0));
    }
    return rows;
  });
  const presetGrid = (e) => {
    if (e.target.value === "teninarow") {
      setGrid(teninrow);
    }
  };
  const [updateTimer, setUpdateTimer] = useState(1000);
  const [run, setRun] = useState(false);

  const runningRef = useRef(run);
  runningRef.current = run;

  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((grid) => {
      return produce(grid, (gridCopy) => {
        for (let i = 0; i < grid.length; i++) {
          for (let k = 0; k < grid[i].length; k++) {
            let neighbors = 0;
            moves.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (
                newI >= 0 &&
                newI < grid.length &&
                newK >= 0 &&
                newK < grid[i].length
              ) {
                neighbors += grid[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (grid[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSim, parseInt(updateTimer));
  }, [updateTimer]);

  return (
    <>
      <div className="main">
        <div className="header">Game Of Life</div>
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${colNum}, 30px)` }}
        >
          <Grid setGrid={setGrid} grid={grid} />
        </div>
      </div>
      <ControlBox
        run={run}
        runningRef={runningRef}
        runSim={runSim}
        setRun={setRun}
        setGrid={setGrid}
        colNum={colNum}
        rowNum={rowNum}
        setUpdateTimer={setUpdateTimer}
        presetGrid={presetGrid}
      />
    </>
  );
}

export default App;
