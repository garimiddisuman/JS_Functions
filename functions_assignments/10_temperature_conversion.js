// temperature convertion from one form to another form...

/* 
convertion formulas...
  K to C -> value − 273.15;
  K to F ->  (value - 273.15) * 9/5 + 32;
  F to C -> (value - 32) * 5/9;
  F to K ->  ((value - 32) * 5/9) + 273.15;
  C to K ->  value + 273.15;
  C to F ->  (value * 9/5) + 32;          
*/

function isValidUnit(char) {
  return char === "K" || char === "F" || char === "C";
}

function fromCelsius(to, value) {
  const toFahrenheit = value * 9 / 5 + 32;
  const toKelvin = value + 273.15;

  return to === "F" ? toFahrenheit : toKelvin;
}

function fromKelvin(to, value) {
  const toFahrenheit = (value - 273.15) * 9 / 5 + 32;
  const toCelsius = value - 273.15;

  return to === "C" ? toCelsius : toFahrenheit;
}

function fromFahrenheit(to, value) {
  const toCelsius = (value - 32) * 5 / 9;
  const toKelvin = (value - 32) * 5 / 9 + 273.15;

  return to === "C" ? toCelsius : toKelvin;
}

function convertFrom(from, to, value) {
  switch (from) {
    case "K":
      return fromKelvin(to, value);
    case "F":
      return fromFahrenheit(to, value);
    case "C":
      return fromCelsius(to, value);
  }
}

function convert(from, to, value) {
  if (!(isValidUnit(from) && isValidUnit(to))) {
    return NaN;
  }

  if (from === to) {
    return +value;
  }

  return convertFrom(from, to, +value);
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testTemperatureConvertion(from, to, value, expected) {
  const actual = convert(from, to, value);
  const mark = getMark(actual, expected);
  const fromToSegment = "from:" + from + "  to:" + to;
  const valueSegment = "  value:" + value + "\n";
  const expectedSegment = "  expected:" + expected + "\n";
  const actualSegment = "  actual:" + actual;
  const message = mark + fromToSegment + valueSegment + expectedSegment;

  console.log(message + actualSegment + '\n');
}

function testCases() {
  testTemperatureConvertion('C', 'K', 0, 273.15);
  testTemperatureConvertion('C', 'F', 37, 98.6);
  testTemperatureConvertion('C', 'C', "37", 37);
  testTemperatureConvertion('C', 'F', "cc", NaN);
  testTemperatureConvertion('F', 'K', 98.6, 310.15);
  testTemperatureConvertion('A', 'K', 100, NaN);
  testTemperatureConvertion('A', 'A', 100, NaN);
}

testCases();

testTemperatureConvertion('C', 'C', 100, 100);
testTemperatureConvertion('K', 'K', 100, 100);
testTemperatureConvertion('F', 'F', -40, -40);
testTemperatureConvertion('F', 'A', 100, NaN);
testTemperatureConvertion('C', 'A', 100, NaN);
testTemperatureConvertion('K', 'A', 100, NaN);
testTemperatureConvertion('K', 'C', NaN, NaN);
testTemperatureConvertion('C', 'K', "0", 273.15);