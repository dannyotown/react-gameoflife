import React, { useState } from "react";

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
  console.log(grid);

  return (
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
  );
}

export default App;
