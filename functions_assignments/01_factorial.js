// To find factorial of a given number...

function factorial(number) {
  let factorialOfNumber = 1;

  for (let term = 1; term <= number; term++) {
    factorialOfNumber *= term;
  }

  return factorialOfNumber;
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function getMessage(number, expected, actual) {
  const message = "factorial of " + number + " should be " + expected;
  return message + " and is " + actual;
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const mark = getMark(expected, actual);
  const message = getMessage(number, expected, actual);

  console.log(mark + message);
}

function testCases() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);
}

testCases();