export const convertToPressure = pressure => (pressure * 0.750062).toFixed(2);

export const convertToCelsius = degK => Math.round(degK - 273.15);
