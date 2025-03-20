import {createContext ,  useState } from 'react'

import './App.css'


export   const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => setTheme((prev)=> prev === "dark" ? "light" : "dark" )

  return (
   <ThemeContext.Provider value={{theme , toggleTheme}}>
      <div className='App' id={theme}> 
      {/* main thing is id based on id only we need to change color */}
        <div className='switch'>
          <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <button
            onClick={toggleTheme}
            className={`switch-button ${
              theme === 'dark' ? 'switch-button-on' : ''
            }`}
          >
            <span className='slider'></span>
          </button>
        </div>
      </div>
    
    </ ThemeContext.Provider>
  )
}

export default App
