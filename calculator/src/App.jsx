import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input , setInput] = useState("");
  const [result , setResult] = useState("")

  const handleInput =(value) => {
   return setInput((prev) => prev + value)
  }
  
  const clearInput = () => {
    setInput("");
    setResult("")
  }

  const handleCalculation = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
      
      <h1>Calculator</h1>
      <div className="main-container">
        <input type='text' value={ input}  className='input-field'/>
      <div className='btn-container'>
      {["7","8","9","/","4","5","6","*","3","2","1","-",".",",","=","+"].map(( btn ,index) => {
          return <button key={index} className='btns' onClick={ () => {btn === "=" ? handleCalculation() : handleInput(btn)} }>
            {btn}
          </button>
        })}
      </div>
      <button className="clear-btn" onClick={clearInput}>
            Clear
          </button>
      <div>Result : {result}</div>
      </div>
     
    </>
  )
}

export default App
