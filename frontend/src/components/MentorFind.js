import React from 'react';
import '../styles/body.css'

const MentorFind = () => {
  return (
    <div className="clickthrough-card school-cards team-cards">
      <div>
        <img
          alt=""
          src="https://assets.website-files.com/5ee56ef342440844d0c728ef/5ee56ef34244087677c72ba9_HS_Noel-Higginbotham.jpg"
          className="scaleable-image drop-shadow-sml"
        />
      </div>
      <div className="name-label">
        <h4 className="centred normal-weight">Noel Higginbotham</h4>
      </div>
      <div>
        <h4 className="centred superscript-caps light">Director & Lecturer</h4>
      </div>
      <div>
        <a href="/school/engineering" className="label-master w-inline-block">
          <div>School of Engineering</div>
        </a>
      </div>
      <div>
        <a href="/team-member/noel-higginbotham" className="action-button wider coloured-text nomargin w-inline-block">
          <div>Meet Noel</div>
        </a>
      </div>
    </div>
  );
};

export default MentorFind;
