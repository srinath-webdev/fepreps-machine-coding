import { useState ,useEffect  } from "react"


const useFetch = (url) => {
    
    const [data , setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(url)
    
                const result = await res.json()
    
                setData(result)

            }
            catch(error){
                console.log(error)
                
            }
        }
        fetchData()
    } ,[ url])

 return data 
}

export default useFetch