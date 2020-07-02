import React from 'react';
import data from './data';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen.js';

function App() {
 //**Ene dotor close and open button baigaa  */
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  /*look at deeshee */
  return (
    <BrowserRouter>     
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
              <Route path="/products/:id" component={ProductScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>
            


      </main>
     <footer className="footer">
         All right reserved
     </footer>
 </div>
 </BrowserRouter>  
  );
}

export default App;
