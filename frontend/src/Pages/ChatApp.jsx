import React, { useState } from "react";
import "../styles/chat.css";

function ChatApp() {
  const [user, setUser] = useState({
    photoURL: "https://avatars.githubusercontent.com/u/107252455?v=4",
    uid: "1",
    isOnline: true,
  });
  const [messages, setMessages] = useState([
    {
      uid: "1",
      photoURL: "https://avatars.githubusercontent.com/u/107252455?v=4",
      text: "Hello, how are you?",
    },
    {
      uid: "2",
      photoURL: "https://avatars.githubusercontent.com/u/64941442?v=4",
      text: "I'm fine, thank you!",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add new message to the messages array
    setMessages([
      ...messages,
      {
        uid: "1",
        photoURL: "https://example.com/user.jpg",
        text: newMessage,
      },
    ]);

    setNewMessage("");
  };

  return (
    <div>
      <div className="header">
        <img src={user.photoURL} alt="User Avatar" />
        {/* <p>Last seen: {new Date().toLocaleTimeString()}</p> */}
        <p>Emmanuel Omari</p>
        <div
          className={`status-indicator ${user.isOnline ? "online" : "offline"}`}
        ></div>
      </div>
      <div className="chat">
        <div className="chat-history">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.uid === user.uid ? "you" : "other"
              }`}
            >
              <img src={message.photoURL} alt="Avatar" />
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="text-box">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Say something nice..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
