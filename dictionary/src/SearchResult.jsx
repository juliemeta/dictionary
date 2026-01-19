import React from "react";
import "./SearchResult.css";

export default function SearchResult(props) {
  console.log(props.searchResult);

  if (props.searchResult) {
    return (
      <div className="SearchResult">
        <h2 className="keyword text-capitalize">
          📖 {props.searchResult.word} ⤵
        </h2>

        {props.searchResult.meanings?.map((meaning, index) => (
          <div key={index}>
            <div className="definitions-division shadow">
              <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
              <p className="definition">{meaning.definition}</p>
              {meaning.example && (
                <p className="example fst-italic">Example: {meaning.example}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    // Hvis der ikke er noget searchResult
    return (
      <div className="SearchResult">
        <p>Start med at søge efter et ord.</p>
      </div>
    );
  }
}
