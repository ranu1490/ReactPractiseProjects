import { useEffect, useState } from "react"

export const UpdatePhaseFC = () =>
{
    let[count,setCount] = useState(0);
    useEffect(()=>{
        console.log('Initial count in useEffect: ',count);
        document.title = 'count : '+count;
        console.log('After count in useEffect: ',count);
    }) //,[] when we remove this it means component did update and it will execute whenever update is done

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