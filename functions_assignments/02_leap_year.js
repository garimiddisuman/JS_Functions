// To find given year is leap year or not....

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (!isDivisible(year, 4)) {
    return false;
  }

  if (isDivisible(year, 400)) {
    return true;
  }

  return !isDivisible(year, 100);
}

function getMark(expect, actual) {
  return expect === actual ? "✅" : "❌";
}

function getMessage(actual, year) {
  const isLeap = actual ? " is " : " is not ";
  const message = " | year:" + year + isLeap + "leap year ";
  return message;
}

function testIsLeapYear(year, expect) {
  const actual = isLeapYear(year);
  const mark = getMark(expect, actual);
  const message = getMessage(actual, year);

  console.log(mark + actual + message);
}

function testCases() {
  testIsLeapYear(1, false);
  testIsLeapYear(4, true);
  testIsLeapYear(1700, false);
  testIsLeapYear(1900, false);
  testIsLeapYear(2000, true);
}

testCases();