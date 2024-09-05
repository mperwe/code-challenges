// Add an event listener to the button with ID 'fetchButton'
document.getElementById('fetchButton').addEventListener('click', () => {
    // Define the URL of the local JSON file
    const apiUrl = 'students.json';

    // Use the Fetch API to get the JSON file
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                // If not, throw an error
                throw new Error('Network response was not ok');
            }
            // Parse the response body as JSON
            return response.json();
        })
        .then(data => {
            // Get the <ul> element where student data will be displayed
            const studentList = document.getElementById('studentList');
            // Clear any existing content in the <ul>
            studentList.innerHTML = '';

            // Iterate over each student object in the data array
            data.forEach(student => {
                // Create a new <li> element for each student
                const listItem = document.createElement('li');
                // Set the text content of the <li> to include student's name and age
                listItem.textContent = `Name: ${student.name}, Age: ${student.age}`;
                // Append the <li> to the <ul>
                studentList.appendChild(listItem);
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch operation
            console.error('There was a problem with the fetch operation:', error);
        });
});
