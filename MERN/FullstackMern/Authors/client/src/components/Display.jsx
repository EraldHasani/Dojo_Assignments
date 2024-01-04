import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



const Display = (props) => {

    const [authors, setAuthors] = useState([{}]);


    useEffect(() => {
        axios.get(`http://localhost:3000/api/authors`)
            .then((res) => {
                console.log(res.data);
                const sortedAuthors = res.data.authors.sort((a, b) => a.name.localeCompare(b.name))
                setAuthors(sortedAuthors);
            })
            .catch((err) => {
                console.log(err);
            })
    }
        , [])


    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:3000/api/author/${id}`)
        .then((res)=> {
            
            console.log(res);
            setAuthors(prevAuthors => prevAuthors.filter(author => author._id !== id));
           
        })
        .catch((err)=> {
            console.log(err);
        })
    }


    return (
        <>
            <h1>Favourite Authors</h1>

            <Link className="btn btn-outline-primary customColor m-2" to="/api/authors/new">Add an author </Link>

            <h5>We have quotes by:</h5>


            <div className="container">


                <table className="table table-striped table-hover  ">
                    <thead>
                        <tr >
                            <th>Author</th>
                            <th c>Actions Aviable</th>
                           
                        </tr>

                    </thead>
                    <tbody>
                        {

                            authors.length > 0 ?

                                authors.map((autor, index) => {
                                    return (

                                        <tr key={index}>
                                            <td > {autor.name} </td>
                                            
                                            <td > <button> <Link className="text-decoration-none" to={`/api/author/edit/${autor._id}`} > Edit</Link>  </button>
                                            <button className="ms-4" onClick={()=> deleteAuthor(autor._id)}>Delete</button>
                                            </td> 

                                         
                                       
                                        </tr>

                                    )
                                }) :

                                <tr>
                                    <td>There are no authors yet</td>
                                    <td>  <button ><Link  className=" text-decoration-none  " to="/api/authors/new">Create the first one </Link>
</button>  </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Display;