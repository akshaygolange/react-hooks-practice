import { useRef,useLayoutEffect } from "react";

function Test(){

    const divRef =useRef();
    useLayoutEffect(()=>{
        console.log("width->>>" ,divRef.current.offsetWidth);
        
    },[])
    return(
        <div ref={divRef}>
            Hello react
        </div>

    )
}

export default Test;