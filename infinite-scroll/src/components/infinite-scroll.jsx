import { useState , useEffect } from "react";
import "./scroll.css"

const InfiniteScroll = () => {

   const [images , setImages] = useState([])  ;

   const [pages , setPages ] = useState(1) ; 

   const [isLoading  , setIsLoading] = useState(false)


   useEffect(() => {
    fetchImages() ;
    window.addEventListener("scroll" , handleScroll)
    return () => window.removeEventListener("scroll" , handleScroll)
},[pages])

   const fetchImages = () => {
    try {
        setIsLoading(true)
       
        setTimeout(async() => {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pages}&limit=6`)

            const data = await response.json()
    
            setImages((prev) => [...prev , ...data])
        } , 1500)

       
    }
    catch(error){
        console.error("Fetch API failed:", error)
    }
    setIsLoading(false);
   }

   const handleScroll = () => {
    window.innerHeight + window.scrollY >= document.body.offsetHeight -100  && setPages((prev) => prev +1)

   }

   console.log(isLoading , "imags")

   return (
  
    <div >
     {isLoading ? <h2>Loading images...</h2> : null} 
     {images.map((image , index) => (
            <img  className="infinite-scroll"  key={index} src={image.download_url} alt={image.title} width={200} height={300} />
        ))}
    </div>
   )

}


export default InfiniteScroll