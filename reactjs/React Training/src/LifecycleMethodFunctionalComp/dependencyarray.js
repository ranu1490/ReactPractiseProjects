import { useEffect, useState } from "react"
export function UseEffectcountdependency(){
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    //Similar to componentdidMount and componentDidUpdate
    useEffect(()=>{
        //Update the document title using the browser API
        document.title = `count1 ${count1} and count2 ${count2} times`;
    }, [count2]); //dependency array
    return(
        <div>
            <p>You clicked count1 {count1} times</p>
            <p>You clicked count2 {count2} times</p>
            <button onClick={()=>setCount1(count1 +1)}>Change count1</button>
            <button onClick={()=>setCount2(count2 +1)}>Change count2</button>
        </div>
    );
}