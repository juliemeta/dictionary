import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">
        <div>~ Coded by Julie M. Jeffries ~</div>
        <div>
          Project is open-sourced on{" "}
          <a href="https://github.com/juliemeta/dictionary">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
