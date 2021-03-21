import React, {useContext, useState, useEffect} from "react"
import {QuizContext} from "../Context/QuizContext"

const TopProgressBar = (props)=>{
    const {count} = useContext(QuizContext);
    console.log("count=",count)

    let [progressPercentage, setProgressPercentage] = useState(0);
    const calculateProgress = ()=>{
        const percentage = ((count+1)/20)*100;
        setProgressPercentage(percentage);
        console.log(percentage)
    }

    useEffect(() => {
      calculateProgress();
    }, [count]);

    console.log("%",progressPercentage)

    return (
        <div id="progress-bar" style={{width:`${progressPercentage}%`}}>
            <div id="progress-percent"></div>
        </div>
    )

} 



export default TopProgressBar