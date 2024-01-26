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
