import React, { useEffect} from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../actions/productAction";

function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {};
  }, []);

  return(

  loading ? <div>loading...</div>:

  error?<div>{error}</div>:

  <ul className="products">
    {products.map((product) => 
      <li key={product.id}>
        <div className="product">
          <Link to={"/product/" + product.id}>
            <img className="product-image" src={product.image} alt="Product" />
          </Link>
          <div className="product-name">
            <Link to={"/product/" + product.id}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-brand">{product.catagorey}</div>
          <div className="price">{product.price}</div>
          <div className="rating">
            {product.rating} Stars ({product.numReviews})Reviews
          </div>
        </div>
      </li>
    )}
  </ul>);
}

export default HomeScreen;
