import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <span>
        <strong>Definition: {props.meaning.definition}</strong> <br />
        <em>{props.meaning.example}</em>
        <br />
      </span>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
