import React from "react";
// import beyonce from "../assets/beyonce.jpg";

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="beyonce" />
      <input placeholder={props.placeholder} />
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
};

export default Card;
