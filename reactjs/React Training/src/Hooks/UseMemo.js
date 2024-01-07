import { useMemo, useState } from "react";

const showPower = (num) => {
    console.log("Show Power is called",num);
    return 10 ** num;
}

const displayMsg = (mesg) =>{
    console.log(`Message in displaying is ${mesg}`);
    return mesg;
}

export const UseMemo = ()=>{
    let [no,setNo] = useState(0);
    let [flag,setFlag]=useState(true);
    const msg = 'God is Almighty';
    const changeNo=()=>{
        if(no<3)
        {
            setNo(no+1)
        }
    }
    const ToggleFlag = () =>{
        // console.log('Flag before',flag);
        setFlag(!flag)
        // console.log('Flag after',flag);

    }
    const power = useMemo(()=>showPower(no),[no]); //call showpower only when no is changed 
    //const recMsg = useMemo(()=> displayMsg(msg),[msg]);
    const recMsg = displayMsg(msg);
    return(
        <div>
            <button onClick={changeNo}>Change No</button><br/>
            <button onClick={ToggleFlag}>Toggle Flag</button><br/>
            Power is: {power}<br/>
            Message is: {recMsg}
        </div>
    )
}