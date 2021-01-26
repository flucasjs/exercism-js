const EARTH_YEAR_ORBITAL_PERIOD = {
  mercury: 0.2408467, 
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus:  84.016846,
  neptune: 164.79132
}

const SECONDS_PER_EARTH_YEAR = 31557600;

export const age = (planet, seconds) => {
  const earthYears = seconds / SECONDS_PER_EARTH_YEAR;
  const conversionFactor = 1 / EARTH_YEAR_ORBITAL_PERIOD[planet];

  return Math.round(earthYears * conversionFactor * 1e2) / 1e2 ;
};