import { useState, useEffect } from "react";
import "./corousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId;

  const images = [
    "https://picsum.photos/seed/img1/600/400",
    "https://picsum.photos/seed/img2/600/400",
    "https://picsum.photos/seed/img3/600/400",
    "https://picsum.photos/seed/img4/600/400",
  ];

  // Function to start autoplay
  const startPlay = () => {
    intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
     return () => clearInterval(intervalId); // Cleanup interval on unmount
  };

  // useEffect for autoplay
  useEffect(() => {
   startPlay();
  }, []);


  const prevImg = () => {
    
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    startPlay(); // Restart autoplay
    clearInterval(intervalId); // Stop previous interval
  };


  const nextImg = () => {
    
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    startPlay(); // Restart autoplay
    clearInterval(intervalId); // Stop previous interval
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image fade"
        />
      </div>
      <button className="prev-btn" onClick={prevImg}>
        ◀
      </button>
      <button className="next-btn" onClick={nextImg}>
        ▶
      </button>
    </div>
  );
};

export default Carousel;
