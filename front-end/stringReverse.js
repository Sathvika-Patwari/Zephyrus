function reverseString() {
    const str = prompt("Please enter a string:");
    const reversedStr = str.split('').reverse().join('');

    console.log(`String Entered: "${str}"`);
    console.log(`String after Reversed: "${reversedStr}"`);

    return reversedStr;
}
reverseString();

// In this code, I created a function called `reverseString()` that prompts the user to input a string. 
// After receiving the string, I used the `split('')` method to split the string into an array of characters, then reversed the array using the `reverse()` method, and finally joined the array back into a string using `join('')`. 
// This results in the reversed version of the original string. 
// The function then logs both the original string and the reversed string to the console, providing feedback to the user. The reversed string is also returned by the function. 
// This implementation allows the user to see the transformation of their input string in real time.