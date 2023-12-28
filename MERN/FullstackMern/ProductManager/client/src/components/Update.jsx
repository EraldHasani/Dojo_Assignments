import React,{useEffect, useState} from "react";
import axios from 'axios';
import { useNavigate,Link ,useParams} from 'react-router-dom';
import "../App.css"

const Update = (props) => {


    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [product, setProduct] = useState([{}]);
    const { id } = useParams()
    
   
useEffect(() => {
    axios.get(`http://localhost:8000/product/${id}`)
    .then((res) => {
        console.log(res.data)
        setProduct(res.data.product);
        setTitle(res.data.product.title)
        setDescription(res.data.product.description)
        setPrice(res.data.product.price)
    })
    .catch((err) => {
        console.log(err);
    })
}, [])

const navigateBack = () => {
    navigate(-1)
}

    const UpdateProduct = (e) => {

        //prevent default behavior of the submit
        e.preventDefault();
        if (title.length < 2 || description.length < 2 || price < 1) {
            setErrorMessage('Your form has some unsolved issues!')
        }
        else {

            axios.put(`http://localhost:8000/product/edit/${product._id}`, {
                title,    // this is shortcut syntax,
                description,
                price,
                
            })
                .then(res => {
                    console.log(res); // always console log to get used to tracking your data!
                    console.log(res.data);
                    setTitle("");
                    setDescription("");
                    setPrice(0)
                    navigate(-1)

                   
                })
                .catch(err => {
                    setErrorMessage("Your api has some problems!")
                    console.log(err)
                })


        }
    }

return (

    <>
    <div className=" form  px-3">
            <p className="text-decoration-none text-start" onClick={navigateBack}> &larr; </p>
            <h1 className="text-center p-2">Update a Product</h1>
            {
                errorMessage ?
                    <p className="text-danger text-center">{errorMessage}</p> :
                    null
            }

            <form className="w-50 m-auto" onSubmit={(e) =>UpdateProduct(e)}>

                <div >
                    <label  className="form-label">Title</label>
                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                {title.length > 0 && title.length < 3 ?
                    <p className="text-danger">The Title should be 2 characters or more</p> :
                    null
                }


                <div>
                    <label  className="form-label"> Price:</label>
                    <input className="form-control" type="number" value={price}  onChange={(e)=> setPrice(e.target.value)} />
                </div>
                {price <= 0 ?
                    <p className="text-danger">The Price is required</p> :
                    null
                }

                <div>
                    <label className="form-label">Description: </label>
                    <textarea className="form-control" name="text" id="" cols="30" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                {description.length > 0 && description.length < 3 ?
                    <p className="text-danger">The Description is required</p> :
                    null
                }


                <button className="btn btn-outline-success customColor mt-2">Update the Product</button>

        
             </form>

        </div>
    </>
)}
export default Update;