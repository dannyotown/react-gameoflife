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
                width: grid[i][k] ? 28 : 30,
                height: grid[i][k] ? 28 : 30,
                backgroundColor: grid[i][k] ? "#343a40" : undefined,
                border: grid[i][k] ? "2px black solid" : "1px black solid",
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
