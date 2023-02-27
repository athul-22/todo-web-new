import React from "react";

export default function ToggleDark(props){
    return(
        <div className="wrapper">
            
            <input
            type="checkbox"
            id="checkbox-toggle"
            onClick={()=>{
                props.toggleDark();
            }}
            />
            
        </div>
    )
}