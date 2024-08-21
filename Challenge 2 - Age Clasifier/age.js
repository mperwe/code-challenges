// Function to classify the user based on their age
function classifyUser() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Prompt the user to enter their year of birth
    const yearOfBirth = parseInt(prompt("Enter your year of birth:"), 10);

    // Check if the entered year is a valid number
    if (isNaN(yearOfBirth) || yearOfBirth <= 0) {
        console.log("Invalid year of birth entered.");
        return;
    }

    // Calculate the user's age
    const age = currentYear - yearOfBirth;

    // Classify the user based on their age
    let classification;

    if (age < 18) {
        classification = "minor";
    } else if (age >= 18 && age <= 36) {
        classification = "youth";
    } else {
        classification = "elder";
    }

    // Print the classification to the console
    console.log(`You are classified as a(n) ${classification}.`);
}

// Call the function to execute the program
classifyUser();
