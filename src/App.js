import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="quote-box">
        <h2 className="quote-text">
          "I attribute my success to this: I never gave or took any excuse."
        </h2>
        <h4 className="author">-Florence Nightingale</h4>
        <div className="buttons">
          <button className="btn new-quote-button">New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
