import React, {useState} from "react";  
import Navbar from "../components/Navbar";
import DisplayProduct from "../components/DisplayProduct";

const Home = (props) => {
    const [products, setProducts] = useState([])
    return(
        <>
        
            <Navbar />
            <DisplayProduct products={products} setProducts={setProducts}/>

        </>
            
    )
}
export default Home;