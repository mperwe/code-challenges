// function to check if word in list is a palindrome
function isPalindrome(s) {
    // Convert the string to an array of characters
    const characters = s.split('');
    // Create a reversed version of the array
    const reversedCharacters = characters.slice().reverse();
    // Convert the reversed array back to a string
    const reversedString = reversedCharacters.join('');
    // Compare the original string with the reversed string
    return s === reversedString;
}

function firstPalindrome(words) {
    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
}

// Example usage
const wordList = ["abc", "car","ada","racecar", "cool"];
const result = firstPalindrome(wordList);
console.log(result);