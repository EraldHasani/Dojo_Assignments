import React, {useState} from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import "../App.css";


const Form = () => {
    
    const [name, setName] = useState("");
    const [errorsMsg, setErrorsMsg] = useState("");
    const navigate = useNavigate();
    const navigateBack=() =>{
        navigate(-1)
    }

    const CreateAuthor = (e) => {
        e.preventDefault () ;
        if (name.length<3) {
            setErrorsMsg("Name its to short");
         
        }
        
        else {
            axios.post('http://localhost:3000/api/authors/new', {
                 name,
            })
            .then(res=> {
                console.log(res);
                console.log(res.data);
                setName("");
                navigate("/api/authors")
            })
            .catch(err=> {
                setErrorsMsg("Api has some problems");
                console.log(err);

            })
        }
    }

    return (
        <>
    <form  onSubmit={(e)=>CreateAuthor(e)}>

        <h1>Favourite Authors</h1>
        <Link to="/api/authors">Home</Link>

        <p>Add a new author:</p>

        <div className="border border-secondary rounded  ">
        {
                errorsMsg?
                    <p className="text-danger text-center">{errorsMsg}</p> :
                    null
            }
            
            <div>
            <label className="form-label card-title my-2"> Name:</label>
            <input className="form-control w-50 m-auto card-body"  type="text" value={name}   onChange={(e)=> setName(e.target.value)}/>
            </div>

            {  name.length>0 && name.length< 3 ?
                <p className="text-danger"> The name should be at least 3 characters long</p> :
                 null
                }
            <div className="m-auto">
            <button  className="btn btn-outline-primary customColor  m-2"   onClick={navigateBack}>Cancel</button>
            <button className="btn btn-outline-primary customColor  m-2"  type="submit">Submit</button>
            </div>
        </div>

        </form>
        </>
    )
} 

export default Form ;