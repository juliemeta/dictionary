import React from "react";
import "./SearchResult.css";

export default function SearchResult(props) {
  if (!props.searchResult) {
    // if no searchResult
    return null;
  }

  // if no meanings ("null") or meanings is empty
  if (
    !props.searchResult.meanings ||
    props.searchResult.meanings.length === 0
  ) {
    return (
      <div className="SearchResult">
        <p className="error-message text-center">
          Did you make a typo? <br /> Please try again. 😁
        </p>
      </div>
    );
  } else {
    // if meanings exist
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
              <p className="phonetics">/{props.searchResult.phonetic}/</p>
              <p className="part-of-speech fst-italic">
                {" "}
                {meaning.partOfSpeech}
              </p>

              <p className="definition">
                <strong>Definition</strong> <br />
                {meaning.definition}.
              </p>
              {meaning.example && (
                <p className="example fst-italic">👉 "{meaning.example}".</p>
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
  }
}
