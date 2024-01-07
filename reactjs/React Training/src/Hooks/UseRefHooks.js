import { useRef, useState } from "react";

export default function UseRefCountHooks()
{
    const[count,setCount] = useState(1);
    const ref = useRef(1);
    const incCount =()=>setCount(c=>c+1);
    const incRef = () => ref.current++;
    return(
        <div className = "App">
            <button onClick={incCount}>count: {count}</button>
            <hr/>
            <button onClick={incRef}>ref.current: {ref.current}</button>
        </div>
    );
}