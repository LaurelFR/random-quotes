import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("");
  const [quote, setQuote] = useState(
    "I attribute my success to this: I never gave or took any excuse."
  );
  const [author, setAuthor] = useState("Florence Nightingale");

  const handleClick = () => {
    changeBackgroundColor();
    getQuote();
  };

  const handleResponse = (response) => {
    setQuote(response.data[0].content);
    setAuthor(response.data[0].author);
  };

  const getQuote = () => {
    let apiUrl = "https://api.quotable.io/quotes/random";
    axios.get(apiUrl).then(handleResponse);
  };

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
          "{quote}"
        </h2>
        <h4 className="author" style={{ color }}>
          -{author}
        </h4>
        <div className="buttons">
          <button
            className="btn new-quote-button"
            onClick={handleClick}
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
