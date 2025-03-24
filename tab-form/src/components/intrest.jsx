export const Intrest = ({data , setData , error }) => {

    const {intrest } = data 

    const handleDataChange = (e) => {
        setData( (prev) => (
            {
                ...prev , 
                intrest :  e.target.checked ? 
                [...prev.intrest, e.target.name] :  // to add checked value in array 
                prev.intrest.filter((i) => i !== e.target.name) // to remove unchecked value 
            }
        ))
    }

    console.log("inresdf" , intrest)

    return <div>
     <div> <label>coding :</label>
     <input type="checkbox"  name="coding"  checked={intrest.includes("coding")} onChange={handleDataChange} /></div>
     <div> <label>music :</label>
     <input type="checkbox"  name="music"  checked={intrest.includes("music")} onChange={handleDataChange}/></div>
     <div> <label>dance :</label>
     <input type="checkbox"  name="dance" checked={intrest.includes("dance")} onChange={handleDataChange}/></div>
     {error.intrest && <div className="error">{error.intrest}</div>}
    </div>

}