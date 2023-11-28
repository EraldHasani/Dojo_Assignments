import React, { useState } from  'react';
import "../components/UserForm.css"


const UserForm = (props) => {
    const [ firstName, setFirstName]= useState("");
    const [ lastName,  setLastName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpassword, setConfPassword] = useState("");  

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstName: firstName,
            lastName: lastName,
            email: email, 
            password: password,
            ConfPassword: confPassword,
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <form>
            <div className='data d-flex'>
                <label  ClassName=''>FirstName: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div >
            <div className="data d-flex">
                <label className=''>LastName: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className="data d-flex" >
                <label >    Email : </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className="data d-flex">
                <label >Password: </label>
                <input type="password"   value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className="data d-flex">
                <label > Confirm Password: </label>
                <input type="password"   value={confpassword} onChange={ (e) => setConfPassword(e.target.value) } />
            </div>


            <div className='results'>
                <h1>Your form  data</h1>
                <p>FirstName : {firstName}</p>
                <p>LastName : {lastName}</p>
                <p>Email: {email}</p>
                <p>Password : {password} </p>
                <p>Confirm Password: {confpassword}</p>
            </div>
        </form>
    );
};
    
export default UserForm;
