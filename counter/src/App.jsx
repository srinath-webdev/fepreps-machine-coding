import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev === 0 ? 0 : prev - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
     
      <h1>Counter </h1>

      <div>

        <h3>{count}</h3>

        <div>
          <button className='btns' onClick={increment}>increse</button>
          <button  className='btns' onClick={decrement}>decrease</button>
          <button  className='btns' onClick={reset}>reset</button>
        </div>
      </div>
    
    </>
  )
}

export default App
