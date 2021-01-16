export const decodedValue = (resistorBands) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ]

  const [firstBand, secondBand] = resistorBands;

  return COLORS.indexOf(firstBand) * 10 + COLORS.indexOf(secondBand);
};

