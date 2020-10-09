import React, { Component } from "react";
 
import{BrowserRouter,Route,Link} from 'react-router-dom';
import CartScreen from "./Screens/CartScreen";
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
};
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open");
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to={'/'}>amazona</Link> 
          </div>
          <div className="header-links">
            <a href="cart.html"> Cart</a>
            <a href="siginin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Cataories</h3>
          <button className="sidebar-btn" onClick={closeMenu}>
            X
          </button>
          <ul className="sidebarcat">
            <li>
              <a href="shirts.html">Shirts</a>
            </li>
            <li>
              <a href="pants.html">Pants</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/cart/:id?" component={CartScreen}/>

            
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
