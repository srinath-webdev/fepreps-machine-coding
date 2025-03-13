import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [selectedOption , setSelectedOption] = useState("")
  const options = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'next', label: 'Next.js' }
  ];


  const handleChange =(e) =>  {
    setSelectedOption(e.target.value)
  } 

  return (
    <>
      <div>
     <h2> Simple react dropdown </h2>

     <select value={selectedOption} onChange={handleChange}>
     <option value="">Select...</option>
   { options.map((option , index) => {
    return   <option key={option.index}> { option.label}</option>
   })}
     </select>
    <div> selected value : {selectedOption}</div>
      </div>
     
    </>
  )
}

export default App
