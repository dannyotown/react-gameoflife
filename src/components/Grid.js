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
                width: grid[i][k] ? 29 : 30,
                height: grid[i][k] ? 29 : 30,
                backgroundColor: grid[i][k] ? "#FAFAFA" : undefined,
                border: grid[i][k] ? "2px #1a1a1a solid" : "1px #FAFAFA solid",
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
