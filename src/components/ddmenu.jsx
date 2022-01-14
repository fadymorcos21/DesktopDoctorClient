import React from "react";
import Header from './Header'

function Ddmenu(props) {
    return (
           <option value= {props.dditem} >{props.dditem}</option>
 

    );
}

export default Ddmenu;