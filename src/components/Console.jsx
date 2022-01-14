import React from "react";
import Header from './Header'

function Console(props) {
    return (
        <select className="ddbtn" name="cars" id="cars">
           <option value= {props.dditem} >PS5</option>
           <option value= {props.dditem} >PS5 digital</option>
           <option value= {props.dditem} >PS4</option>
           <option value= {props.dditem} >PS3</option>
           <option value= {props.dditem} >xbox 360</option>
           <option value= {props.dditem} >Nintendo switch</option>
        
      </select>

    );
}

export default Console;