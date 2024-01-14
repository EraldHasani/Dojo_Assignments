import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import "../App.css";


const DisplayOne = (props) => {


    const [thingData, setThingData] = useState([]);
    const [thing, setThing] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

   

    useEffect(() => {    
        axios.get(`http://localhost:9000/api/thing/${id}`)
            .then(res => {
                setThingData(res.data.thing);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
    


    const ResetLike = () => {
        
        let currentLikeCount = thing.find(thing => thing._id === id)?.like || 0;
        setThing(prevThings => {
            const updatedThings = prevThings.map(thing =>
                thing._id === id ? { ...thing, like: currentLikeCount = 0 } : thing
            );
            return updatedThings;
        }
        );
        console.log(currentLikeCount);

        axios.put(`http://localhost:9000/api/things/${id}`, {
            like: 0
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setThing(res.data.thing);
                navigate("/api/things");

            })
            .catch(err => {
                console.log('Error resetting like:', err);
            })
    }

   
const handleDelete = () => {
    axios.delete(`http://localhost:9000/api/things/${id}`)
    .then((res)=> {
        console.log(res);
       navigate("/api/things")
    })
    .catch((err)=> {
        console.log(err);
    })

}







    return (

        <>
            <p>Ero</p>
            <Link className='text-end' to="/api/things">Back</Link>
            
            <div className="container">
                <div className="row">
                    <div className="col-6">

                    <h1>{thingData.name}</h1>
                    <p className=''> Likes : {thingData.like}</p>

                       
                        <button className='m-2' onClick={()=>ResetLike(thing._id)}>Resset Like</button>

                        <button className='m-2'  > <Link to={`/api/things/edit/${thing._id}`}>  Change Name </Link> </button>
                        <button className='m-2' onClick={()=> handleDelete(thing._id)}> Delete this thing</button>
                    </div>
                </div>
            </div>
            
        </>

    )
}

export default DisplayOne;
