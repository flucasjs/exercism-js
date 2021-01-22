export const squareRoot = (square) => {
  let estimate = square;
  
  // Heron's Method
  for (let i = 0; i < 10; i++) {
    estimate = (estimate + (square / estimate)) / 2;
  }

  return Math.floor(estimate);
};
