import React, { Component, useState } from 'react';
import "../components/Age.css"

const Age = ({firstName,lastName,hairColor,initialAge} ) => {
    const [age, setAge] = useState(initialAge);
    const [name, setName]= useState(firstName)
    const changeName="Ero"


const increaseAge = () => {
    setAge(age + 1)
    setName("Ero") 

     };


    return (
        <>
        <div className='person'>
          <h1>{name} , {lastName}</h1>
        <h3>Age: {age}  </h3>
        <h3>hair Color : {hairColor} </h3>
 
            <button onClick={() => increaseAge()}>  Birthday Button {firstName} for Jane Doe</button>

            </div>
        </>

    );
}

export default Age;

