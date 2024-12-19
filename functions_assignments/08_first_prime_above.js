/*  To find the first prime above of the given number....
Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17
*/

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  let primeCandidate = number + 1;
  
  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

function getMark(expect, actual) {
  return expect === actual ? "✅" : "❌";
}

function testFirstPrimeAbove(number, expect) {
  const actual = firstPrimeAbove(number);
  const message = "first prime above of " + number + " is " + actual;
  const mark = getMark(expect, actual);

  console.log(mark + message);
}

function testCases() {
  testFirstPrimeAbove(-10, 2);
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(90, 97);
}

testCases();