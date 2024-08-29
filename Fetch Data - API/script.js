document.getElementById('jokeButton').addEventListener('click', fetchJoke);

function fetchJoke() {
    // Using fetch() to get a random joke from the "Official Joke API"
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())  // Convert the response to JSON format
        .then(data => {
            // Display the joke in the paragraph with id="jokeDisplay"
            document.getElementById('jokeDisplay').textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
        });
}
