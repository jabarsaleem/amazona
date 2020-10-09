const { CART_ADD_ITEM, CART_REMOVE } = require("../constants/cartConstants");

function cartReducer(state={cartitems:[]},action){
    switch(action.type)
    
    {
        case CART_ADD_ITEM:
            const item= action.payload;
            const product=state.cartitems.find(x=>x.product===item.product);
            if(product)
            {
              return{
                cartitems:state.cartitems.map(x=>x.product===product.product? item:x)
              };
            }
            return {
              cartitems:[...state.cartitems,item]
            };
            case CART_REMOVE:
              return{
                cartitems:state.cartitems.filter(x=>x.product!==action.payload)
              }
    default:
      return state
    }


}

export {cartReducer}