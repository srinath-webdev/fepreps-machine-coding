

import { useState } from "react"
import { Intrest } from "./intrest"
import { Profile } from "./profile"
import { Settings } from "./settings"
import "./tabs.css"


export const TabForm = () => {

    const [activeTab , setActiveTab] = useState(0)

    const [data , setData] = useState({
        name : "srinath" ,
        age  : 29 , 
        email : "test.com", 
        intrest : ["coding" , "music" , "dance"],
        theme: "dark"
    })

    const [error , setError] =useState({})
    const tabConfig = [
        {
            name : "profile" , 
            component: <Profile data={data} setData={setData} error={error}/>,
            validate : () => {
            const err = {} 
             if (!data.name || data.name.length < 2 ){
                err.name = "name should greater than two value"
             }
             if ( data.age < 18 ){
                err.age = "Age should greater than 18"
             }
             if (!data.email || data.email < 2 ){
                err.email = "email should greater than two value"
             }

             setError(err)
             return err.name || err.age || err.email ? false : true
            }

        } , 

        {
            name : "instrest" , 
            component: <Intrest data={data} setData={setData} error={error}/>,
            validate : () => {
               const  err = {}
                if(data.intrest.length < 1 ){
                    err.intrest = "atleast select one"
                }
                setError(err)
                return err.intrest ? false :true
            }
        },
        {
            name : "setting" , 
            component: <Settings data={data} setData={setData}/>,
            validate : () => {
                return true
            }
        }

    ]
const handlePrevCta = () => {
    if(tabConfig[activeTab].validate()){
        setActiveTab((prev) => prev -1 )
}
    }
    

const handleNextCta = () => {
    if(tabConfig[activeTab].validate()){
    setActiveTab((prev) => prev + 1 )
    }
}

const handleSubmitCta = () => {
    console.log(data)
}


    return <div>
         <div  className="tab-container">
        {
            tabConfig.map((tab , i ) => ( 
                 <div  key={i}  onClick={() => {
                    if(tabConfig[activeTab].validate()){

                        setActiveTab(i)
                    }
                 }} className="tabs" >
                    {tab.name}
                </div>
            ))
        }
       
        </div>
        <div className="tab-body">
        {tabConfig[activeTab].component}
        </div>

    <div>
   {activeTab > 0 && <button onClick={handlePrevCta}>previous</button> }
   {activeTab < tabConfig.length -1 && <button onClick={handleNextCta}>next </button> }
    {activeTab === tabConfig.length -1 && <button onClick={handleSubmitCta}>submit </button>}
    </div>
    </div>
}