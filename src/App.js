import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import ControlBox from "./components/ControlBox";

const rowNum = 25;
const colNum = 30;
const moves = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < rowNum; i++) {
      rows.push(Array(colNum).fill(0));
    }
    return rows;
  });
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
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${colNum}, 30px)` }}
        >
          {grid.map((rows, i) =>
            rows.map((columns, k) => {
              return (
                <div
                  key={`${i}-${k}`}
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: grid[i][k] ? "#1A535C" : undefined,
                    border: "1px #1D3557 solid",
                  }}
                  onClick={() => {
                    const newGrid = produce(grid, (gridCopy) => {
                      gridCopy[i][k] = grid[i][k] ? 0 : 1;
                    });
                    setGrid(newGrid);
                  }}
                />
              );
            })
          )}
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
      />
    </>
  );
}

export default App;
