import React from "react";
import Header from './Header'

// const consoles = ["Ps5 digital", "Ps5", "Xbox One", "xBox 360", "Ps4", "Nintendo Switch"];
// const tablets = ["iPad", "Google Tablet", "Samsung Tablet", "Asus Tablet", "HTC Tablet", "Phone Tablet"];
// const phones = ["iPhone", "Samsung", "OnePlus", "Google Pixel", "BlackBerry"];
// const pcs = ["IMac", "Macbook pro", "Macbook air", "Dell", "Toshiba"];

function PC(props) {
    return (
        <select className="ddbtn" name="cars" id="cars">
           <option value= {props.dditem} >iMac</option>
           <option value= {props.dditem} >MacBook Pro</option>
           <option value= {props.dditem} >MacBook Air</option>
           <option value= {props.dditem} >MacBook</option>
           <option value= {props.dditem} >MacBook Mini</option>
           <option value= {props.dditem} >Windows PC</option>
           <option value= {props.dditem} >Other</option>




        
      </select>

    );
}

export default PC;