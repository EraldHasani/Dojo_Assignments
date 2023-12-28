import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../App.css"

const DisplayProduct = (props) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/products')
        .then((res)=>{
        console.log(res.data)
        setProducts(res.data.products);
        
    })
        .catch((err)=>{
              console.log(err);
        })
      }, [])

   
return (

    <>
  
    <h1 className="text-center">All Products </h1>
    
   
    
    {
        products.length > 0 ?
        products.map((produkt,index)=> {
            return(
                
                <div className=" card  d-flex justify-content-evenly" key={index}>
                    <div className="card-body ">
                    <h2 className="card-title">  <Link  to={`/product/${produkt._id}`}>{produkt.title}</Link></h2>
                    {/* <p className="card-subtitle mb-2 text-muted">Price: ${produkt.price}</p>
                    <p className="card-text"> Description: {produkt.description}</p> */}
                    </div>

                </div>
            )
        }):
        <div>
            <h1>There are no products</h1>
            <Link to="/create/product">Create a product</Link>
        </div>
    }

   
    
    

    </>
)}
export default DisplayProduct;