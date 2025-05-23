import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error ,  setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true)
        try{
         
                const res = await fetch(url);
                const result = await res.json() ;
                setData(result?.products)
            }
        
        catch(error){
            console.log(error)
            setError(error)
        }
        finally{
            setIsLoading(false)
        }

       
    }
    fetchData()


    } , [url])

  return { data  , isLoading  , error}
}


export default useFetch