// Write a JavaScript program to convert temperatures
// to and from Celsius, Fahrenheit.

const CelsiustoFahrenheit = (celcius) => {
  const result = (celcius * 9) / 5 + 32;
  return result + "°F";
};

console.log(CelsiustoFahrenheit(60));

const FahrenheittoCelsius = (fahrenheit) => {
  const result = ((fahrenheit - 32) * 5) / 9;
  return result + "°C";
};

console.log(FahrenheittoCelsius(45));
