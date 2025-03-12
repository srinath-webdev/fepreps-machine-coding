import { useState , useEffect } from "react";

const useFetch = (url ) => {

    const [data , setData ] = useState({}) ; 

    const [loading , setLoading] = useState(true); 

   useEffect( () => {
   
    const fetchData = async() => {
        try {

            setLoading(false)

            const response =  await fetch(url ); 

            const result = await response.json()
        
            setData(result)
        
           
        
        }
        catch(error) {
            throw new  Error("error while fetching")

        }
        finally{
            setLoading(false)
        }

    }
    
    fetchData() ;
    
    }, [url])

  

   return { data ,  loading}
}

export default useFetch