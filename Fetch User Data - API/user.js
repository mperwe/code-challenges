// user.js
export const displayUser = (user) => {
    return `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
    `;
};
