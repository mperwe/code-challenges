function addDigits(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;  // Add the last digit of num to sum
            num = Math.floor(num / 10);  // Remove the last digit from num
        }
        num = sum;  // Update num with the sum of its digits
    }
    return num;
}

// Example usage:
let num = 38;
console.log(addDigits(num));  // Output: 2
