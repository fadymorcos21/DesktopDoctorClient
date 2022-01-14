import React from "react";
import Header from './Header'




function Phone(props) {
    return (
        <select className="ddbtn" name="cars" id="cars">
           <option value= {props.dditem} >iPhone</option>
           <option value= {props.dditem} >Sumsung</option>
           <option value= {props.dditem} >Google Pixel</option>
           <option value= {props.dditem} >BlackBerry</option>
        
      </select>

    );
}

export default Phone;