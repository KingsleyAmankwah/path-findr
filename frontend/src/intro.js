import React from "react";
import "./App.css"; // Assuming you have a CSS file

export default function Intro() {
  const numCards = 8; // Number of card elements

  // Create an array of card elements
  const cards = Array.from({ length: numCards }, (_, index) => (
    <div key={index} className="card">
      <div className="card-text">Telling you that you’re involved in too many activities</div>
    </div>
  ));

  return (
    <div className="intro">
      <h4>Ever wondered answers to these questions?</h4>
      <div className="card-container">{cards}</div>
    </div>
  );
}
