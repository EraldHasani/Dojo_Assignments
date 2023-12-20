import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../App.css'
const Form = (props) => {
    const navigate = useNavigate()


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    

    const [errorMessage, setErrorMessage] = useState("");
    const createUser = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        if (firstName.length <2 || lastName.length<2 || age<1 || email.length<3){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else{
            axios.post('http://localhost:8000/api/people', {
                firstName,    // this is shortcut syntax for firstName: firstName,
                lastName,
                age,
                email      // this is shortcut syntax for lastName: lastName
            })
                .then(res=>{
                    console.log(res); // always console log to get used to tracking your data!
                    console.log(res.data);
                    setFirstName("");
                    setLastName("");
                    setAge(0)
                    setEmail("")
                    navigate('/home')
                })
                .catch(err=>{
                    setErrorMessage("Your api has some problems!")
                    console.log(err)})

                
        }
    }

  
    return(
        <div className="form">
        
            <h1>Create a student</h1>
            {
                errorMessage?
                <p className="red">{errorMessage}</p>:
                null
            }

            <form onSubmit={(e)=>createUser(e)}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}  placeholder="Enter the student first name"/>
                </div>
                { firstName.length >0 && firstName.length <3?
                <p className="red">The first name should be 2 characters or more</p>:
                null
                }
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}  placeholder="Enter the student last name"/>
                </div>
                { lastName.length >0 && lastName.length <3?
                <p className="red">The last name should be 2 characters or more</p>:
                null
                }
                
                <div>
                    <label>Age: </label>
                    <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}  placeholder="Enter the student age"/>
                </div>
                { age == 0?
                <p className="red">The age is required</p>:
                null
                }
                
                
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter the student email"/>
                </div>
                { email.length >0 && email.length <3?
                <p className="red">The email is required</p>:
                null
                }
                
                <button>Create the student</button>
                
            </form>

            
        </div>
    )
}
export default Form;