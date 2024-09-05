// Selecting the output and button elements
const outputElement = document.getElementById('output');
const fetchDataBtn = document.getElementById('fetchDataBtn');

// Adding an event listener to the button
fetchDataBtn.addEventListener('click', () => {
    // Using fetch to get data from the local JSON file
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Convert the response to JSON
        })
        .then(data => {
            // Displaying the fetched data in the browser
            outputElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            outputElement.textContent = 'Error: ' + error.message;
        });
});
