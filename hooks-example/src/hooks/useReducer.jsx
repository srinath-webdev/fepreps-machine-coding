//this hook is for complex stae management 

import { useReducer } from "react"




export const Reducer = () => {
    const initialVal = 0 ;
    const countReducer = (state , action ) =>{
        switch(action.type){
            case "INCREMENT" : {
                return  state + 1
            }
            case "DECREMENT" : {
                return  state - 1
            }
            case "RESET" : {
                return 0
            }

            default: 
            return state 
        }
    }


    const [count , dispatch ] = useReducer(countReducer , initialVal)


    return (
        <>

        <div>{count}</div>

        <button onClick={() => dispatch({type : "INCREMENT"})}>ADD</button>
        <button onClick={() => dispatch({type : "DECREMENT"})}>SUB</button>
        <button onClick={() => dispatch({type : "RESET"})}>RESET</button>
        
        </>
    )

}
