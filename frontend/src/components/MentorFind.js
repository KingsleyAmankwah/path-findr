import React from "react";
import "../styles/body.css";
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
      <div>
        {/* <h4 className="centred superscript-caps light">Director & Lecturer</h4> */}
      </div>
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
        >
          <div>Chat your Mentor</div>
        </a>
      </div>
    </div>
  );
};

export default MentorFind;
