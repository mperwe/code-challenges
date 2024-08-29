// script.js

document.getElementById('fetchButton').addEventListener('click', () => {
    // URL of the API
    const url = 'https://official-joke-api.appspot.com/random_joke';
    
    // Use fetch to get data from the API
    fetch(url)
        .then(response => {
            // Check if the response is ok
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON data
            return response.json();
        })
        .then(data => {
            // Show the joke on the page
            document.getElementById('jokeDisplay').innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            // Handle errors
            document.getElementById('jokeDisplay').innerText = 'Sorry, something went wrong.';
            console.error('There has been a problem with your fetch operation:', error);
        });
});
