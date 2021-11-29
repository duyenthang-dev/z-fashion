import { combineReducers } from "redux";
import {ProductReducer} from './productReducer';
import { UserReducer } from "./userReducer";
const rootReducer = combineReducers({
    //state store
    products: ProductReducer,
    users: UserReducer,
})
export default rootReducer;