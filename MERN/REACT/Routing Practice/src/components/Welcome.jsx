import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
    return (
        <div>
            <h1> Welcome</h1>
            <Link to={"/"} style={{


                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#ababab",
                transition: "border-color 0.25s",


            }}> Go to first page</Link>


            <Link to={"/4"} style={{


                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#ababab",
                transition: "border-color 0.25s",


            }}> Go to number</Link>
        </div>
    )
}

export default Welcome;
