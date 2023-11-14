$(function () {
  const socket = io();
  const form = $('#form');
  const input = $('#m');
  const messages = $('#messages');
  const userAvatar = 'avatar2.jpg'; // Set a default avatar path
  let targetUserId;
  let userRole;

  socket.emit('assign role', 'student');

  socket.on('chat message', function (msg) {
    const messageClass = msg.role === userRole ? 'sent' : 'received';
    const avatar = msg.role === 'mentor' ? 'avatar2.jpg' : userAvatar;

    const messageHTML = `
      <li class="${messageClass}">
        <img src="${avatar}" alt="Avatar" class="avatar">
        <div class="message-content">${msg.data}</div>
      </li>
    `;

    messages.append(messageHTML);
  });

  form.submit(function (e) {
    e.preventDefault();
    if (input.val()) {
      socket.emit('chat message', input.val(), targetUserId, userRole);
      input.val('');
    }
  });

  socket.on('set target user', (data) => {
    targetUserId = data.userId;
    userRole = data.role;
    console.log(`Target user ID set to: ${targetUserId}, User role set to: ${userRole}`);
  });
});
