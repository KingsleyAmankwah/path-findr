import React from 'react';
import PersonalityComponent from '../components/MyPersonality';
import MentorFind from '../components/MentorFind';
import Navbar from '../components/Navbar';

const containerStyle = {
  display: 'flex',           // Use a flex container
  justifyContent: 'center',  // Center the items horizontally
};

const componentStyle = {
  display: 'inline-block',   // Set the components to inline-block
  margin: '10px',            // Add some spacing between components
};

const AfterSurvey = () => {
  return (
    <div>
        <Navbar/>
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
