import React, { useState } from "react";
import "../components/UserForm.css"
const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");
    const [error, setError] = useState("");

    const createUser = (e) => {
        e.preventDefault();


    };

    return (
        <form onSubmit={createUser}>
            <div className="data">
                <label > FirstName:</label>
                <input type="text"  onChange={(e)=>setFirstName(e.target.value)} placeholder="Search..."/>
            </div>

            {   firstName.length > 0 && firstName.length<3 ?
                   <p>First Name must be at least 2 characters </p> :   null
            }

            <div className="data">
                <label > LastName:</label>
                <input type="text" onChange={(e)=> setLastName(e.target.value)} placeholder="Search..." />
            </div>

            { lastName.length >0 && lastName.length<3 ?
                 <span>Last Name must be at least 2 characters </span> : null
            }

            <div className="data">
                <label > Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Search..." />
            </div>

            {   email.length>0 && email.length<3 ?
            <span>Email must be at least 2 characters </span> : null
            }

            <div className="data">
                <label > Password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Search..."/>
            </div>
            {
                password.length>0 && password.length<8 ?
                     <span>Password must be at least 8 characters </span> : null

            }

            


            <div className="data">
                <label > Confirm Password:</label>
                <input type="password" onChange={(e)=>setConfPassword(e.target.value)} placeholder="Search..."/>
            </div>
            <button type="submit">Submit</button>
            {    password === confpassword ?
                null :  <span>Password must match </span> 

            }




        </form>
    );

};

export default UserForm;
