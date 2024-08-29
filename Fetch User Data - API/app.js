// app.js
document.getElementById('fetchUser').addEventListener('click', () => {
    // Replace the API call with your own data
    const user = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "(555) 123-4567"
    };

    // Display the user information
    document.getElementById('userInfo').innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;
});
