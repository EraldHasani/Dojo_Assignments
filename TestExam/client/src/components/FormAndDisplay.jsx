import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../App.css";



const FormAndDisplay = () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");
    const [thing, setThing] = useState([]);
    const [like, setLike] = useState(false);
    const { id } = useParams();


    const navigate = useNavigate();

    const navigateBack = () =>
        navigate(-1);



    const CreateThing = (e) => {
        e.preventDefault();
        if (name.length < 3) {
            setErrors("Name its to short");

        }
        else {
            axios.post('http://localhost:9000/api/thing/new', {
                name
            }
            )
                .then(res => {
                   
                    setName("");
                    axios.get('http://localhost:9000/api/things')
                        .then(res => {
                            
                            console.log(res);
                            console.log(res.data.things);
                            setThing(res.data.things);

                        })
                        .catch(err => {
                            console.log(err);
                        })
                })

                .catch(err => {
                    setErrors("Api has some problems");
                    console.log(err);

                })
        }
    }

            //Display 


    useEffect(() => {
        axios.get('http://localhost:9000/api/things')
            .then(res => {
               
             
                setThing(res.data.things);

            })
            .catch(err => {
                console.log(err);

            })
    }, [])


        const handleLike = (id) => {
            const AddLike = thing.find(thing => thing._id === id)?.like || 0;
            setThing(prevThings => {
                const updatedThings = prevThings.map(thing =>
                    thing._id === id ? { ...thing, like: AddLike + 1 } : thing
                );
                return updatedThings;
            });

            axios.put(`http://localhost:9000/api/things/${id}`, {
                like: AddLike + 1 
            })
                .then(res => {
                   
                    axios.get('http://localhost:9000/api/things')
                        .then(res => {
                            console.log(res);
                            console.log(res.data.things);
                            setThing(res.data.things);
                            
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
               
        }



    const handleDelete = (id) => {
        axios.delete(`http://localhost:9000/api/things/${id}`)
            .then(res => {
              
                axios.get('http://localhost:9000/api/things')
                    .then(res => {
                        console.log(res);
                        console.log(res.data.things);
                        setThing(res.data.things);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

   

    


    return (
        <>
            <div>
                <p>Dashboard</p>
                <div>
                    <table className="table table-success table-striped " >
                        <thead>
                            <tr>

                                <th>Thing</th>
                                <th>Likes</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>

                            {
                                thing.length > 0 ?
                                    thing.map((thing, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{thing.name}</td>
                                                <td>{thing.like}</td>
                                                <td className='d-flex justify-content-evenly' >
                                                    <button className='' onClick={()=> handleLike(thing._id)}>Like</button>
                                                    <button> <Link to={`/api/things/${thing._id}`}>   Edit</Link> </button>
                                                    <button onClick={()=> handleDelete(thing._id)}>Delete</button>
                                                </td>

                                            </tr>

                                        )
                                    }) :
                                    <tr>
                                        <td></td>
                                        <td>There are no things yet</td>
                                        <td></td>
                                    </tr>
                                   
                                    
                            }
                        </tbody>
                    </table>
                </div>

            </div>






            <form onSubmit={(e) => CreateThing(e)} >
                <div>
                    {
                        errors.length > 0 ?
                            <span className="text-danger m-3" >{errors} </span>
                            : null
                    }


                    <label>Don`t see what you like? Add your own!</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button> I like this!</button>
                </div>

            </form>


        </>
    )

}
export default FormAndDisplay;
