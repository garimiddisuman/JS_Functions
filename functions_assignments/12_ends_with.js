/*  Write a function that tells if a string ends with a specific substring
Examples:
  endsWith('hello world', 'ld') => true
  endsWith('hello world', 'wor') => false
  endsWith('hello world', 'hello') => false      */

function isSliceMatching(index, string, subString) {
  for (let sliceIndex = 0; sliceIndex < subString.length; sliceIndex++) {
    if (string[sliceIndex + index] !== subString[sliceIndex]) {
      return false;
    }
  }
  return true;
}

function endsWith(string, substring) {
  const potentialMatchIndex = string.length - substring.length;

  return isSliceMatching(potentialMatchIndex, string, substring);
}

function getMark(actual, expect) {
  return actual === expect ? "✅" : "❌";
}

function makeMessage(string, subString, expect, actual) {
  const stringSegment = "|string:'" + string + "'\n";
  const subStringSegment = "  |subString:'" + subString + "'\n";
  const expectSegment = "  |expect:" + expect + "\n";
  const actualSegment = "  |actual:" + actual + "\n";
  const message = stringSegment + subStringSegment;

  return message + expectSegment + actualSegment;
}

function testEndsWith(string, subString, expect) {
  const actual = endsWith(string, subString);
  const mark = getMark(actual, expect);
  const content = mark + makeMessage(string, subString, expect, actual);

  console.log(content);
}

function testCases() {
  testEndsWith("hello world", "ld", true);
  testEndsWith("hello world", "wor", false);
  testEndsWith("suman", "suman", true);
  testEndsWith("hello world", "hello", false);
  testEndsWith("hello world", "", true);
  testEndsWith("", "", true);
  testEndsWith("aiiib", "iib", true);
}

testCases();