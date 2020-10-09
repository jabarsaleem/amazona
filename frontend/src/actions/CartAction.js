import Axios  from "axios";
import {CART_ADD_ITEM, CART_REMOVE} from '../constants/cartConstants';

const addToCart=(productId,qty)=>async(dispatch)=>{
    try{

        const {data}=await Axios.get("/api/product/"+ productId);
        dispatch({
            type:CART_ADD_ITEM,payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            instock:data.instock,
            qty


        }});
    }
    catch(error){

    }


}

const removefromcart=(productId)=>dispatch =>{
    dispatch({type:CART_REMOVE,payload:productId});
}

export {addToCart,removefromcart}