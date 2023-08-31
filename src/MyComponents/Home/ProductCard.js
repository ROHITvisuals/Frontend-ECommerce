import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import Loading from "../layout/Loader/Loader.js"


function ProductCard({product}) {
  // https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60
  const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth <600 ? 20:25,
    value:product.ratings,
    isHalf:true
  }
  return (

    
    <div>
        {/* <Link  className='productCard' to={`http://localhost:3000/product/${product._id}`}> */}
        <Link  className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} /> 
            <p>{product.name}</p>
            <div>
               <ReactStars {...options} /> <span>{product.Num_of_reviews} Reviews</span>
            </div>
            <span>&#8377;{product.price}</span>
        </Link>    
    </div>
  )       
}      
    
export default ProductCard   