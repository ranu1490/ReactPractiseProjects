import { useEffect, useState } from "react"

export const MountPhaseFC = () =>
{
    let[count,setCount] = useState(0);
    useEffect(()=>{
        console.log('Initial count in useEffect: ',count);
        document.title = 'count : '+count;
        console.log('After count in useEffect: ',count);
    }, []) //,[] this means component did mount and it will execute only once 

    const Increment =()=>{
        console.log('Initial count in Increment: ',count);
        setCount(count+1);
        console.log('After count in Increment: ',count);
    }
    return(
        <div>
            count is: {count} <br/>
            <button onClick={Increment}>Increase Count</button>
        </div>
    )
}