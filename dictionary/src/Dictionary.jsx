import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center">Dictionary</h1>
      <h2 className="text-center">Which word do you want to look up?</h2>
      <form className="search-form" onSubmit={search}>
        <input
          className="search-bar"
          type="search"
          onChange={handleKeywordChange}
          placeholder="Please type your word here..."
        />
        <button className="btn search-button shadow">Search!</button>
      </form>
    </div>
  );
}
