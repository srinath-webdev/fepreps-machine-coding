
import './App.css'
import RefHook from './hooks/useRef'
import { ChildrenComp } from './hooks/useContext'
import { Reducer } from './hooks/useReducer'

function App() {
 

  return (
    <>
    <p>usRef Exmaple 
    </p>
   <RefHook />

   <br />


   <p>useContext Exmaple 
   </p>
   <ChildrenComp/>


   <p>useReducer Exmaple 
   </p>
      
      <Reducer/>
    </>
  )
}

export default App
