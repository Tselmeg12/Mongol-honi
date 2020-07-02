import React from 'react';
import data from '../data'
function HomeScreen (props){
    return   <ul className="products">
    {
      
      data.product.map(product => 
        <li>
      <div className="product">
      <img className="product-image" src={product.image}alt="product"></img>
      <div className="product-name">{product.name}</div>
        <a href="product.html">{product.name}</a>
      </div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">${product.price}</div>
      <div className="product-rating">{product.rating} Starts(10 {product.numReviews})</div>
  </li>)
}              
 </ul>
}
export default HomeScreen; 