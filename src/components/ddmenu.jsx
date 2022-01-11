import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


function ddmenu() {
    return(
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
        <Dropdown>
            <Dropdown.Toggle variant="success">
                Open Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">
                     Apple
                </Dropdown.Item>
                <Dropdown.Item href="#">
                    Google
                </Dropdown.Item>
                <Dropdown.Item href="#">
                    Samsung
                </Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
    </div>
    );
}

export default ddmenu;