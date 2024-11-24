function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz();


// In this code, I created a function called `fizzBuzz()` that iterates through numbers from 1 to 100 using a `for` loop. For each number, the function checks three conditions: 
// 1. If the number is divisible by both 3 and 5, it logs "FizzBuzz" to the console.
// 2. If the number is divisible only by 3, it logs "Fizz".
// 3. If the number is divisible only by 5, it logs "Buzz".
// 4. If the number is divisible by neither 3 nor 5, it logs the number itself.
// This implementation of the classic "FizzBuzz" problem allows for easy identification of numbers that meet specific divisibility conditions, while printing corresponding labels ("Fizz", "Buzz", or "FizzBuzz") for the appropriate multiples of 3 and 5. The function runs through all numbers from 1 to 100, providing the correct output based on these conditions.
