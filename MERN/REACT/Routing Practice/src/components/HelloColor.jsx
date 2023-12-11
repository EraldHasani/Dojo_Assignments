import React from "react";
import { Link } from "react-router-dom";



const HelloColor = (props) => {
    return (
        <div>
            <h1 style={{ backgroundColor: "red", color: "blue", border: "2px solid black", width: "100%" }}>The word is: hello</h1>

            <Link to={"/hello"} style={{


                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#1a1a1a",
                transition: "border-color 0.25s",


            }}>Go to previous page</Link>


            <Link to={"/"} style={{


                borderradius: "8px",
                border: " 1px solid transparent",
                margin: "10px",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                backgroundColor: "#1a1a1a",
                transition: "border-color 0.25s",
                

            }}> Go to First page</Link>
        </div>
    )
}

export default HelloColor;
