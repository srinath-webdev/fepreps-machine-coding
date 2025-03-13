import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfiniteScroll from './components/infinite-scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      <h2>Infinite Scroll</h2>
      <InfiniteScroll/>
      </div>
      
    </>
  )
}

export default App
