import React, { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("");

  const changeBackgroundColor = () => {
    //Generate a random color
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
    setColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="quote-box">
        <h2 className="quote-text" style={{ color }}>
          "I attribute my success to this: I never gave or took any excuse."
        </h2>
        <h4 className="author" style={{ color }}>
          -Florence Nightingale
        </h4>
        <div className="buttons">
          <button
            className="btn new-quote-button"
            onClick={changeBackgroundColor}
            style={{ backgroundColor }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
