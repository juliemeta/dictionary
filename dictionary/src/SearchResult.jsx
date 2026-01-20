import React from "react";
import "./SearchResult.css";

export default function SearchResult(props) {
  if (props.searchResult) {
    return (
      <div className="SearchResult">
        <h2 className="keyword-heading">
          Meaning of "<strong>{props.searchResult.word}</strong>" in English{" "}
          <span className="emoji">⤵</span>
        </h2>

        {props.searchResult.meanings?.map((meaning, index) => (
          <div key={index}>
            <div className="definitions-division shadow">
              <h3 className="keyword">{props.searchResult.word}</h3>
              <p className="part-of-speech fst-italic">
                {" "}
                {meaning.partOfSpeech}
              </p>
              <p className="definition">
                <strong>Definition</strong> <br />
                {meaning.definition}.
              </p>
              {meaning.example && (
                <p className="example fst-italic">
                  Example: "{meaning.example}."
                </p>
              )}

              {meaning.synonyms?.length > 0 && (
                <p className="synonyms">
                  <strong>
                    Synonyms <br />
                  </strong>{" "}
                  {meaning.synonyms.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="SearchResult">
        <p>Please type a word in the search bar above 🙂</p>
      </div>
    );
  }
}
