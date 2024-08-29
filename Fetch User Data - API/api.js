// api.js
export const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};
