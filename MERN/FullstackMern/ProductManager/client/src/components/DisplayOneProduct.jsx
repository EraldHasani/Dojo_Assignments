import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import "../App.css"

const DisplayOneProduct = (props) => {

    const [product, setProduct] = useState([{}]);
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {


        axios.get(`http://localhost:8000/product/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data.product);

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])




    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/product/${id}`)
            .then((res) => {
                console.log(res)
                navigate('/products')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (


        <div className="card w-50 m-auto">

            <h1 className="card-header"> {product.title} </h1>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Description: {product.description}</p>

                <div  className="d-grid gap-2 d-md-block">
                <button className=" mx-5 btn btn-outline-danger " onClick={deleteProduct}> Delete</button>
                <Link className=" mx-5  btn btn-outline-success btn-sm" to={`/product/edit/${product._id}`}> Edit</Link>
                </div>
        </div>
        

    )
}
export default DisplayOneProduct;