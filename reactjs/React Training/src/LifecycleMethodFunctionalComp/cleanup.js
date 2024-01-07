import { useEffect, useState } from "react"

//whenever flag is changed the clean up will clean the interval and it will start from the beginning.
export const CleanUp =()=>
{
    let[flag,setFlag] = useState(false);
    useEffect(()=>{
        //effect
        console.log('Effect is called');
        let Ineterval = setInterval(()=>console.log('I am Interval'),1000);
        setTimeout(()=>setFlag(true),1000)
        return ()=>{
            //clean up
            console.log('Clean up is called');
            clearInterval(Ineterval);
        } 
    },[flag]); //dependency array

    return(
        <>
           
            Flag is {flag.toString()}<br/>
            <button onClick={()=>setFlag(!flag)}>Toggle Flag</button>
        </>
    )
}