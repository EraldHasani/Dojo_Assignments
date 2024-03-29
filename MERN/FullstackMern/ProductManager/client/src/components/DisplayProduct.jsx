import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import "../App.css"

const DisplayProduct = (props) => {

    const [products, setProducts] = useState([{}])
    



    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then((res) => {
                console.log(res.data)
                setProducts(res.data.products);

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    return (

        <>

            <h1 className="text-center">All Products </h1>


            <div className=" d-flex justify-content-evenly">
                {
                    products.length > 0 ?

                        products.map((produkt, index) => {
                            return (

                                <div className=" card  d-flex justify-content-evenly" key={index}>
                                    <div className="card-body ">
                                        <h2 className="card-title">  <Link to={`/product/${produkt._id}`}>{produkt.title}</Link></h2>
                                       

                                    </div>

                                </div>
                            )
                        }) :
                        <div>
                            <h1 className="card">There are no products</h1>
                            <Link to="/create/product"> <button className="btn btn-outline-success customColor mt-2"> Create the product</button></Link>

                        </div>}

            </div>






        </>
    )
}
export default DisplayProduct;