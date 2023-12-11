import React from "react";
import { Link } from "react-router-dom";


const Hello = (props) => {
    return (
        <div>
            <h1> The word is : Hello</h1>
            <Link to={"/4"} style={{

                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#ababab",
                transition: "border-color 0.25s",


            }}> Go to previous page  </Link>


            <Link to={"/hello/blue/red"} style={{

                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#ababab",
                transition: "border-color 0.25s",

            }}>Go to styled</Link>

        </div>
    )
}

export default Hello;