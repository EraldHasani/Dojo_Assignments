import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../App.css";


const Update = (props) => {

    const [name, setName] = useState("");
    const [errorsMsg, setErrorsMsg] = useState("");
    const navigate = useNavigate();
    const [author, setAuthor] = useState({});
    const { id } = useParams()
    const navigateBack=() =>{
        navigate("/api/authors")
    }
   

    useEffect(() => {

        axios.get(`http://localhost:3000/api/author/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setName(res.data.author.name);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])




    const UpdateAuthor = (e) => {
        e.preventDefault();
        if (name.length<3) {
            setErrorsMsg("Name its to short");

        }
        else {
            axios.put(`http://localhost:3000/api/author/edit/${id}`, {
                name,

            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setName(res.data.author.name);
                    navigate(-1)
                })
                .catch(err => {
                    setErrorsMsg("Api has some problems");
                    console.log(err);

                })
        }
    }



    return (
        <>
            <form onSubmit={(e) => UpdateAuthor(e)}>

                <h1>Favourite Authors</h1>
                <Link to="/api/authors">Home</Link>

                <p>Edit this author:</p>

                <div className="border card border-success ">
             
                {
                  errorsMsg?
                <p className="text-danger text-center">{errorsMsg}</p> :
                null
            }

                    <div>
                        <label className="form-label card-title my-2"> Name:</label>
                        <input className="form-control w-50 m-auto card-body border-success" type="text" onChange={(e) => setName(e.target.value)} placeholder={name} />
                    </div>

                    {name.length > 0 && name.length < 3 ?
                        <p className="text-danger"> The name should be at least 3 characters long</p> :
                        null
                    }
                    <div className="m-auto">
                    <button  className="btn btn-outline-primary customColor  m-2"  type="cancel"  onClick={navigateBack}>Cancel</button>

                        <button className="btn btn-outline-primary customColor  m-2" type="submit">Submit</button>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Update;




