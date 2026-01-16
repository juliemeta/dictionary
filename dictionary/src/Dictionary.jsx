import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert("Seaching");
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center">Dictionary</h1>
      <form className="search-form" onSubmit={search}>
        <input
          className="search-bar"
          type="search"
          placeholder="Please type your word here..."
        />
        <button className="btn search-button shadow">Search!</button>
      </form>
    </div>
  );
}
