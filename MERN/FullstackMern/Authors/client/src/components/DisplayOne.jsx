import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../App.css";


const DisplayOne = (props) => {

    const [author, setAuthor] = useState([]);
    const [text, setText] = useState("");
    const [rating, setRating] = useState();
    const [reviews, setReviews] = useState("");
    const [imageUrl, setImageUrl] = useState([]);
    const [errors, setErrors] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()
    const navigateBack = () => {
        navigate(-1)
    }

    useEffect(() => {

        axios.get(`http://localhost:3000/api/author/${id}`)
            .then(res => {
                console.log(res);
                setAuthor(res.data.author);
                setReviews(res.data.author.reviews);

            })
            .catch(err => {
                console.log(err);
            })


    }, [])

    const addReview = (e) => {
        e.preventDefault();

        if (rating.length > 5 || rating.length < 1) {
            setErrors({ rating: { message: "Rating must be between 1 and 5" } })
        }
        else {
            axios.patch(`http://localhost:3000/api/author/${id}`, {
                text,
                rating,
                reviews
            })
                .then(res => {
                    console.log(res);
                    setReviews(res.data.author.reviews);
                    setText("");
                    setRating("");
                })
                .catch(err => {
                    console.log(err);
                    setErrors(err.response.data.errors);
                })
        }
    }







    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:3000/api/author/${id}`)
            .then((res) => {

                console.log(res);
                navigate("/api/authors")
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <>
            <div>
                <h4>Favourite Authors</h4>

                <h1> {author.name}</h1>
                <img className="card" style={{ width: "18rem" }} src={author.imageUrl} alt={author.name} />
            </div>
            <button className="btn btn-outline-primary customColor  m-2" type="cancel" onClick={navigateBack}>All Authors</button>
            <button onClick={() => deleteAuthor(author._id)}>Delete</button>



            <div>
                <h3>Read what others say about {author.name}</h3>
                {reviews.length > 0 ?
                    reviews.map((review, i) => {
                        return (
                            <div className="bg-success" key={i}>
                                <p>{review.text}</p>
                                <p >Rating: {review.rating}</p>
                            </div>
                        )
                    }) :
                    <p>No reviews yet</p>

                }
            </div>

            <div>
                <form onSubmit={(e) => addReview(e)} >
                   
                    <h4>Add a review</h4>
                    <div>
                        <label className="form-label card-title my-2"> Review... :</label>
                        <textarea className="form-control w-50 m-auto card-body" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                        { reviews.length > 1 && text.length < 3 ? <p className="text-danger">Review must be at least 3 characters</p> : null}
                    </div>

                    <div>
                        <label className="form-label card-title my-2"> Rating :</label>
                        <input className="form-control w-50 m-auto card-body" type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                        {rating > 5 || rating < 1 ? <p className="text-danger">Rating must be between 1 and 5</p> : null}

                    </div>

                    <button>  Add a review</button>

                </form>
            </div>
        </>
    )
}

export default DisplayOne;