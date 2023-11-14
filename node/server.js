// Import necessary libraries
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

// Serve static files from the root folder
app.use(express.static(path.join(__dirname)));

// Handle socket connections
io.on('connection', (socket) => {
    // Assign a unique user ID
    const userId = generateUserId();

    // Broadcast the user's connection to others
    socket.broadcast.emit('userConnected', userId);

    // Handle incoming messages
    socket.on('chat message', (data) => {
        console.log('Received message:', data); // Log the received message
        // Process and broadcast the message along with the sender's role
        // You can use userId to identify the sender
        io.emit('chat message', { userId, data: data, role: 'mentor' }); // Ensure 'data' property is present
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        // Broadcast the user's disconnection to others
        socket.broadcast.emit('userDisconnected', userId);
    });
});

// Generate a unique user ID
function generateUserId() {
    return Math.random().toString(36).substr(2, 9);
}

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
