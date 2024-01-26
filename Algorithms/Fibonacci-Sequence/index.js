/* Problem - Given a number 'n' , find the first 'n' elements of the Fibonacci sequence

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

The first two numbers in the sequence are 0 and 1.

Fibonacci(2) = [0,1]

Fibonacci(3) = [0,1,1]

Fibonacci(7) = [0,1,1,2,3,5,8] */

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log("Fibonacci of 2", fibonacci(2));
console.log("Fibonacci of 3", fibonacci(3));
console.log("Fibonacci of 7", fibonacci(7));

// Big-O = O(n)
