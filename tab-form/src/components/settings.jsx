export const Settings = ({data ,setData}) => {

    const {theme} = data ;

    const handleDataChange = (e) => {
        setData((prev) => (
            {
                ...prev , 
                theme : e.target.name

            }
        ))
    }
     return <div>
      <div> <label>dark :</label>
      <input type="radio"  name="dark" checked={theme === "dark" } onChange={handleDataChange} /></div>
      <div> <label>light :</label>
      <input type="radio"  name="light" checked={theme === "light"} onChange={handleDataChange}/></div>
    </div>
}