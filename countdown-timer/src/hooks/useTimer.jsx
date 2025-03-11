import { useState } from "react";
import { useEffect } from "react"


 const useTimer = (hrs , min , sec ) => {

    const [timeLeft , setTimeLeft] = useState(
        {
            hours : hrs ,
            minutes : min ,
            seconds : sec
        }
    );

    const [isRunning , setIsRunning ] = useState(false) ;

    const [initialTime] = useState({ hours: hrs, minutes: min, seconds: sec });

    useEffect (() => {

        if (!isRunning || timeLeft<=0  ) return 
        if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
            setIsRunning(false);
            return;
          }


        const timer  = setInterval(() => {
            setTimeLeft((prev ) =>{

                let {hours , minutes , seconds }  = prev
                if (seconds > 0 ){
                    seconds -- 
                }
                else if (minutes > 0 ){
                    minutes --
                    seconds = 59
                   
                    
                }
                else if(hours > 0){
                    hours--
                    minutes = 59
                    seconds = 59
                }

                return { hours, minutes, seconds };
            })
            
        } , 1000)

        return () => clearInterval(timer)
    } ,[isRunning , timeLeft])

    const startTimer = () => setIsRunning(true)
    const pauseTimer = () => setIsRunning(false)

    const resetTimer = () => {
        setIsRunning(false)
        setTimeLeft(initialTime)
    }

    return {startTimer , pauseTimer ,resetTimer ,  isRunning , timeLeft}
 }

 export default useTimer