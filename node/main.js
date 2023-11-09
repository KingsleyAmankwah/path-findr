$(function () {
    const socket = io();
    const form = $('#form');
    const input = $('#m');
    const messages = $('#messages');
    let targetUserId; // Variable to store the target user ID

    // Listen for 'userList' event
    socket.on('userList', (userList) => {
        // Authenticate the user based on email
        const username = "user@example.com";  // Replace with actual email
        if (userList.includes(username)) {
            // Emit authentication event
            socket.emit('authenticate', { username });
        } else {
            // Handle authentication failure
            console.log("Authentication failed");
        }
    });

    // Listen for 'authenticated' event
    socket.on('authenticated', () => {
        console.log('Authenticated successfully');
        // Proceed with chat functionality
    });

    // Listen for 'authentication_failed' event
    socket.on('authentication_failed', () => {
        console.log('Authentication failed');
        // Handle authentication failure
    });

    // Listen for 'message' events (not 'chat message')
    socket.on('message', function (msg) {
        messages.append($('<li>').text(msg));
    });

    // Form submission handler
    form.submit(function (e) {
        e.preventDefault();
        if (input.val()) {
            // Emit 'message' event (not 'chat message') with the message string and target user ID
            socket.emit('message', input.val(), targetUserId);
            input.val('');
        }
    });

    // Listen for a message to set the target user ID
    socket.on('set target user', (userId) => {
        targetUserId = userId;
        console.log(`Target user ID set to: ${targetUserId}`);
    });
});
