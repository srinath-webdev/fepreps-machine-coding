import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
 
  const url = "https://dummyjson.com/products?limit=100";
  
  const {data , isLoading , error } = useFetch(url)
  
  const [pages , setPages ] = useState(1)

  const maxPages =  data &&  Math.ceil(data?.length / 10) 
  console.log("data" ,  data ,maxPages)

const handlePageCick = (selectedPage) => {
 if(selectedPage >= 1 && selectedPage <= maxPages){
  setPages(selectedPage)
 }
}


  const Pagination = () => {
    return <div  className="pagination">
      <span  onClick={() => handlePageCick(pages - 1)} className={pages === 1 ? "disable" : ""}>Previous</span>
      {[...Array(maxPages)].map((_ , i)=> {
        return <span key={i} className={pages === i + 1 ? "active" : ""} onClick={() => handlePageCick(i+1)}> {i + 1}</span>
      })}

<span className={pages === maxPages ? "disable" : ""} onClick={() => handlePageCick(pages + 1)}>Next</span>
    </div>
  }

  
  return (
    <>
       { data?.slice(pages * 10 - 10 , pages * 10).map((product ) => {
       return <div key={product.id}>
          <img src={product.thumbnail} alt={product.title}/>
          <div>{product.title}</div>
        </div>
      })}
      <Pagination />
    </>
  );
}

export default App;
