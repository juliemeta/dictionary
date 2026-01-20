import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [searchResult, setSearchResult] = useState(null);

  function handleResponse(response) {
    setSearchResult(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "c2t7ea4432f52e0o6d402fd54c5bc269";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center">Dictionary</h1>
      <h2 className="subheading text-center">
        Which word do you want to look up?
      </h2>
      <form className="search-form" onSubmit={search}>
        <input
          className="search-bar shadow"
          type="search"
          onChange={handleKeywordChange}
          placeholder="Type keyword..."
        />
        <button className="btn search-button shadow">Search!</button>
      </form>
      {searchResult && <SearchResult searchResult={searchResult} />}
    </div>
  );
}
