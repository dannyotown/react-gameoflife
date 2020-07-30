import { colNum, rowNum } from "./GridConfig";
export const RandomGrid = () => {
  const rows = [];
  for (let i = 0; i < rowNum; i++) {
    rows.push(Array(colNum).fill(0));
  }
  for (let j = 0; j < rowNum; j++) {
    for (let k = 0; k < colNum; k++) {
      const random = Math.random();
      if (random > 0.5) {
        rows[j][k] = 1;
      }
    }
  }
  return rows;
};

export default RandomGrid;
