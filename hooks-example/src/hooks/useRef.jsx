import { useRef } from "react"
import { useState } from "react"


const RefHook = () => {
    const [count , setCount ] = useState(0)

    const countRef = useRef(0)


    const handleState = () => {
        setCount(prev => prev + 1)
    }

    const handleRef  = () => {
       countRef.current += 1
    }


    return (
      <>
        <div>useState</div>
        <div >{count}</div>
        <button onClick={handleState}>state update</button>

        <div>useState</div>
        <div >{countRef.current}</div>
        <button onClick={handleRef}>Ref update</button>
        </>
    )
}


export default RefHook