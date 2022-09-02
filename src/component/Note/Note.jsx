import React from "react";
import "./Note.css";

const note = (props) => {
  return (
    <div>
      <div className="notediv">
        <h1 className="note">{props.title}</h1>
        <p className="notepara">{props.content}</p>
      </div>
    </div>
  );
};

export default note;
