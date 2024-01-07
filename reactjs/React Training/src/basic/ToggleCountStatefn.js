import {useState} from 'react'

export const ToggleCountStatefn =()=>{
    console.log("Rendering Again");
    let[count,setCount] = useState(0);
    const Increment = ()=>
    {
        setCount(count+1);
    }

    return (
        <div>
            count is: {count}<br/>
            <button onClick={Increment}>Increase Counter</button>
        </div>
    )
}
