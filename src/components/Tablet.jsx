import React from "react";
import Header from './Header'

// const consoles = ["Ps5 digital", "Ps5", "Xbox One", "xBox 360", "Ps4", "Nintendo Switch"];
// const tablets = ["iPad", "Google Tablet", "Samsung Tablet", "Asus Tablet", "HTC Tablet", "Phone Tablet"];
// const phones = ["iPhone", "Samsung", "OnePlus", "Google Pixel", "BlackBerry"];
// const pcs = ["IMac", "Macbook pro", "Macbook air", "Dell", "Toshiba"];

function Tablet(props) {
    return (
        <select className="ddbtn" name="cars" id="cars">
           <option value= {props.dditem} >iPad</option>
           <option value= {props.dditem} >Google Tablet</option>
           <option value= {props.dditem} >Sumsung Tablet</option>
           <option value= {props.dditem} >Asus Tablet</option>
           <option value= {props.dditem} >Motorola Tablet</option>
           <option value= {props.dditem} >HTC Tablet</option>
           <option value= {props.dditem} >Other</option>




        
      </select>

    );
}

export default Tablet;