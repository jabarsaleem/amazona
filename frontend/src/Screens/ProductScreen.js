import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detatilsProduct } from "../actions/productAction";

function ProductScreen(props) {
  const [qty,setQty]=useState(1);
  const [Psiz, setPsize]=useState(0);
  const productDetails = useSelector((state) => state.productDetails);
  const { products, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detatilsProduct(props.match.params.id));
    return () => {};
  }, []);

  const addtocart=()=>{

    props.history.push('/cart/'+ props.match.params.id +'?qty=' + qty)
  }

  return (
    <div className="productmain">
      <div>
        <Link className="link" to="/">
          Back to Results
        </Link>
      </div>

      {loading ? 
        <div>loading...</div>
      : error ? 
        <div>{error}</div>
       :
       
        <div className="details">
          <div className="details-image">
            <img src={products.image} alt={products.name} />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{products.name}</h4>
              </li>

              <li>
                <b>{products.price}</b>
              </li>
              <li>
                {products.rating} stars ({products.numReviews} Reviews)
              </li>
              <li>
                Descrpition
                {products.descrpition}
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price:{products.price}</li>
              <li>Status:{products.instock>0? "In Stock":"Out of Stock"}</li>
              <li>
                Qty:
                <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                 {[...Array(products.instock).keys()].map(x=>

                    <option value={x+1}>
                      
                    {x+1}
                    </option>
                 )}
                </select>
              </li>
             
              <li>
                {products.instock>0 &&
                <button className="btn-cart" onClick={addtocart}> Add to Cart</button>
                
                }
              </li>
            </ul> 
          </div>
        </div>
      }
    </div>
  );
}

export default ProductScreen;
