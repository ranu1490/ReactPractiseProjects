import { useCallback, useState } from "react";

import MegaBoost from "./MegaBoost";

export default function UseCallbackDemo()
{
    const [count,setCount] = useState(0);

    //without useCallback following function is used
   /*const handleMegaBoost = ()=>{
        console.log('Handle click is called');
        setCount(currentval=>currentval+1234);
    }*/

      const handleMegaBoost = useCallback(()=>{
        console.log('Handle click is called');
        setCount(currentval=>currentval + 1234);
     },[])
     
    return (
        <>
         Count: {count}
         <button
            onClick={() => {
                setCount(count + 1)
            }}>
                Click me!
            </button>
            <MegaBoost handleClick={handleMegaBoost}/>
        </>
    )
}