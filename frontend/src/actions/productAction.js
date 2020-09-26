import axios from "axios";

const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_ERROR,
} = require("../constants/productConstants");

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_ERROR, payload: console.error.message });
  }
};

const detatilsProduct = (productId) => async(dispatch) => {
  try {
    dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId});
    const { data } = await axios.get("/api/product/"+productId);
    dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});
  } catch (error) {

    dispatch({type:PRODUCT_DETAILS_ERROR,payload:console.error.message})
  }
};
export { listProducts,detatilsProduct };
