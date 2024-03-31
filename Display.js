import React from "react";
import './Button.css'
const Display = ({dispalyvalue}) => {
    return (<>
            <div className=".calculator ">
            <input  type="text" placeholder=" Enter the number" value={dispalyvalue} readOnly/>
            </div>
        
    </>)
}

export default Display;