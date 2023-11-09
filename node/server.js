// Import necessary libraries
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const axios = require('axios'); // Add axios for making HTTP requests
const path = require('path'); // Import the path module

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

// Initialize the users object
const users = {};

// Serve static files from the root folder
app.use(express.static(path.join(__dirname)));

// Fetch list of users and mentors from Java backend
const fetchUsersFromJavaBackend = async () => {
    try {
        const response = await axios.get('http://java-backend-url/get-users');
        return response.data; // Assuming the data is an array of emails
    } catch (error) {
        console.error('Error fetching users from Java backend:', error.message);
        return [];
    }
};

// Handle socket connections
io.on('connection', async (socket) => {
    // Assign a unique user ID
    const userId = generateUserId();

    // Add the user to the users object
    users[userId] = {
        socketId: socket.id,
        // Add any other relevant user information
    };

    // Emit the list of users and mentors to the client for authentication
    const usersAndMentors = await fetchUsersFromJavaBackend();
    socket.emit('userList', usersAndMentors);

    // Broadcast the user's connection to others
    socket.broadcast.emit('userConnected', userId);

    // Handle incoming messages
    socket.on('message', (data) => {
        // Process and broadcast the message
        // You can use userId to identify the sender
        io.emit('message', { userId, data });
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        // Remove the user from the users object
        delete users[userId];

        // Broadcast the user's disconnection to others
        socket.broadcast.emit('userDisconnected', userId);
    });
});

// Generate a unique user ID
function generateUserId() {
    //  logic for generating user IDs
    return Math.random().toString(36).substr(2, 9);
}

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
