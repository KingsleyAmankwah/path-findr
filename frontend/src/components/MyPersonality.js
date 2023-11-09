import React from 'react';
import '../styles/body.css'

const PersonalityComponent = () => {
  return (
    <div className="meet-team-member-right">
      <div>
        <div>
          <div className="allcaps-sml red-emphasis-text" 
          style={{marginTop: 20, marginLeft:65}}
          >You can expect</div>
        </div>
        <div className="_80-width-header"
         style={{marginTop: 20, marginLeft:65}}
        >
          <h2>Intimate, practical learning from real-world experts.</h2>
        </div>
        <p className="gibson-paragraph"
         style={{marginTop: 20, marginLeft:65}}
        >
          A no-nonsense approach to learning with smaller classes, hand-picked subjects to get you job-ready for when it's time to graduate.
        </p>
        
      </div>
    </div>
  );
};

export default PersonalityComponent;
