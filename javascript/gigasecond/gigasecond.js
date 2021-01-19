const GIGASECOND_IN_MS = 10 ** 12;

export const gigasecond = (initialDate) => {
  return new Date(initialDate.getTime() + GIGASECOND_IN_MS);
};
