
import "./tabs.css"

export const Profile = ({data ,setData ,error}) => {
    return <div className="profile">
     <div> <label>Name :</label>
     <input type="text" value={data?.name} onChange={(e) => setData( prev => ({...prev ,name :  e.target.value}))}/> 
     {error.name && <span className="error">{error.name}</span>}</div>
     <div> <label>Age :</label>
     <input type="number" value={data.age} onChange={(e) => setData( prev => ({...prev ,age :  e.target.value}))}/>
     {error.age && <span className="error">{error.age}</span>}</div>
     <div>  <label>email :</label>
     <input type="text" value={data.email} onChange={(e) => setData( prev => ({...prev ,email :  e.target.value}))}/>
     {error.email && <span className="error">{error.email}</span>}</div>
    </div>
}