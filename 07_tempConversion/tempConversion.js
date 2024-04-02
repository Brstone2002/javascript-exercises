const convertToCelsius = function(tempF) {
  let total = (tempF - 32) * 5 / 9;
  total = total.toFixed(1);
  return parseFloat(total);
};

const convertToFahrenheit = function(tempC) {
  let total = tempC * 9 / 5 + 32;
  total = total.toFixed(1);
  return parseFloat(total);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
