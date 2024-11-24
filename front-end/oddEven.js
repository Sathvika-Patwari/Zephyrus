function evenOrOdd() {
    const num = parseInt(prompt("Please enter a number:"));
    const result = num % 2 === 0 ? "Even" : "Odd";

    console.log(`The number ${num} is ${result}.`);
}
evenOrOdd();

// In this code, I created a simple function called `evenOrOdd()` that prompts the user to input a number. After receiving the number, I used the `parseInt()` function to convert the input from a string to an integer. 
// Then, I checked whether the number is even or odd using the modulo operator (`%`). 
// If the number is divisible by 2 (i.e., the remainder is 0), it is classified as "Even", otherwise, it is classified as "Odd". The result is then displayed in the console with a message that tells the user whether the entered number is even or odd. 
// This function provides immediate feedback based on the user's input and displays the outcome directly in the console.