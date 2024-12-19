/*
  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  if (isDivisible(number, 3) && isDivisible(number, 5)) { 
    return "fizzbuzz";
  }

  if (isDivisible(number, 3)) {
    return "fizz";
  }

  if (isDivisible(number, 5)) {
    return "buzz";
  }

  return "" + number;
}

function getMark(expect, actual) {
  return expect === actual ? "✅" : "❌";
}

function testFizzBuzz(number, expect) {
  const actual = fizzBuzz(number);
  const message = " " + number + " is " + actual;
  const mark = getMark(expect, actual);

  console.log(mark + message);
}

function testCases() {
  testFizzBuzz(0, "fizzbuzz");
  testFizzBuzz(1, "1");
  testFizzBuzz(3, "fizz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(7, "7");
}

testCases();