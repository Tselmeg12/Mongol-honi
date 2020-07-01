import React from 'react';
import data from './data'
import './App.css';
import Homescreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classNameList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classNameList.remove("open");
  }
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
          <button onClick={openMenu}>
              &#9776;
          </button>
          <a href="index.amazon.html">Amazon</a>
      </div>
      <div className="header-links">
          <a href="card.html">Cart</a>
          <a href="signin">Sign in</a>
      </div>
     </header>
     <aside className="sidebar">
         <h3>Shopping Categories</h3>
         <button className="sidebar-close-button"onClick={closeMenu}>x</button>
         <ul>
             <li>
                 <a href="index.html">Laptop</a>
             </li>

             <li>
                 <a href="index.html">Desktop</a> 
             </li>
         </ul>
     </aside>
        <main className="main">
            <div className="content"></div>
              <ul className="products">
              {
                data.product.map(product =>
                  <li>
                  <div className="product">
                   <img className="product-image" src={product.image} alt="product"></img>
                   <div className="product-name">
                     <a href="product.html">{product.name}</a>
                   </div>
                   <div className="product-brand">{product.brand}</div>
                   <div className="product-price">${product.price}</div>
                   <div className="product-rating">{product.rating} Starts({product.numReviews}</div>
                  </div>
               </li>)
              }
            
          </ul>

      </main>
     <footer className="footer">
         All right reserved
     </footer>
     </div>
  );
}

export default App;
