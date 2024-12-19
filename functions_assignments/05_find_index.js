/*
  to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1
*/


function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(text, target, expected, actual) {
  const textSegment = "|text:" + text + "\n";
  const targetSegment = "  |target:" + target + "\n";
  const expectedSegment = "  |expected:" + expected + "\n";
  const actualSegment = "  |actual:" + actual + "\n";
  const message = textSegment + targetSegment + expectedSegment;

  return message + actualSegment;
}

function testFindIndex(text, target, expected) {
  const actual = findIndex(text, target);
  const mark = getMark(actual, expected);
  const content = makeMessage(text, target, expected, actual);

  console.log(mark + content);
}

function testCases() {
  testFindIndex("thoughtworks", "o", 2);
  testFindIndex("", "", -1);
  testFindIndex("suman", "z", -1);
  testFindIndex("iiiiiii", "i", 0);
  testFindIndex("", "a", -1);
}

testCases();