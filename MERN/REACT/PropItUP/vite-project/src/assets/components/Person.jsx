import React from "react";
import "../components/person.css"

const Person = (props) => {

    const { firstName, lastName, age, hairColor } = props
    return (
        <>
            <div className="person">
                <h1> {firstName}  {lastName}</h1>
                <h3>Age : {age}</h3>
                <h3>Hair Color : {hairColor}</h3>
            </div>
        </>
    )


}
export default Person
