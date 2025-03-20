import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [page, setPage] = useState(1);
  const url = "https://dummyjson.com/products?limit=100";
  const { data, isLoading, error } = useFetch(url);

  const totalPages = data?.length ? Math.ceil(data.length / 10) : 0;

  const handlePagination = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setPage(selectedPage);
    }
  };

  const Pagination = () => {
    if (!totalPages) return null;
    return (
      <div className="pagination">
        <span 
          onClick={() => handlePagination(page - 1)} 
          className={page === 1 ? "disabled" : ""}
        >
          Prev
        </span>
        {[...Array(totalPages)].map((_, i) => (
          <span 
            key={i} 
            onClick={() => handlePagination(i + 1)} 
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </span>
        ))}
        <span 
          onClick={() => handlePagination(page + 1)} 
          className={page === totalPages ? "disabled" : ""}
        >
          Next
        </span>
      </div>
    );
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      {!isLoading ? (
        <div>
          {data?.slice(page * 10 - 10, page * 10).map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>{product.title}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Pagination />
    </>
  );
}

export default App;
