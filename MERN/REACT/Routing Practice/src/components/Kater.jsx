import React from "react";
import { Link, useParams } from "react-router-dom";


const Kater = (props) => {

    const { word, color, backgroundColor } = useParams();


    return (
        <div>
            { isNaN(word) ?



                    <h1 style={
                        color?
                        {color:color , backgroundColor:backgroundColor} : null 
                    }>  This is a  {word}</h1> :


                    <h1> The number is: {word} </h1>

            }


        </div>
    )
}
export default Kater;  