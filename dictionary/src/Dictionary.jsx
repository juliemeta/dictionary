import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  // API response for dictionary
  function handleDictionaryResponse(response) {
    const data = response.data;
    setSearchResult(data);

    // only if meanings exist then search for photos
    if (data.meanings?.length > 0) {
      fetchPexelsPhotos(data.word);
    } else {
      // if no word then clear recent photos
      setPhotos(null);
    }
  }

  // Pexels API
  function fetchPexelsPhotos(word) {
    const pexelsApiKey =
      "WtfXQhN4zMNDB5wNhkpemrAxlLpHgLYQy1bnOyQ7HUtMy7H6QXpoJWs9";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;

    axios
      .get(`${pexelsApiUrl}`, {
        headers: {
          Authorization: `${pexelsApiKey}`,
        },
      })
      .then((response) => {
        setPhotos(response.data.photos);
      })
      .catch((error) => {
        console.error("Pexels API error:", error);
        setPhotos(null);
      });
  }

  // Dictionary search
  function search() {
    if (!keyword.trim()) return;
    const apiKey = "c2t7ea4432f52e0o6d402fd54c5bc269";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
        <>
          <SearchResult searchResult={searchResult} keyword={keyword} />
          {searchResult.meanings?.length > 0 && photos && (
            <Photos photos={photos} />
          )}
        </>
      )}
    </div>
  );
}
