export const teninrow = () => {
  const rows = [];
  for (let i = 0; i < 25; i++) {
    rows.push(Array(30).fill(0));
    if (i === parseInt(25 / 2)) {
      for (let j = 10; j < 21; j++) {
        rows[i][j] = 1;
      }
    }
  }
  return rows;
};

export const block = () => {
  const rows = [];
  for (let i = 0; i < 25; i++) {
    rows.push(Array(30).fill(0));
  }
  rows[12][15] = 1;
  rows[12][16] = 1;
  rows[11][16] = 1;
  rows[11][15] = 1;
  return rows;
};

export const exploder = () => {
  const rows = [];
  for (let i = 0; i < 25; i++) {
    rows.push(Array(30).fill(0));
  }
  rows[13][13] = 1;
  rows[12][13] = 1;
  rows[11][13] = 1;
  rows[10][13] = 1;
  rows[9][13] = 1;
  rows[9][15] = 1;
  rows[13][17] = 1;
  rows[13][15] = 1;
  rows[12][17] = 1;
  rows[11][17] = 1;
  rows[10][17] = 1;
  rows[9][17] = 1;
  return rows;
};

export const spaceship = () => {
  const rows = [];
  for (let i = 0; i < 25; i++) {
    rows.push(Array(30).fill(0));
  }
  rows[13][13] = 1;
  rows[11][13] = 1;
  rows[13][16] = 1;
  rows[12][17] = 1;
  rows[11][17] = 1;
  rows[10][17] = 1;
  rows[10][16] = 1;
  rows[10][15] = 1;
  rows[10][14] = 1;
  return rows;
};
export default { teninrow, block, exploder, spaceship };
