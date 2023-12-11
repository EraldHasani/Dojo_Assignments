import React from "react";
import { Link } from "react-router-dom";


const Home = (props) => {


    return (
        <div>
            <h1 style={{ color: "red" }}>Routing Practice</h1>
            <Link to={"/Home"}    style={{

                    borderradius: "8px",
                    border: " 1px solid transparent",
                    margin: "10px",
                    padding: "0.6em 1.2em",
                    fontSize: "1em",
                    backgroundColor: "#ababab",
                    transition: "border-color 0.25s",

                }}  >          Go to Home</Link>
        </div>
    );
}

export default Home;