import React from "react";
import Card from "./Card.js";
import data from "./data.js";



function Movable() {
  const dataObjToCard = data.map(personObj => {return <Card key={personObj.id} {...personObj}/>});
  return (
    <div className="dynamic-container">
      {dataObjToCard}
    </div>
 )
}

export default Movable;