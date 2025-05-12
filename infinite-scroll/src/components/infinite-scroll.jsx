import { useState, useEffect } from "react";
import "./scroll.css";

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pages}&limit=6`
      );
      const data = await response.json();
      setImages((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Fetch API failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading
    ) {
      setPages((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [pages]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]); // Add isLoading as dependency

  return (
    <div>
      {images.map((image, index) => (
        <img
          className="infinite-scroll"
          key={index}
          src={image.download_url}
          alt={image.author} // Changed from title to author as picsum.photos uses author
          width={200}
          height={300}
        />
      ))}
      {isLoading && <h2>Loading images...</h2>}
    </div>
  );
};

export default InfiniteScroll;