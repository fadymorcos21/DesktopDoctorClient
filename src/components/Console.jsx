import React from "react";
import Header from './Header'

function Console(props) {
    return (
        <select className="ddbtn" name="cars" id="cars">
           <option value= {props.dditem} >PS5</option>
           <option value= {props.dditem} >PS5 Digital</option>
           <option value= {props.dditem} >PS4</option>
           <option value= {props.dditem} >PS3</option>
           <option value= {props.dditem} >PS3 Slim</option>

           <option value= {props.dditem} >XBOX 360</option>
           <option value= {props.dditem} >XBOX 360 Slim</option>
           <option value= {props.dditem} >XBOX Series X</option>
           <option value= {props.dditem} >XBOX One</option>



           <option value= {props.dditem} >Nintendo switch</option>
           <option value= {props.dditem} >Nintendo Wii U</option>
           <option value= {props.dditem} >Nintendo Wi</option>


        
      </select>

    );
}

export default Console;