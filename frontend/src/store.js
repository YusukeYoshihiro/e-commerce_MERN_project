import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
  productListReducer, 
  productDetailsReducer 
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers'



const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
   cart: cartReducer,
});

// localStorage.getItem => The Storage.getItem() method is used to get a data item from storage
// JSON.parse() => The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. 
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: {cartItems: cartItemsFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;