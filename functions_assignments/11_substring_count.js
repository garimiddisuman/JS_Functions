/* Write a function that counts the occurrence of a substring in a string
Examples:
  occurrences('hello world', 'l') => 3
  occurrences('hello world', 'll') => 1
  occurrences('hello world', 'world') => 1
  occurrences('hello world', 'zebra') => 0   */

function hasSubStringFound(index, subString, string) {
  for (let startIndex = 0; startIndex < subString.length; startIndex++) {
    if (string[startIndex + index] !== subString[startIndex]) {
      return false;
    }
  }

  return true;
}

function occurrences(string, substring) {
  if (substring === "") {
    return 0;
  }
  
  let occurrencesCount = 0;

  for (let index = 0; index < string.length; index++) {
    if (hasSubStringFound(index, substring, string)) {
      occurrencesCount++;
    }
  }

  return occurrencesCount;
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

function testSubStringCount(string, subString, expect) {
  const actual = occurrences(string, subString);
  const mark = getMark(actual, expect);
  let content = makeMessage(string, subString, expect, actual);
  content = mark + content;

  console.log(content);
}

function testCases() {
  testSubStringCount("hello world", "l", 3);
  testSubStringCount("hello world", "ll", 1);
  testSubStringCount("", "cc", 0);
  testSubStringCount("abc", "", 0);
  testSubStringCount("aaaaaaaaaaa", "aaa", 9);
  testSubStringCount("", "", 0);
  testSubStringCount("hello world", "abc", 0);
}

testCases();