const convertToCelsius = function(temp) {
  let rawTemp = ((temp-32)*5/9);
  return +rawTemp.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let rawTemp = ((9/5)*temp+32);
  return +rawTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
