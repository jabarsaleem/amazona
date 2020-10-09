import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removefromcart } from "../actions/CartAction";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartitems } = cart;
  const productId = parseInt(props.match.params.id);

  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removefrmcart= (productId)=>{
dispatch(removefromcart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div><h4>Price</h4> </div>
          </li>
          {cartitems.length === 0 ? 
            <div>Cart Is Empty</div>
           : 
            cartitems.map(item => 
              <li key="cartli">
              <div>
                <div className="cartimg">

                <img src={item.image} alt={item.name}  className="imgc"/>
                </div>
               
                <div className="cart-name">
                  <div>
                  <Link to={"/product/" + item.productId}>
                  {item.name}
                
                  </Link>
                  </div>
                  <div>
                    qty:
                    <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,e.target.value))}>
                      {
                        [...Array(item.instock).keys()].map(x=>
                        <option key={x+1} value={x+1}>{x+1}</option>
                        )
                      }
                      
                    </select>
                    <button type="button" onClick={()=>removefrmcart(item.product)} className="btndel">Delete</button>
                  </div>
                </div>
                <div className="cartprice">{item.price}</div>
                
              </div>
            </li>)
          }
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal({cartitems.reduce((a, c) => a + c.qty, 0)} items) : 
          
          $ {cartitems.reduce((a, c) =>  a + c.price * c.qty, 0)}
        </h3>
        <button className="btn-cart" disabled={cartitems.length === 0}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
