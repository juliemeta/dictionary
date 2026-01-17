import React from "react";
import "./SearchResult.css";

export default function SearchResult(props) {
  console.log(props.searchResult);
  if (props.searchResult) {
    return (
      <div className="SearchResult">
        <h2>{props.searchResult.word}</h2>
        <p>{props.searchResult.meanings[0].definition}</p>
      </div>
    );
  } else {
    return null;
  }
}

//{props.searchResult.meanings[0].definitions.map(function (
//definition,
//index
//) {
//  return <p key={index}>{definition.definition}</p>;
// })}
