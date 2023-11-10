import React from "react";
import PersonalityComponent from "../components/MyPersonality";
import MentorFind from "../components/MentorFind";
import Navbar from "../components/Navbar";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

const componentStyle = {
  display: "inline-block",
  margin: "10px",
};

const AfterSurvey = () => {
  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={componentStyle}>
          <PersonalityComponent />
        </div>
        <div style={componentStyle}>
          <MentorFind />
        </div>
      </div>
    </div>
  );
};

export default AfterSurvey;
