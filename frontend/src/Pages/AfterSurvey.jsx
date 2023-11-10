import React from "react";
import PersonalityComponent from "../components/MyPersonality";
import MentorFind from "../components/MentorFind";

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
      <div style={containerStyle} className="grid grid-cols-1 md:grid-cols-2">
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