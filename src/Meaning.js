import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        Definition: {props.meaning.definition} <br />
        Example: {props.meaning.example}
      </p>
    </div>
  );
}
