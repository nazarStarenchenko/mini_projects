import React from "react";

export default function Post(props) {
  console.log(props);
  return (
    <div className="post">
      <div className="img-container">
          <img src={props.imageUrl} alt="photo"/>
      </div>
      <div className="post-content">
        <div className="location">
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <p className="dates">{props.startDate} - {props.endDate}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}