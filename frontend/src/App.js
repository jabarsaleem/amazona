import React, { Component } from "react";
import "./App.css";
import data from "./data";

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
};
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open");
};
class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html"> amazona</a>
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
            <ul className="products">
              {data.products.map((product) => (
                <li>
                  <div className="product">
                    <img
                      className="product-image"
                      src={product.image}
                      alt="Product"
                    />
                    <div className="product-name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-brand">{product.catagorey}</div>
                    <div className="price">{product.price}</div>
                    <div className="rating">
                      {product.rating} Stars {product.numReviews}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    );
  }
}

export default App;
