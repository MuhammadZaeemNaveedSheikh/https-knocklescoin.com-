import React from "react";

const Card = ({tag, heading, line1, line2, line3}) => {
  return (
    <div className="card">
      <span>{tag}</span>
      <h2>{heading}</h2>
      <p>{line1}</p>
      <p>{line2}</p>
      <p>{line3}</p>
    </div>
  );
};

export default Card;
