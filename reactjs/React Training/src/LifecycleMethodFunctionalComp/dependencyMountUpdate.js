import { useEffect, useState } from "react"

export const DepMountUpdate = ()=>
{
    let [count,setCount] = useState(0);
    let [flag,setFlag] = useState(true);

    useEffect (()=>
    {
        console.log("Component did update");
    })

    useEffect (()=>
    {
        console.log("Component did mount");
    },[])

    useEffect (()=>
    {
        console.log("Dependency array");
    },[flag])

    return(
        <>
           
            Flag is {flag.toString()}<br/>
            <button onClick={()=>setFlag(!flag)}>Toggle Flag</button>
        </>
    )
}