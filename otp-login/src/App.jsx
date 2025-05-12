import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {

  const OTP_DIGITS = 5 ;
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""))

  const inputRef = useRef([])

  useEffect(() => {
     inputRef.current[0]?.focus()
  } , [])


  const handleChanges = (val , index) => {

    if (isNaN(val)) return ;

    const newArr =  [...inputArr]
    const newValue = val.trim()
    newArr[index] = newValue.slice(-1)
    
    setInputArr( newArr)

    newValue && inputRef.current[index + 1]?.focus()
  }

  const hadleDownChange = (e , index) =>{
    // console.log(e)

    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[i - 1]?.focus()
    }
  }

  return (
    <>
      <div>
        <div>OTP LOGIN</div>
      {
        inputArr.map((item , index) => (
        <input className='input'

        ref={ input  => inputRef.current[index] = input}
         key={index}
         onChange={e => handleChanges(e.target.value , index)}
         value={inputArr[index]} 
         onKeyDown={e => hadleDownChange(e , index)}
         /> 
        
        ))
      }
     </div>
    </>
  )
}

export default App
