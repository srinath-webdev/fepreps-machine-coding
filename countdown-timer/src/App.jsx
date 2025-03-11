import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTimer from "./hooks/useTimer"
function App() {
   const [initialTime , setInitialTime] = useState(60)
  const {startTimer , pauseTimer ,resetTimer  , timeLeft } = useTimer(1,20,15)

   return (
    <>
     
      <h1>Vite + React</h1>

    <div className='main-container'>
      <div className='timer-sec'>
        <h1> Countdown timer</h1>
        <div>time left :{String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}</div>
         <div> 
        <button className='btns' onClick={startTimer}> start</button>
         <button className='btns' onClick={pauseTimer}> pause</button>
         <button className='btns' onClick={resetTimer}> reset</button>
         </div>

         <div>
          <input type="text" onChange={(e) => setInitialTime(Number(e.target.value))}/>
          <button onClick={() => resetTimer()}>update timer</button>
         </div>
      </div>
    </div>
      
     </>
  )
}

export default App
