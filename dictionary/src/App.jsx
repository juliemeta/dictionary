import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow">
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">
        <div>This project was coded by Julie M. Jeffries</div>
        <div>
          and is{" "}
          <a href="https://github.com/juliemeta/dictionary">
            open-sourced on GitHub
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
