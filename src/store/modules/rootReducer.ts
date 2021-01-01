import { combineReducers } from "redux";
import cart from './cart/reducer';
import stock from './stock/reducer'

export default combineReducers({
  cart,
  stock
});