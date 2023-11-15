import React from "react";
import "../App.css";

const PersonalityComponent = () => {
  const params = new URLSearchParams(window.location.search);
  return (
    <div className="meet-team-member-right">
      <div>
        <h1 className="text-lg">Top Recommendations</h1>
      </div>

      <div className="tracking-wide text-sm text-dark-500 font-semibold">
        <p></p>
        <ul>
          <li className="text-center">{params.get("data")}</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalityComponent;
