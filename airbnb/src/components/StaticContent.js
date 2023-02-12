import React from "react";
import photo from "../static/airbnb.png";

function StaticContent() {
  return (
    <div className="static">
      <div className="img-container">
        <img src={photo} alt="airbnb panel}" />
      </div>

      <div className="text-container">
        <h2>
          Online Experiences
        </h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  )
}

export default StaticContent;