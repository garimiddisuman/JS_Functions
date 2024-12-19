/*
  function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false
*/

function hasSubStringOccured(sliceIndex, subString, string) {
  for (let index = 0; index < subString.length; index++) {
    if (string[sliceIndex + index] !== subString[index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString === "") {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    if (hasSubStringOccured(index, subString, string)) {
      return true;
    }
  }

  return false;
}

function getMark(actual, expect) {
  return actual === expect ? "✅" : "❌";
}

function makeMessage(string, subString, expect, actual) {
  const stringSegment = "|string:" + string + "\n";
  const subStringSegment = "  |subString:" + subString + "\n";
  const expectedSegment = "  |expected:" + expect + "\n";
  const actualSegment = "  |actual:" + actual + "\n";
  const message = stringSegment + subStringSegment + expectedSegment;

  return message + actualSegment;
}

function testIsSubstring(string, subString, expect) {
  const actual = isSubstring(string, subString);
  const mark = getMark(actual, expect);
  const content = makeMessage(string, subString, expect, actual);

  console.log(mark + content);
}

function testCases() {
  testIsSubstring("suman", "man", true);
  testIsSubstring("thoughtworks", "works", true);
  testIsSubstring("suman", "", false);
  testIsSubstring("", "man", false);
  testIsSubstring("wwoworworkworks", "works", true);
  testIsSubstring("", "", false);
  testIsSubstring("not found", "for", false);
  testIsSubstring("nononon", "no", true);
}

testCases();