import React from "react";
import "../App.css";
import mentor from "../images/mentor.png";

const MentorFind = () => {
  return (
    <div className="clickthrough-card school-cards team-cards">
      <div>
        <img alt="" src={mentor} className="scaleable-image drop-shadow-sml" />
      </div>
      <div className="name-label">
        <h4 className="centred normal-weight">John Doe</h4>
      </div>
      <div></div>
      <div>
        <a href="/school/engineering" className="label-master w-inline-block">
          <div>Specialty</div>
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="http://192.168.23.32:3000"
          className="action-button wider coloured-text nomargin w-inline-block"
          rel="noreferrer"
        >
          <div>Chat your Mentor</div>
        </a>
      </div>
    </div>
  );
};

export default MentorFind;
