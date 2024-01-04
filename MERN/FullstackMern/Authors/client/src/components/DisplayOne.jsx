import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,Link,useParams } from "react-router-dom";
import "../App.css";


const DisplayOne = (props) => {

    const [author, setAuthor] = useState([]);
    const { id }  = useParams()
    const navigate = useNavigate()
   
    useEffect(() => {
        
        axios.get(`http://localhost:3000/api/author/${id}`)
        .then(res=> {
            console.log(res);
            setAuthor(res.data.author);
        })
        .catch(err=> {
            console.log(err);
        })
    

    }, [] )
        
    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:3000/api/author/${id}`)
        .then((res)=> {
            
            console.log(res);
            navigate('/api/authors');
           
        })
        .catch((err)=> {
            console.log(err);
        })
    }


    return (
        <>
              <div>
            <h1>Favourite Authors</h1>
            <Link to="/api/authors">Home</Link>
            <p> {author.name}</p>
            <button  onClick={deleteAuthor}>  Delete   </button>

              </div>

        </>
    )
}

export default DisplayOne ;