import React, { useEffect, useState } from 'react'

const ClockTime = () => {
   const [time,setTime] = useState(new Date());
   useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);

    return () =>{
      clearInterval(intervalId);
    }
   },[]);
  return (
    <div>
        <p className='lead'>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default ClockTime