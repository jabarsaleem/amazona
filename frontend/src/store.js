import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import {productListReducer,productDetailsReducer} from './reducer/productReducers';
import{cartReducer} from './reducer/cartReducer';
import thunk from 'redux-thunk';


const initalstate={};

const reducer=combineReducers({

    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
    

})
const store = createStore(reducer,initalstate,compose(applyMiddleware(thunk)));

export default store;