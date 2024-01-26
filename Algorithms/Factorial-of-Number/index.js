/* Problem - Give an integer 'n', find the factorial of that integer

In the factorial of a non-negative integer 'n' , denoted n! , is the product of all positive intefers less than or equal to 'n' */

// factorial(4) -> 24

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));

console.log(factorial(4));
console.log(factorial(5));


// Big-O -> Linear time complexity O(n)
