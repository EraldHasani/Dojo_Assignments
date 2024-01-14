import React from "react";  
import { Link, useParams } from "react-router-dom";
const Navbar = (props) => {
    

    return(
        <div style={{padding:'20px', display:'flex', justifyContent:'space-around'}}>
            <Link to="/">Home</Link>
        </div>
    )
}
export default Navbar;