import React, { Component, useState } from 'react';
import "../components/Age.css"


const Age = ({firstName,lastName,hairColor,initialAge} ) => {
    const [age, setAge] = useState(initialAge);


const increaseAge = () => {
    setAge(age + 1);
     };


    return (
        <>
        <div className='person'>
          <h1>{firstName} {lastName}</h1>
        <h3>Age: {age}  </h3>
        <h3>hair Color : {hairColor} </h3>
 
            <button onClick={() => increaseAge()}>  Birthday Button for Jane Doe</button>

            </div>
        </>

    );
}

export default Age;

