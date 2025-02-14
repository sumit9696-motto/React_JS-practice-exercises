import React from "react";

const Button = (props) =>{
    return(
        
            <button onClick={props.onClick}
            className="btn"
            > {props.value ||"Click me"} </button>
            
    )
}
export default Button;