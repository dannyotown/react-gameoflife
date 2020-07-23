import React, { useState, useCallback, useRef } from "react";

const rowNum = 25;
const colNum = 25;

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < rowNum; i++) {
      rows.push(Array(colNum).fill(0));
    }
    return rows;
  });
  const [run, setRun] = useState(false);
  function gameOfLife(board) {
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
    for (let i = 0; i < board.length; i++) {
      for (let k = 0; k < board[i].length; k++) {
        let neighbors = 0;
        moves.forEach(([x, y]) => {
          const newI = i + x;
          const newK = k + y;
          if (
            newI >= 0 &&
            newI < board.length &&
            newK >= 0 &&
            newK < board[i].length
          ) {
            neighbors += board[newI][newK];
          }
        });
        if (neighbors < 2 || neighbors > 3) {
          board[i][k] = 0;
        } else if (board[i][k] === 0 && neighbors === 3) {
          board[i][k] = 1;
        }
      }
    }
    return board;
  }

  const runningRef = useRef(run);
  runningRef.current = run;

  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return;
    } else {
      setGrid(gameOfLife(grid));
    }
    setTimeout(runSim, 1000);
  }, []);

  return (
    <>
      <button
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${colNum}, 30px)`,
          margin: "0 auto",
        }}
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
                  setGrid(
                    grid.map((cell) => {
                      grid[i][k] = grid[i][k] ? 0 : 1;
                      return cell;
                    })
                  );
                }}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
