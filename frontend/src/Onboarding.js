import React, { useEffect, useState } from "react";
import "./App.css"; // CSS file for styling

export default function RotatingCircle() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add an event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the rotation angle based on the scroll position
  const rotationAngle = scrollPosition;

  // Calculate the position of scrolling information based on the scroll position
  const infoPosition = scrollPosition;

  return (
    <div className="rotating-circle" style={{ transform: `rotate(${rotationAngle}deg)` }}>
      <div className="scrolling-info" style={{ top: `${infoPosition}px` }}>
        <div className="info-box">Information 1</div>
        <div className="info-box">Information 2</div>
      </div>
    </div>
  );
}
