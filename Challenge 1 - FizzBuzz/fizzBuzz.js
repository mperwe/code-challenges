function fizzBuzz(str1, str2) {
    // Combine the two input strings
    const combinedString = str1 + str2;
  
    // Get the length of the combined string
    const length = combinedString.length;
  
    // Check divisibility and return the appropriate result
    if (length % 3 === 0 && length % 5 === 0) {
      return 'FizzBuzz';
    } else if (length % 3 === 0) {
      return 'Fizz';
    } else if (length % 5 === 0) {
      return 'Buzz';
    } else {
      return ''; // Return an empty string if none of the conditions are met
    }
  }
  
  // Example usage:
  console.log(fizzBuzz("Hello", "World")); // Adjust input strings to test
  