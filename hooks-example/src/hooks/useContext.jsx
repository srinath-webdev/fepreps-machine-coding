import { useContext } from "react"
import { ThemeContext } from "./themeContext"



export const ChildrenComp = () => {

const {theme , toggleTheme} = useContext(ThemeContext)

return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
        <p>{theme}</p>
        <button onClick={toggleTheme}>toggle</button>
    </div>
)

}