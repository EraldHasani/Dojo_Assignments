import React from "react";
import { Link } from "react-router-dom";


const Kater = (props) => {
    return (
        <div>
            <h1> The number is :4</h1>
            <Link to={"/home"} style={{

                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#ababab",
                transition: "border-color 0.25s",

            }} >   Go to previous page </Link>


            <Link to={"/hello"} style={{

                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#ababab",
                transition: "border-color 0.25s",

            }}> Go to Hello</Link>
        </div>
    )
}
export default Kater;  