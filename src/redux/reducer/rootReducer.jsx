import { combineReducers } from "redux";
import {ProductReducer} from './productReducer';

const rootReducer = combineReducers({
    //state store
    products: ProductReducer
})
export default rootReducer;