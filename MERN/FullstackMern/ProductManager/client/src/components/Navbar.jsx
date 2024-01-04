import React from "react";  
import { Link, useParams } from "react-router-dom";
const Navbar = (props) => {
    

    return(
        <div  style={{padding:'20px', display:'flex', justifyContent:'space-between' , backgroundColor: "lightblue", }}>
            <Link to="/products">Home</Link>
            <Link to="/create/product">Create Product</Link>
        </div>
    )
}
export default Navbar;