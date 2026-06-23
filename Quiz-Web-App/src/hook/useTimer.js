import React, { useEffect, useState } from 'react'

function useTimer(seconds) {
    let [time,setTime]=useState(seconds);


    useEffect(()=>{
        if(time === 0) return;
        let interval=setInterval(()=> setTime(prev => prev - 1),1000)
        return ()=> clearInterval(interval)
    },[time])
  return {time, reset:() => setTime(seconds)}
}

export default useTimer