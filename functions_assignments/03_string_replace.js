/* 
  replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno wornd'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''
*/

function replace(text, match, replacement) {
  let replacedString = "";

  for (let index = 0; index < text.length; index++) {
    const isMatching = text[index] === match;
    replacedString += isMatching ? replacement : text[index];
  }
  return replacedString;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function makeMessage(text, match, replacement, expected, actual) {
  const textSegment = "|text:" + text + "\n";
  const matchSegment = "  |match:" + match + "\n";
  const expectedSegment = "  |expected:" + expected + "\n";
  const actualSegment = "  |actual:" + actual + "\n";
  const replacementSegment = "  |replacement:" + replacement + "\n";
  const message = textSegment + matchSegment + replacementSegment;

  return message + expectedSegment + actualSegment;
}

function testStringReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual, expected);
  const content = makeMessage(text, match, replacement, expected, actual);

  console.log(mark + content);
}

function testCases() {
  testStringReplace("suman", "a", "_", "sum_n");
  testStringReplace('hello world', 'l', 'n', 'henno wornd');
  testStringReplace('', 'd', 'e', '');
  testStringReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
  testStringReplace('', '', '', '');
}

testCases();