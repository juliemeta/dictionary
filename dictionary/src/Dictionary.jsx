import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setSearchResult(response.data);
  }

  function search() {
    if (!keyword.trim()) return;
    let apiKey = "c2t7ea4432f52e0o6d402fd54c5bc269";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "WtfXQhN4zMNDB5wNhkpemrAxlLpHgLYQy1bnOyQ7HUtMy7H6QXpoJWs9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="text-center">Dictionary</h1>
        <h2 className="subheading text-center">
          Which word do you want to look up?
        </h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-bar shadow"
            type="search"
            onChange={handleKeywordChange}
            placeholder="Type keyword..."
          />
          <button className="btn search-button shadow">Search</button>
        </form>
        {searchResult && (
          <SearchResult searchResult={searchResult} keyword={keyword} />
        )}
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
