/*
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''
*/

function min(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function max(number1, number2) {
  return number1 > number2 ? number2 : number1;
}

function slice(text, start, end) {
  let subString = "";
  const startIndex = min(start, 0);
  const endIndex = max(text.length - 1, end);

  for (let index = startIndex; index <= endIndex; index++) {
    subString += text[index];
  }

  return subString;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(text, start, end, expected, actual) {
  const textSegment = "|text:" + text + "\n";
  const startSegment = "  |start:" + start + "\n";
  const endSegment = "  |end:" + end + "\n";
  const expectedSegment = "  |expected:" + expected + "\n";
  const actualSegment = "  |actual:" + actual + "\n";
  const message = textSegment + startSegment + endSegment;

  return message + expectedSegment + actualSegment;
}

function testStringSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const mark = getMark(actual, expected);
  const content = makeMessage(text, start, end, expected, actual);

  console.log(mark + content);
}

function testCases() {
  testStringSlice('hello world', 0, 4, 'hello');
  testStringSlice('negative start', -1, 8, 'negative ');
  testStringSlice('', 0, 10, '');
  testStringSlice('suman', -10, 10, 'suman');
}

testCases();