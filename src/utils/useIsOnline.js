import { useState,useEffect } from "react";
export const useIsOnline=()=>{
const [isOnline,setisOnline]=useState(true);
useEffect(()=>{
    const handleonline=()=>{ setisOnline(true);} 
    const handleoffline=()=>{setisOnline(false); }
    window.addEventListener("online",handleonline);
    window.addEventListener("offline",handleoffline)
    return()=>
        {window.removeEventListener("online",handleonline);
        window.removeEventListener("offline",handleoffline);}     //always a good practice to remove your event listeners
    
},[])  //Note-Since dependency array is given tho empty so it'll called only once during initial render so new eventListeners will not be created but still its a good practice to remove em!!

return isOnline;
}