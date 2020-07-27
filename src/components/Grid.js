import React from "react";
import produce from "immer";

export const Grid = ({ grid, setGrid }) => {
  return (
    <>
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
    </>
  );
};

export default Grid;
