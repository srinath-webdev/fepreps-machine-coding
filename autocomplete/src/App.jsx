import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {

  const [input, setInput] = useState("");

  const [debounceInput, setDebounceInput] = useState("")

  const [showResult, setShowResult] = useState(false);

  const url = `https://dummyjson.com/recipes/search?q=${debounceInput}`
  const data = useFetch(url)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceInput(input)

    }, 400)

    return () => clearTimeout(timer)
  })


  return (
    <>
      <div className='main-container'>
        <input className='input-field' value={input} onBlur={() => setTimeout(() => setShowResult(false), 200)} onFocus={() => setShowResult(true)} onChange={(e) => setInput(e.target.value)} />
        {showResult && <div className='result-area'>
          {data?.recipes?.map((item) => {
            return <ul className='result'>
              <li key={item.id} onClick={() => {
                setInput(item.name);
                setShowResult(false);
              }}
              > {item.name} </li>
            </ul>
          })}
        </div>}
      </div>
    </>
  )
}

export default App
