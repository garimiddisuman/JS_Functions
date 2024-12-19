/*  to find nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5       */

function nthFibonacciTerm(number) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let count = 1; count < number; count++) {
    const futureTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }

  return currentTerm;
}

function getMark(expect, actual) {
  return expect === actual ? "✅" : "❌";
}

function testNthFibanacci(number, expect) {
  const actual = nthFibonacciTerm(number);
  const message = number + " fibanacci term is " + actual;
  const mark = getMark(expect, actual);

  console.log(mark + message);
}

function testCases() {
  testNthFibanacci(1, 0);
  testNthFibanacci(4, 2);
  testNthFibanacci(6, 5);
  testNthFibanacci(8, 13);
}

testCases();