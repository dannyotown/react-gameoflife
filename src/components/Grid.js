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
                width: grid[i][k] ? "92%" : "92%",
                height: grid[i][k] ? "95%" : "95%",
                backgroundColor: grid[i][k] ? "#343a40" : undefined,
                border: grid[i][k] ? "none" : ".25px solid grey",
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
