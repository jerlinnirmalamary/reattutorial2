// import { useEffect, useState } from "react";

// function Timer(){
//     const [count,setCount]=useState(1);

//     useEffect(()=>{
//         console.log("Screen render");
//         checkCount()
//     },[count])    

//     function checkCount(){
//         if(count>10){
//             setCount(1); 
//         }
// }
//     function updateCount(){
//         setCount((previousState)=>{return previousState+1})
//     }   
//     return <><h1>I have rendered {count} timer!</h1>
//     <button onClick={updateCount}>Increase Count</button></>
// }
// export default Timer;



// 

import { useEffect, useState } from "react";

function Timer(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Screen render");
        // checkCount()
       
        setTimeout(()=>{
            setCount((previousState)=>{
            return previousState+1
            })
        },1000)
    })    

    function checkCount(){
        if(count>10){
            setCount(1); 
        }
}
    function updateCount(){
        setCount((previousState)=>{return previousState + 1})
    }   
    return <><h1>I have rendered {count} timer!</h1>
    <button onClick={updateCount}>Increase Count</button></>
}
export default Timer;