import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); // Keep hover state as 0 instead of null
  const totalRating = 5;

  return (
    <div className="main-container">
      <div className="star-container">
        {[...Array(totalRating)].map((_, i) => {
          const currentRating = i + 1;
          return (
            <FaStar
              key={i}
              style={{
                color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                transition: "color 0.2s ease-in-out",
              }}
              onClick={() => setRating(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)} // Set hover to last selected rating
            />
          );
        })}
      </div>
      <div>
        <button onClick={() => alert("thanks for the rating ")}>submit </button>
        <button onClick={() => { setRating(0) ; 
           setHover(0)}}>reset</button>
      </div>
    </div>
  );
}

export default App;
