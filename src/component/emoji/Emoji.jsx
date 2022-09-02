import React from "react";
import "./Emoji.css";

const Emoji = (props) => {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>{props.description}</dd>
        </div>
      </dl>
    </div>
  );
};

export default Emoji;
