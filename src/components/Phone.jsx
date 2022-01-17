import React from "react";
import Header from './Header'




function Phone(props) {
    return (
        <select className="ddbtn" name="cars" id="cars">
           <option value= {props.dditem} >iPhone 13 Pro Max</option>
           <option value= {props.dditem} >iPhone 13 Pro</option>
           <option value= {props.dditem} >iPhone 13</option>
           <option value= {props.dditem} >iPhone 13 Mini</option>
           <option value= {props.dditem} >iPhone 12 Pro Max</option>
           <option value= {props.dditem} >iPhone 12 Pro</option>
           <option value= {props.dditem} >iPhone 12</option>
           <option value= {props.dditem} >iPhone 12 Mini</option>
           <option value= {props.dditem} >iPhone 11</option>
           <option value= {props.dditem} >iPhone 11 Pro Max</option>
           <option value= {props.dditem} >iPhone 11 Pro</option>
           <option value= {props.dditem} >iPhone XS Max</option>
           <option value= {props.dditem} >iPhone XS</option>
           <option value= {props.dditem} >iPhone 8 or lower</option>
           <option value= {props.dditem} >Sumsung S20</option>
           <option value= {props.dditem} >Sumsung S20+</option>
           <option value= {props.dditem} >Sumsung Note 10 Plus</option>
           <option value= {props.dditem} >Sumsung S10</option>
           <option value= {props.dditem} >Sumsung S9</option>
           <option value= {props.dditem} >Sumsung S8</option>
           <option value= {props.dditem} >Sumsung S10 Plus</option>
           <option value= {props.dditem} >Sumsung S9 Plus</option>
           <option value= {props.dditem} >Sumsung S8 Plus</option>
           <option value= {props.dditem} >Google Pixel 6 Pro</option>
           <option value= {props.dditem} >Google Pixel 6 </option>
           <option value= {props.dditem} >Google Pixel 5a</option>
           <option value= {props.dditem} >Google Pixel 5</option>
           <option value= {props.dditem} >Google Pixel 4a</option>
           <option value= {props.dditem} >Other Device</option>
















        
      </select>

    );
}

export default Phone;